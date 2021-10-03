#!/bin/bash
#autour: Lruihao
echo "Please enter the serial number to work"
echo "----------------------------------"
echo "1. post generator"
echo "2. hugo server"
echo "3. hugo build"
echo "4. public async"
echo "5. auto push"
echo "----------------------------------"
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
    sh hugo_builder.sh
    ;;
  4)
    sh public_async.sh
    ;;
  5)
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