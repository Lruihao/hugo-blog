#!/bin/bash
#author: Lruihao
echo "--------------Hugo Admin--------------"
echo "Please enter the serial number to work"
echo "--------------------------------------"
echo "1. post"
echo "2. server"
echo "3. server:production"
echo "4. build"
echo "5. submodule-sync"
echo "6. push"
echo "--------------------------------------"
echo "Press Ctrl+C to stop"

read num
case $num in
  1) 
    sh post_generator.sh
    ;;
  2)
    hugo server --disableFastRender --navigateToChanged --source=../ --bind 0.0.0.0
    ;;
  3)
    hugo server --disableFastRender --navigateToChanged --environment production --source=../ --bind 0.0.0.0
    ;;
  4)
    hugo -v --gc --minify --source=../
    ;;
  5)
    sh submodule_sync.sh
    ;;
  6)
    sh auto_push.sh
    ;;
  *)
    echo "There is no such serial number"
    ;;
esac

echo "Press any key to continue..."
read x
clear
sh hugo_main.sh
