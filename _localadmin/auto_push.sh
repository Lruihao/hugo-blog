#!/bin/bash
#author: Lruihao
cd ..
git add .
read -p "Please enter commit message: " commitMsg
if [ -z $commitMsg ];then
  commitMsg="Docs: Lruihao's Note update $(date +'%F %a %T')"
fi
git commit -m ":pencil: $commitMsg"
git push
