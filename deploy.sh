#!/bin/bash

echo "build"
npm run export

echo "move export file to ThousandTimes responsitory"
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
mkdir ../ThousandTimes/$branch
cp -r ./out/* ../ThousandTimes/$branch
rm -fr ./out

echo "commit ecom-ui change"
git add .
git commit -m "build"
git push origin $branch 

echo "commit ThousandTimes change"
cd ../ThousandTimes
git add .
git commit -m "build"
git push origin master

echo "restart request"
curl https://thousandtimes.loaloa.tech/restart
