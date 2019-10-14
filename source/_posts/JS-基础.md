---
title: JS 基础
date: 2019-10-14 10:13:36
tags:
---

### js 目前7中基本类型

```bash
String
Number
Boolean
Null
Undefined
Object
Symbol(ES6)
# 除了 Object 是复杂数据类型外，其它的 6 种是 JS 的基本数据类型。
```

### js 算术运算

| 运算符 | 运算名 |
| :---- | :----: |
| + | 加法 |
| ++ | 自增 |
| * | 乘法 |
| ** | 指数 |
| - | 减 |
| -- | 自减 |
| / | 除 |
| % | 取除 |

### js 常规函数

```bash
# 命名函数
function sum(a, b) {
  return a + b;
}
匿名函数（或者用作回调函数）
var sum = function(a, b) {
  return a + b;
};
对象方法
var obj = {
  func: function() {
    // todo
  }
};
obj.func()
对象方法简写(ES 6)
var obj = {
  func() {
    // todo
  }
};
obj.func()
IIFE(立即执行函数)
var func = (function() {
  // todo
})();
```

### js 箭头函数 ES6

```bash
命名箭头函数
const func = () => console.log('hello world');
const func = () => { console.log('hello world'); }
匿名箭头函数
const fun = (a, b) => a + b;
对象方法
var obj = {
  name: 'Tom',
  func: () => console.log('hello world'),
  func2: () => console.log(this.name)
};
obj.func() // hello world
obj.func2() // undefined
# 箭头函数不太适合作为对象方法
IIFE 箭头函数
(() => {
  console.log('hello world');
})();
```

### 其他知识

```bash
# 将字符串小写改成大写（英文中，加中文也一样能实现）
string.toUpperCase()
# 如上方法是在 String.prototype 这里获取，其他Array.prototype 这里输出查看
console.log(String.prototype)
# 特殊属性 getters / setters
# getters
let x = array.length
# setters
array.length = 50;
# 骚操作 适用微信小程序
const obj = {
  name: '你好',
  'test 1': '测试下',
  '图片列表': '图片路径'
}
console.log(obj)
console.log(obj.name)
console.log(obj['test 1'])
console.log(obj['图片列表'])
this.setData({
  obj
})
<view>
{{ obj['图片列表'] }}
</view>
```

### 总结

```bash
JS 具有七个称为 “类型” 的基本构建块，其中 6 个也称为基本数据类型。 Object 本身就是一种类型，也是该语言最重要的实体。 对象是用于一对键/值的容器，并且可以包含几乎所有其他 JS 的类型，包括函数。
```
