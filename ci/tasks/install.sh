#!/usr/bin/env sh
cd source-code
npm install
cp -R node_modules/* ../node_modules
cp -R node_modules/.* ../node_modules