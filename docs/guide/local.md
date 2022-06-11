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

## windows 下定时运行

linux 还是推荐用 crontab 来定时运行，windows 下也可以使用系统任务，这里提供另一种方式（依赖方式 1，请确认方式 1 能够运行）。

下载 `cron_bilitools.exe`

<MyLink :href="downloadUrl"></MyLink>

把 {{ tagName }} 替换成最新的 tag 名称，且只演示了 windows amd64 的版本，其他平台请自行下载。

首先把文件移动到合适的地方，之后就不要再移动了（移动后重新操作），所以不推荐放在桌面。

- 创建一个快捷方式

![win_create_link](@imgs/win_create_link.png)

- 右键属性，给快捷方式路径后面添加一些参数

`cron_bilitools.exe -help` 就能看到参数信息了  
`-config=./config/config.json` （必须）配置文件的路径  
`-time=08:08:08` （可选）每天运行时间，默认为 08:08:00  
`-start=false` （可选）是否立即执行，默认为 false，设置 `true` 电脑开机立即启动
`-once=false` （可选）每天只执行一次，默认为 false，设置 `true` 只执行一次（避免多次开关机多次运行）

![win_setting_args](@imgs/win_setting_args.png)

- 将快捷方式移动到开机启动项
  ```bash
     %systemdrive%%homepath%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
  ```

![win_start](@imgs/win_start.png)

<script setup>
const ghproxy = __GLOBAL_GHPROXY__
const tagName = 'v0.0.1'
const downloadUrl = `https://${ghproxy}/https://github.com/catlair/cron/releases/download/${tagName}/cron_bilitools_amd64.tar.gz`
</script>
