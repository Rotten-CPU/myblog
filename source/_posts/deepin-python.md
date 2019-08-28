---
title: deepin-python
date: 2019-08-28 14:35:22
tags: python
categories: python
---

### deepin 基本操作

```bash
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python get-pip.py
# 失败很多次，最终才成功
pip -V
```

### deepin安装虚拟环境

```bash
sudo pip install virtualenv
sudo pip install virtualenvwrapper
vim ~/.bashrc
# 添加如下
exprot PATH=/usr/locl/bin:$PATH
source /usr/local/bin/virtualenvwrapper.sh
# :wq 保存 生效
source ~/.bashrc
```

### 使用国内镜像（mac, linux测试通过）

```bash
mkdir ~/.pip/
touch ~/.pip/pip.conf
vim ~/.pip/pip.conf
# 内容如下
[global]
index-url = https://pypi.douban.com/simple
# 镜像原自行挑选
# 阿里云 http://mirrors.aliyun.com/pypi/simple/ 
# 中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/ 
# 豆瓣(douban) http://pypi.douban.com/simple/ 
# 清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/ 
# 中国科学技术大学 http://pypi.mirrors.ustc.edu.cn/simple/
# 或直接使用镜像源下载
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple django
```