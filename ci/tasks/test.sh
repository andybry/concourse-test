#!/usr/bin/env sh
ln -s node_modules source-code
cd source-code
ls -R node_modules
npm test