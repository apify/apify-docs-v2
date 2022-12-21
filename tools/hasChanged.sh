#!/bin/bash

CHECKED_PATH=$1

if [ -z "$CHECKED_PATH" ]; then
    echo "Please provide a path."
    exit 1
fi

CHANGES=$(git diff --stat HEAD^! -- "$CHECKED_PATH")

if [[ -z $CHANGES ]]; then
    echo "No changes detected on $CHECKED_PATH."
    exit 1
else
    echo "Changes on $CHECKED_PATH detected!"
    echo "$CHANGES"
    exit 0
fi
