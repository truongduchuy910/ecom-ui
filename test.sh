#!/bin/bash
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
echo $branch
git add . 
git commit -m "build"
git push origin $branch

