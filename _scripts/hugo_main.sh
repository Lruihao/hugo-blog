#!/bin/bash
#author: Lruihao
echo "--------------Hugo Admin--------------"
echo "Please enter the serial number to work"
echo "--------------------------------------"
echo "1. new"
echo "2. start"
echo "3. start-production"
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
    sh hugo_server.sh
    ;;
  3)
    sh hugo_server_production.sh
    ;;
  4)
    sh hugo_builder.sh
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