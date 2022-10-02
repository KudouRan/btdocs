---
lang: zh-CN
title: 本地直接运行
description: 页面的描述
---

## 本地直接运行文档

Node.js 首先需要本地的运行环境：

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

更新代码：

```bash
npm install -g @catlair/bilitools
```

帮助详情：

```bash
Usage:
  bilitools [options] [value]
  bilitools [options]=[value]

Options:
  --version, -v             输出版本号
  --help, -h                输出帮助信息
  --config, -c <path>       配置文件路径
    eg: --config=./config.json
  --once, -o                每日任务只执行一次
  --task, -t <taskString>   执行指定的 task，使用英文逗号（,）分隔
    eg: --task=loginTask,judgement
  --item, -i <item>         多用户配置执行指定的配置，下标 1 开始（倒数 -1 开始），使用英文逗号（,）分隔
    eg: --item=2
  --cron <cronString>       cron 表达式，see：https://github.com/node-cron/node-cron#allowed-fields
    eg: --cron="0 0 0 * * *"
  --delay <time[-time]>     不带单位是延迟 time 分钟后执行，单位可以为 ms（毫秒）、s（秒）、m（分）、h（小时）
    eg: --delay=10 延迟 0-10 分钟后执行
        --delay=10m-2h 延迟 10分钟-2小时后执行
```

注意：很多任务（特别是需要判断大会员状态的任务）需要先执行 `loginTask` 任务。

讨论：<https://github.com/KudouRan/BiliOutils/issues/90#issuecomment-1190364619>

## windows 下定时运行

linux 还是推荐用 crontab 来定时运行，windows 下也可以使用系统任务，这里提供另一种方式（依赖 npm 方式，请确认上面的方式能够运行）。

下载 `cron_bilitools.exe`

<MyLink :href="downloadUrl"></MyLink>

把 {{ tagName }} 替换成最新的 tag 名称，且只演示了 windows amd64（x64） 的版本，其他平台请自行下载。

<https://github.com/catlair/cron/releases>

首先把文件移动到合适的地方，之后就不要再移动了（移动后重新操作），所以不推荐放在桌面。

- 创建一个快捷方式

![win_create_link](@imgs/win_create_link.png)

- 右键属性，给快捷方式路径后面添加一些参数

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

## 参考视频

windows 下的定时运行方式，可以参考这个视频：

<BilibiliVideo bv="BV1Na411W7nk"/>

<script setup>
const ghproxy = __GLOBAL_GHPROXY__
const tagName = 'v0.0.2'
const downloadUrl = `https://${ghproxy}/https://github.com/catlair/cron/releases/download/${tagName}/cron_windows_amd64.tar.gz`
</script>

## 配置文件

<ConfigPath />
