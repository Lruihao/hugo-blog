@echo off
title Auto push hugo blog source
cd ..
git submodule update --remote 
git add public
git commit -m "Feat: Update public module commit id"
git add .
git commit -m "『菠菜眾長』源码自动更新：%date%%time%"
git push

