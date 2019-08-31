---
title: hexo git shell
date: 2019-08-31 11:22:20
tags: hexo
categories:
- hexo
- git
---

### 部署hexo脚本

```bash
touch run.sh
# 内容如下
hexo clean && hexo g && hexo d
# 执行./run.sh
```

### git提交数据

```bash
touch push.sh
# 内容如下
#!/bin/bash
echo "执行：git add ."
git add .
echo "执行：git commit -m 当前时间"
time=`date +%F' '%H:%M:%S' 提交数据'`
git commit -m "$time"
echo "执行：git push origin dev"
git push origin dev
echo "脚本执行完毕"
# 执行./push.sh
```