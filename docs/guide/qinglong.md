---
lang: zh-CN
title: 青龙面板运行
description: 青龙面板运行
---

- form [#49](https://github.com/catlair/BiliTools/issues/49)

现在已经支持多账号了（需要更新青龙面板到最新，测试使用 `v2.10.13`），并且对之前做了调整。

- 文件名 `cat_bili_ql.js`
- 默认配置文件名 `cat_bili_config.json`
- 配置文件名也可以通过环境变量 `BILITOOLS_FILE_NAME` 指定，后缀 `.json` 可以省略

## 使用方式

由于作者并不熟悉，建议直接看青龙面板教程 <https://github.com/whyour/qinglong>

```bash
## 举例
ql raw https://raw.githubusercontent.com/catlair/BiliTools/gh-release/gh-release/cat_bili_ql.js # 正式版
```

```bash
 ql raw https://raw.githubusercontent.com/catlair/BiliTools/gh-release-dev/gh-release/cat_bili_ql.js # 开发版
```

创建一个配置文件
`cat_bili_config.json` 配置与其他相同

![ql_config](/images/ql_config.png)

或者使用环境变量

![环境变量](https://user-images.githubusercontent.com/81743795/148545529-73c95e3d-219f-4bf9-b266-7ad03bd9e9be.png)

## 安装依赖

自行添加 Node 依赖 `axios`

![Node 依赖](/images/ql_deps.png)

## 多账号的使用

设置多个任务即可运行多帐号，这样做主要是把不同号的运行时间错开（不会有人几十个号还用这吧）

![ql_item](/images/ql_item.png)

- `--item=3` 这是必须的，其中 3 表示运行配置中第 3 个，下标从 1 开始。设置错误或不设置则默认为 1 。
- 如果你想要直接运行测试一下，这个下标只会是 1。青龙面板的问题，它会 `--item` 错位，这是由于 api 强行添加了 now 命令。但是通过任务定时就不会出错。

## 使用 npm 包的方式

```bash
npm install -g @catlair/bilitools
```

然后把上面的 `cat_bili_ql.js` 文件内容修改为

```javascript
require('@catlair/bilitools').run();
```
