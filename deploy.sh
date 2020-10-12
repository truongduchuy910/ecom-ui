#!/bin/bash
echo "build"
npm run export
cp -r ./out/* ../ThousandTimes/001
rm -fr ./out
cd ../ThousandTimes
git add .
git commit -m "build"
git push origin master
