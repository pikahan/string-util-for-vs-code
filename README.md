# string-util-for-vs-code README

一个使用lodash对文本进行处理的vscode小插件

## 功能

* 字符串 -> 驼峰/蛇形
![demo1](https://raw.githubusercontent.com/pikahan/string-util-for-vs-code/master/img/demo1.gif)
* 使用内置函数对字符串进行处理
![demo2](https://raw.githubusercontent.com/pikahan/string-util-for-vs-code/master/img/demo2.gif)
![demo3](https://raw.githubusercontent.com/pikahan/string-util-for-vs-code/master/img/demo3.gif)

## 内置函数
如果要使用内置函数处理字符串的话需要遵循以下的格式
`待处理文本:函数名[@参数1@参数2...]`

eg.

如果想将一段文本以'-'分割成数组的话
```
["hello","every","body"]
```
选中后右键菜单选择自定义转换函数(JSON格式字符串)即可

### 完整内置函数API列表
1. 支持所有lodash的字符串处理函数(要移除掉第一个参数, 因为lodash中函数的第一个参数是待处理的文本)
https://www.lodashjs.com/docs/lodash.camelCase


## 依赖

Lodash

## 插件设置

## 更新日志

### 0.1.0

使用内置函数对字符串进行处理

### 0.0.1

第一个版本

## TODO List

- [ ] 字符串数组转换成枚举值
