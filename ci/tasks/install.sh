#!/usr/bin/env sh
cd src
npm install
cp -R node_modules/* ../node_modules
cp -R node_modules/.* ../node_modules