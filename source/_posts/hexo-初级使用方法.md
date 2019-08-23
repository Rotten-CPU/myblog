---
title: hexo 初级使用方法
date: 2019-08-23 15:32:24
tags: hexo
categories: hexo
---

### 基础指令

```bash
# 新建文章 hexo new "New Post"
hexo n "New Post"

# 删除文章 - 直接本地source/_post删除.md即可

# 本地运行 hexo server
hexo s

# 生成静态文件 hexo deploy
hexo g

# 部署远程站点 hexo deploy 
hexo d

# 一键生产部署
hexo g -d
```

```
# 生成tags
hexo new page tags
# 生成分类
hexo new page categories

```