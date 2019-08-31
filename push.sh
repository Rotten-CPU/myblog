#!/bin/bash
echo "执行：git add ."
git add .
echo "执行：git commit -m 当前时间"
shijian=`date +%F' '%H:%M:%S'提交数据'`
echo $shijian
git commit -m "$shijian"