---
lang: zh-CN
title: 华为 AGC 云函数
description: 华为 AGC 云函数
---

## 华为 AGC 云函数文档 <TestedVersion type="agc" />

下载最新版的 [huawei_agc.zip 压缩包](https://github.com/Kudouran/BiliOutils/releases/latest)

[Gitee 备份下载地址](https://gitee.com/Kudouran/BiliOutils/releases/)

加速下载：
<MyLink :href="downloadUrl"></MyLink>

把 {{ tagName }} 替换成最新版本号即可

## 2. 新增 AGC CF

[点击进入 AGC](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)

先创建一个项目，打开项目后开通云函数

![agc-create-fc](/images/agc-create-fc.png)

开通云函数后创建新的云函数，注意选择地域，后面不能改

![地域agc-create-map](/images/agc-create-map.png)

### 基础配置

- 运行环境选择最新的 `Nodejs`（最低请选择 14）

![AGC基础配置](/images/agc-base-config.png)

创建好后修改基本信息

![AGC基础配置2](/images/agc-base-info.png)

### 高级配置

环境变量名为 [`BILITOOLS_CONFIG`](../config/env.md)

配置就是 gzip 压缩后的，可以在此处压缩，[压缩详见](https://www.baidufe.com/fehelper/en-decode/)

![环境变量配置](/images/agc-base-env.png)

### 触发器配置

此处使用 CRON 表达式是 UTC 时间，本地时间需要小时减 8

![fc-create-trigger](/images/agc-trigger.png)

记得开启触发器

![fc-create-trigger](/images/agc-trigger-open.png)

<script setup>
import { storeToRefs } from 'pinia';
import { useReleasesStore } from '@stores/releases';

const { tagName } = storeToRefs(useReleasesStore());
const ghproxy = __GLOBAL_GHPROXY__
const downloadUrl = `https://${ghproxy}/https://github.com/Kudouran/BiliOutils/releases/download/${tagName.value}/huawei_agc.zip`
</script>
