#!/bin/bash

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
echo "current branch ".$branch

echo "export"
npm run export

echo "move"
cp -r ./out/* ../ThousandTimes/$branch
rm -fr ./out

echo "push"
git add .
git commit -m "build"
git push origin $branch 

echo "deploy"
cd ../ThousandTimes
git add .
git commit -m "build"
git push origin master
