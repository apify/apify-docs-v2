import { dirname, parse, relative, resolve } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs-extra';
import { globby } from 'globby';
import { request } from 'undici';

// TODO
//   - sidebar in SDK
//   - no index in SDK

const rootPath = dirname(fileURLToPath(import.meta.url)) + '/../';
const sources = ['academy', 'platform'];
const links = {};
const redirects = [];

async function transformFrontmatter(lines, paths, output) {
    let line;

    if ((line = lines.findIndex(l => l.match(/menuWeight: \d+/i))) >= 0) {
        lines[line] = lines[line].replace(/menuWeight: (\d+)/i, 'sidebar_position: $1');
    }

    if ((line = lines.findIndex(l => l.match(/externalSourceUrl: .+/i))) >= 0) {
        const externalSourceUrl = lines[line].match(/externalSourceUrl: (.+)/i)[1];
        const { body } = await request(externalSourceUrl);
        let text = await body.text();
        text = text.replaceAll(/<img (.*?)(?<!\/)>/g, '<img $1 \/>');
        text = text.replaceAll(/!\[(.*?)]\((.*?)\)/g, (_, alt, src) => {
            return `![$1](${new URL(src, externalSourceUrl).toString()})`;
        });
        const heading = text.match(/^# (.*)/)?.[1];

        if (heading) {
            if ((line = lines.findIndex(l => l.match(/title: .+/i))) >= 0) {
                lines[line] = lines[line].replace(/title: .+/i, 'title: ' + heading);
            } else {
                lines.unshift('title: ' + heading);
            }

            text = text.replace(heading + '\n', '')
        }

        output.push(text);
    }

    let slug;

    if (paths.length > 0) {
        if (paths.find(p => p.trim().endsWith('index'))) {
            slug = '/';
        } else {
            const path = paths.pop().replace('- ', '').trim();
            slug = '/' + path;
        }

        lines.push('slug: ' + slug);
    }

    lines.unshift('---');
    lines.push('---');

    output.unshift(...lines);

    return slug;
}

async function transformLine(line, cwd) {
    if (line.match(/```JavaScript/i)) {
        line = line.replace(/```JavaScript/i, '```js');
    }

    if (line.match(/```TypeScript/i)) {
        line = line.replace(/```TypeScript/i, '```ts');
    }

    if (line.match(/```JSON/i)) {
        line = line.replace(/```JSON/i, '```json');
    }

    if (line.match(/```GraphQL/i)) {
        line = line.replace(/```GraphQL/i, '```graphql');
    }

    if (line.match(/\{\{@asset .*}}/i)) {
        let imgPath = line.match(/\{\{@asset (.*)}}/i)[1];
        const files = await globby('sources/**/' + imgPath);

        if (files.length > 0) {
            let path = relative(cwd, files[0]);
            path = path.startsWith('.') ? path : './' + path;
            line = line.replace(/\{\{@asset (.*)}}/i, path);
        }
    }

    return line;
}

async function transformLinksOnLine(line, cwd, source) {
    if (!line.match(/\{\{@link .*}}/i)) {
        return line;
    }

    const mdPath = (line.match(/\{\{@link (.*?)(#.+)?}}/i))[1];
    const files = await globby([
        `sources/${source}/**/${mdPath}`,
        `sources/${source}/**/${mdPath.replace(/\.mdx?$/, '')}/index.md`,
    ]);

    if (files.length !== 1) {
        console.error('link not matched to source file', mdPath, source, files);
        return line;
    }

    let path = relative(cwd, files[0]);
    path = path.startsWith('.') ? path : './' + path;
    line = line.replace(/\{\{@link (.*)}}/i, path);

    return line;
}

// copy everything first
await fs.remove('sources');
await fs.copy('sources_orig', 'sources');
const processed = [];

for (const source of sources) {
    const files = await globby(`${rootPath}sources/${source}/**/*.{md,mdx}`);

    // transformLine copied the files
    for (const filepath of files) {
        const input = (await fs.readFile(filepath, { encoding: 'utf8' })).split('\n');
        const output = [];
        let path = resolve(filepath.replace('sources_orig/', 'sources/'));
        let parentFolder = resolve(path.replace(new RegExp(parse(path).ext + '$'), ''));

        // move the file to the folder with the same name
        if (fs.pathExistsSync(parentFolder)) {
            await fs.remove(path);
            path = parentFolder + '/index' + parse(path).ext;
        } else {
            parentFolder = resolve(parentFolder + '/..');
        }

        // process front matter separately
        let insideFrontmatter = false;
        let inPaths = false;
        const frontmatter = [];
        const paths = [];

        for (const line of input) {
            if (line.trim() === '---') {
                insideFrontmatter = !insideFrontmatter;
                continue;
            }

            if (insideFrontmatter) {
                if (line.trim().startsWith('#')) {
                    continue;
                }

                if (line.includes('paths:')) {
                    inPaths = !inPaths;
                    continue;
                }

                if (inPaths) {
                    paths.push(line.trim());
                    continue;
                }

                frontmatter.push(line);
                continue;
            }

            output.push(await transformLine(line, parentFolder));
        }

        let slug = await transformFrontmatter(frontmatter, paths, output);

        if (slug) {
            if (source === 'platform') {
                redirects.push(`  rewrite ^${slug}$ /${source}${slug} permanent;`);
            }

            slug = links[path] = `/${source}${slug}`;
        }

        processed.push({ path, output, frontmatter, slug, source, parentFolder });
        await fs.writeFile(path, output.join('\n'));
    }
}

// iterate once again to fix absolute links between sources
for (const { path, output: input, slug, source, parentFolder, frontmatter } of processed) {
    const output = [];
    const description = frontmatter.find(row => row.startsWith('description: '))?.match(/description: (.*)/)[1].trim();
    let descriptionAdded = false;

    for (const line of input) {
        output.push(await transformLinksOnLine(line, parentFolder, source));

        if (line.startsWith('# ') && !descriptionAdded) {
            output.push('');
            output.push(`**${description}**`);
            output.push('');
            output.push('---');
            descriptionAdded = true;
        }
    }

    await fs.writeFile(path, output.join('\n'));
}

console.log(redirects.join('\n'));
