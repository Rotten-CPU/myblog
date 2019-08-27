---
title: git 基础操作
date: 2019-08-26 10:03:41
tags: git
categories: git
---

### 基本指令

```bash
# 第一次
git init
# git add <file>
git add .
# git commit -m <message>
git commit -m "first commit"
git remote add origin git@github.com:Rotten-CPU/jqy.git
git push -u origin master
# 第二次
# git add <file>
git add .
# git commit -m <message>
git commit -m "update"
git push origin matser
# 本地未修改，拉去远程
git pull
# 本地修改，拉去远程，以远程为准
git reset --hard # 彻底回退上个版
git pull
# git 查看状态
git status


# 查看本地分支和远程branch名称
git branch -av
```