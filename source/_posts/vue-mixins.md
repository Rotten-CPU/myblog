---
title: vue mixins
date: 2019-09-24 21:04:32
tags: vue
categories: vue
---

## mixins - list

> 处理列表数据 -  增删改查

### 属性/Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :---- | :----: | :----: | :----: | :----: |
| list_data | 列表数据 | array | - | null |
| list_total | 总 | number | number | null |
| list_loading | 加载 | boolean | true/false | false |
| list_query | 请求参数 | object | - | { pageNum: 1, pageSize: 5 } |
| add_data | 新增数据参数 | object | - | null |
| edit_data | 修改数据参数| object | - | null |
| del_data | 删除数据参数| object | - | null |
| add_data_show | 新增弹窗显示 | boolean | true/false | false |
| edit_data_show | 修改弹窗显示 | boolean | true/false | false |
| del_data_show | 删除弹窗显示 | boolean | true/false | false |

### 事件/Events
| 参数 | 说明 | 参数 |
| :---- | :----: | :----: |
| ooCreate | 打开新增弹窗 | - |
| ooCancelCreate | 关闭新增弹窗 | - |
| ooConfirmCreate | 确认提交新增数据 | - |
| ooDelete | 打开删除弹窗 | - |
| ooCancelDelete | 关闭删除弹窗 | - |
| ooConfirmDelete | 确认提交删除数据 | - |
| ooEdit | 打开编辑弹窗 | - |
| ooCancelEdit | 关闭编辑弹窗 | - |
| ooConfirmEdit | 确认提交编辑数据 | - |
| ooGetList | 保留，外部使用请求列表数据 | - |
| ooSizeChange | 改变页面条数 | - |
| ooCurrentChange | 改变页面页码 | - |
| ooFilter | 条件搜索 | - |
| ooReset | 重置条件 | - |