#!/usr/bin/env sh
cd source-code
ln -s ../node_modules node_modules
ls -R node_modules
npm test