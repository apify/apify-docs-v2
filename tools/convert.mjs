import { dirname, parse, relative } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs-extra';
import { globby } from 'globby';
import { request } from 'undici';

// TODO
//   - sidebar in SDK
//   - no index in SDK

const rootPath = dirname(fileURLToPath(import.meta.url)) + '/../';

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

    if (paths.length > 0) {
        if (paths.find(p => p.trim().endsWith('index'))) {
            lines.push('slug: /');
        } else {
            const path = paths.pop().replace('- ', '').trim();
            lines.push('slug: /' + path);
        }
    }

    lines.unshift('---');
    lines.push('---');

    output.unshift(...lines);
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

    if (line.match(/\{\{@link .*}}/i)) {
        let mdPath = line.match(/\{\{@link (.*?)(#.+)?}}/i)[1];
        const files = await globby('sources/**/' + mdPath);

        if (files.length > 0) {
            let path = relative(cwd, files[0]);
            path = path.startsWith('.') ? path : './' + path;
            line = line.replace(/\{\{@link (.*)}}/i, path);
        }
    }

    return line;
}

// copy everything first
await fs.remove('sources');
await fs.copy('sources_orig', 'sources');
const files = await globby(rootPath + 'sources/*/**/*.{md,mdx}');

// transformLine copied the files
for (const filepath of files) {
    const input = (await fs.readFile(filepath, { encoding: 'utf8' })).split('\n');
    const output = [];
    let path = filepath.replace('sources_orig/', 'sources/');
    let parentFolder = path.replace(new RegExp(parse(path).ext + '$'), '');

    // move the file to the folder with the same name
    if (fs.pathExistsSync(parentFolder)) {
        await fs.remove(path);
        path = parentFolder + '/index' + parse(path).ext;
    } else {
        parentFolder = parentFolder + '/..';
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

    await transformFrontmatter(frontmatter, paths, output);

    await fs.writeFile(path, output.join('\n'));
}
