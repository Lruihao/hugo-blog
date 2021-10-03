#!/bin/bash
#autour: Lruihao
cd ..
git submodule update --remote 
git add public
git commit -m "Feat: Update public module commit id"
git add .
read -p "Please enter commit message: " commitMsg
if [ -z $commitMsg ];then
  commitMsg="『菠菜眾長』源码自动更新：$(date +'%F %a %T')"
fi
git commit -m "$commitMsg"
git push
