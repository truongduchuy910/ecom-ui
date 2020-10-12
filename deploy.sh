#!/bin/bash
npm run export
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
mkdir ../ThousandTimes/$branch
cp -r ./out/* ../ThousandTimes/$branch
rm -fr ./out
git add .
git commit -m "build"
git push origin $branch 
cd ../ThousandTimes
git add .
git commit -m "build"
git push origin master
