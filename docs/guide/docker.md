---
lang: zh-CN
title: Docker 运行
description: Docker 运行
---

## 说明 <TestedVersion type="docker" />

仓库中包含了相关文件，可自行构建运行。  
成品镜像 [`catlair/bilitools`](https://registry.hub.docker.com/repository/docker/catlair/bilitools)（现在的 Docker 只是安装了一个 npm 包而已，存在意义不大）

## 配置文件

支持现成的配置文件（`config/config.json`）和 gzip 压缩后的配置（`config/config.txt`）  
优先加载**环境变量**中的 gzip 压缩后的配置

::: details 简单例子

```bash
cd
mkdir bilitools
cd bilitools
mkdir config
touch config/config.json
# 然后将配置放入 config.json 中
```

:::

### 本地配置文件

挂载目录即可，config 为配置目录，logs 为运行日志目录。

```bash
docker run \
    -v ~/bilitools/config:/usr/src/app/config \
    -v ~/bilitools/logs:/usr/src/app/logs \
    -i --rm catlair/bilitools:latest
```

### 压缩后的配置

使用环境变量的方式

```bash
docker run \
    --env BILITOOLS_CONFIG="xxxxxxxxxxxxx" \
    -v ~/bilitools/logs:/usr/src/app/logs \
    -i --rm  catlair/bilitools:latest
```

## 定时运行

更多内容正在完善中，临时方案如下（假设上面的内容已经成功）：

创建一个文件，内容如下：

::: details random_run.sh

```bash{12,21}
#!/bin/bash
set -e
function random()
{
    min=$1;
    max=$2-$1;
    num=$(date +%s+10#%N);
    ((retnum=num%max+min));
    echo $retnum;
}
# 旧的不去新的不来
/usr/bin/docker pull catlair/bilitools:latest
# 等待时间为执行开始后2s - 7200s（2个小时）中随机时间
a=$1
b=$2
[[ ! $1 ]] && a=2
[[ ! $2 ]] && b=7200
out=$(random $a $b)s;
sleep $out
# 执行 (注意修改路径)
/usr/bin/docker run -v ~/bilitools/config:/usr/src/app/config -d --rm catlair/bilitools:latest
```

:::

::: tip 注意
新建这个文件后，需要执行 `chmod +x random_run.sh` 赋予文件执行权限。  
`/usr/bin/docker` 是执行 `which docker` 获取到的，如果不一样请修改。  
`~/bilitools/config` 请按照需求修改。  
然后执行 `./random_run.sh 2 3` 来尝试运行（后面的 2 3 表示 2-3s 内随机时间，默认 2-7200s 内随机）。
:::

运行 `crontab -e` 可以添加定时任务，如下：

```bash
5 9 * * * $HOME/bilitools/random_run.sh 2 7200 >> $HOME/bilitools/logs/cron.log 2>&1
```

::: tip 注意
以下语句中的 `5 9 * * *` 意为 09:05:00 执行，执行 `date` 查看系统当前时间和时区（可能你并不是东八区）。  
路径记得更改（如果需要）。  
不知 `crontab -e` 怎么用，你可以将上面命令放入文件 `my_crontab`，然后执行 `crontab my_crontab` （这将覆盖已有的语句，所以不推荐）。  
如果没有启动 crontab，请百度/谷歌搜索 crontab 启动，linux 存在不同，但我能力有限，抱歉。
:::

整个文件结构可能如下：

```bash
bilitools
    ├── config
    │  └── config.json
    ├── logs
    ├── my_crontab
    └── random_run.sh
```
