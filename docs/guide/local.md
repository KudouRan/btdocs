---
lang: zh-CN
title: 本地直接运行
description: 页面的描述
---

## 安装环境（必要）

- [下载 Node.js 长期维护版](https://nodejs.org/zh-cn/)
- [安装到系统](https://www.runoob.com/nodejs/nodejs-install-setup.html)

::: tip 提示
如果已经安装了 node14 及以上可以跳过此步骤。
:::

## 1. npm 包 <Badge type="tip" text="推荐" vertical="top" /> <TestedVersion type="npm" />

在 cmd 或者 terminal 中运行以下命令

```bash
# 安装
npm install -g @catlair/bilitools
# 查看帮助
bilitools -h
# 指定配置路径运行
bilitools -c ./config.json
```

更新代码

```bash
npm install -g @catlair/bilitools
```

## 2. 直接运行 <TestedVersion type="local-index" />

现提供打包好的代码，使用 node 直接运行。在以下任一链接下载 `index.js`

- <https://gitee.com/catlair/BiliTools/releases>
- <https://gitee.com/catlair/BiliTools/tree/gh-release/gh-release>
- <https://github.com/catlair/BiliTools/releases>
- <https://github.com/catlair/BiliTools/tree/gh-release/gh-release>

本地中，在 `index.js` 同级目录下创建 `config.json` 并完善配置，同级目录下运行：

```bash
node index.js
```
