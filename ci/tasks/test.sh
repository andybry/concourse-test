#!/usr/bin/env sh
rm -rf source-code/node_modules
cp -R node_modules source-code
cd source-code
ls -R
npm test