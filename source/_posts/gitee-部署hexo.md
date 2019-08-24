---
title: gitee 部署hexo
date: 2019-08-23 22:55:28
tags: hexo
categories: hexo
---

### gitee新建仓库

```bash
# 注意：要使用hexo仓库名字跟个人空间地址保持一致
# 如：
https://gitee.com/myblog 
# 仓库名：
myblog
# why，这样子后面部署好能直接使用如下访问
myblog.gitee.io
```

### 配置ssh公钥

```bash
# windows git bash
ssh-keygen # 回车至end
cd ~/.ssh/
mv id_rsa gitee_rsa
vim config
# 如下
Host gitee.com
User 个人资料里的姓名
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitee_rsa
# esc:wq 保存
# 将 id_rsa.pub 复制黏贴到 gitee 的ssh 公钥匙里
# 测试是否连接成功
ssh -T git@gitee.com
# 提示成功 则能正常连接 进行提交代码等操作
```

<!-- more -->
### hexo部署

```bash
# 修改 hexo目录下 _config.yml 如下
deploy:
  type: git
  repository: 你的仓库ssh地址
  branch: master
# 执行
hexo g
hexo d
```

### 测试自动化部署

```bash
npm install hexo-deployer-git --save
hexo clean && hexo g && hexo d
```