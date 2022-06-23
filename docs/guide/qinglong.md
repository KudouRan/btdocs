---
lang: zh-CN
title: 青龙面板运行
description: 青龙面板运行
---

## 青龙面板文档 <TestedVersion type="ql" />

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
ql raw https://gitee.com/Kudouran/BiliTools/raw/main/tools/bilitools_npm.js
```

  </CodeGroupItem>

  <CodeGroupItem title="Github">

```bash
ql raw https://raw.githubusercontent.com/Kudouran/BiliTools/main/tools/bilitools_npm.js
```

  </CodeGroupItem>

</CodeGroup>

创建一个配置文件
`cat_bili_config.json` 配置与其他相同

![ql_config](/images/ql_config.png)

或者使用环境变量

![环境变量](https://user-images.githubusercontent.com/81743795/148545529-73c95e3d-219f-4bf9-b266-7ad03bd9e9be.png)
