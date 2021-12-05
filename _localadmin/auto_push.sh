#!/bin/bash
#author: Lruihao
cd ..
git add .
read -p "Please enter commit message: " commitMsg
if [ -z $commitMsg ];then
  commitMsg="Docs: 『菠菜眾長』内容更新 $(date +'%F %a %T')"
fi
git commit -m ":pencil: $commitMsg"
read -p "Async submodule public commit id? [y/n]..." async
if [ $async = 'y' ];then
  git submodule update --remote 
  git add public
  git commit -m ":arrow_up: Feat: Update public module commit id"
fi
git push
