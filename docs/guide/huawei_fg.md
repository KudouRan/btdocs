---
lang: zh-CN
title: 华为云函数 FG
description: 华为云函数 FG
---

## 华为云函数 FG 文档 <TestedVersion type="fg" />

下载最新版的 [baidu_cfc.zip 压缩包](https://github.com/catlair/BiliOutils/releases/latest)

[Gitee 备份下载地址](https://gitee.com/catlair/BiliOutils/releases/)

加速下载：
<MyLink :href="downloadUrl"></MyLink>

把 {{tagName}} 替换成最新版本号即可

文件下载的 baidu_cfc.zip，但是配置方式除了百度的，也可以参考 SCF 的创建 config.json

## 2. 新增 FG

<https://console.huaweicloud.com/functiongraph>

基本配置

![fg-create](/images/fg-create.png)

设置超时时间

![fg-timeout](/images/fg-timeout.png)

<script setup>
import { storeToRefs } from 'pinia';
import { useReleasesStore } from '@stores/releases';

const { tagName } = storeToRefs(useReleasesStore());
const ghproxy = __GLOBAL_GHPROXY__
const downloadUrl = `https://${ghproxy}/https://github.com/catlair/BiliOutils/releases/download/${tagName.value}/baidu_cfc.zip`
</script>
