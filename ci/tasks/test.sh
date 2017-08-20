#!/usr/bin/env sh
cp -R npm-repo-cache source-code/node_modules
cd source-code
ls -R
npm test