---
lang: zh-CN
title: 青龙面板运行
description: 青龙面板运行
---

## 说明 <TestedVersion type="ql" />

- 文件名 `cat_bili_ql.js`
- 默认配置文件名 `cat_bili_config.json`，或 `.json5`
- 配置文件名也可以通过环境变量 `BILITOOLS_FILE_NAME` 指定，后缀 `.json` 可以省略
- 由于作者并不熟悉，建议直接看青龙面板教程 <https://github.com/whyour/qinglong>

## 使用 npm 包

安装 Node 依赖（侧边栏中依赖管理）

`@catlair/bilitools`

然后拉取青龙面板运行的代码

<CodeGroup>

  <CodeGroupItem title="Gitee" active>

```bash
ql raw https://gitee.com/catlair/BiliTools/raw/main/tools/bilitools_npm.js
```

  </CodeGroupItem>

  <CodeGroupItem title="Github">

```bash
ql raw https://raw.githubusercontent.com/catlair/BiliTools/main/tools/bilitools_npm.js
```

  </CodeGroupItem>

</CodeGroup>

配置文件见下面使用源代码的方式（一样的）

## 使用源代码

<CodeGroup>
  <CodeGroupItem title="Gitee" active>

```bash
## 举例
ql raw https://gitee.com/catlair/BiliTools/raw/gh-release/gh-release/cat_bili_ql.js
```

  </CodeGroupItem>
  <CodeGroupItem title="Github">

```bash
## 举例
ql raw https://raw.githubusercontent.com/catlair/BiliTools/gh-release/gh-release/cat_bili_ql.js
```

  </CodeGroupItem>
</CodeGroup>

创建一个配置文件
`cat_bili_config.json` 配置与其他相同

![ql_config](/images/ql_config.png)

或者使用环境变量

![环境变量](https://user-images.githubusercontent.com/81743795/148545529-73c95e3d-219f-4bf9-b266-7ad03bd9e9be.png)

### 安装依赖

当前版本，无需安装依赖，可以直接使用

::: details 老版本
自行添加 Node 依赖 `axios`

![Node 依赖](/images/ql_deps.png)
:::

## 多账号的使用

多账户配置见 [配置文件](/config/README.md)

新方法直接配置多账号即可。

如果你是用了老方法 `--item=1`，则需要删除这个参数才能使用新方法

### 老方法

~~设置多个任务即可运行多帐号，这样做主要是把不同号的运行时间错开（不会有人几十个号还用这吧）~~

![ql_item](/images/ql_item.png)

- ~~`--item=3`这是必须的，其中 3 表示运行配置中第 3 个，下标从 1 开始。设置错误或不设置则默认为 1 。~~
- ~~如果你想要直接运行测试一下，这个下标只会是 1。青龙面板的问题，它会 `--item` 错位，这是由于 api 强行添加了 now 命令。但是通过任务定时就不会出错。~~
