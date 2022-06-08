---
lang: zh-CN
title: 介绍
description: 简单介绍
---

## 支持功能 <Badge v-if="isRefreshed" type="tip" :text="`版本${tagName}`" vertical="top" />

- [x] 部分方式每日随机时间运行 <Badge type="tip" text="推荐" vertical="middle" />
- [x] 每日签到/分享/播放
- [x] 直播签到
- [x] 漫画签到
- [x] 每日自动投币（指定数量）
- [x] 银瓜子兑换硬币
- [x] 应援团签到
- [x] 硬币赛事竞猜（不保证胜率，支持正压、反压和随机压）
- [x] 直播间弹幕（每日首次获得 100 亲密度，自动点亮灰色勋章）
- [x] 领取年度大会员权益/B 币券（无测试条件，更新为每日检测）
- [x] 自动使用 B 币券充电
- [x] 直播赠送即将过期的礼物（为确保安全，只赠送辣条和小心心）
- [x] 多账号独立配置
- [x] 直播天选时刻（测试） <Badge type="warning" text="慎用" vertical="middle" />
- [x] ~~直播礼物红包（测试）~~
- [x] 粉丝勋章/亲密度（测试）
- [ ] 支持 Docker 、腾讯 SCF 、阿里 FC、百度 CFC、华为 FG、青龙面板等方式运行，支持执行消息推送
- [ ] 代码自动在线更新，发包任你发 <Badge type="tip" text="推荐" vertical="middle" />
- [ ] ~~风纪委员 headless 版（不支持 scf）见 [bili-task-puppeteer](https://github.com/catlair/bili-task-puppeteer)~~（没有资格）

## 使用说明

配置方式见顶部导航栏，点击配置。

### 重要提示

SCF 正式取消免费额度，学生还可以 1 元购买 1 年包。

请不要使用直播礼物红包 `liveRedPack`，经过测试发现，并不是参与即可获取红包，b 站可能存在其他机制。

## 更新

新增天选时刻、~~红包~~，支持自动读取/删除关注消息。

直播获取小心心改版，且取消直播间弹幕功能，使用 `粉丝勋章/亲密度（测试）`替代。

领取年度大会员权益/B 币券，更新为每日检测，适应新规则。

支持获取在线代码运行，部署一次即可长期更新（逻辑不变的情况下），添加环境变量 `USE_NETWORK_CODE` 尝试，百度云不支持环境变量，可以在附加消息中添加 `USE_NETWORK_CODE` 字段。值为字符串，可以是任意值，但不能为空。

## 参考项目

- [SocialSisterYi/bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect)
- [catlair/bili-task-puppeteer](https://github.com/catlair/bili-task-puppeteer)
- [lzghzr/TampermonkeyJS](https://github.com/lzghzr/TampermonkeyJS)
- [whyour/qinglong](https://github.com/whyour/qinglong)
- [RayWangQvQ/BiliBiliToolPro](https://github.com/RayWangQvQ/BiliBiliToolPro) （推荐转用）

## 责任声明

1. bug 是不可避免的，我们尽量减少 bug 所带来得损失，**但这并不意味着我们要为此负责**，选择权在您，望周知。
2. 不会以任何方式收集用户 mid、Cookies、关注列表、收藏记录等信息。项目只向 B 站提供 Cookies，请不要将 Cookies 上传到 Github 等**开放平台**以及其他任何**不可信**平台。
3. 仓库中内置的任何 B 站相关用户信息，都不会影响你的投币、充电、打赏，权利掌握在使用者手中。
4. 如果您有任何疑问，请提交 issue，我们会尽快给予回复。

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useReleasesStore } from '@stores/releases';

const { tagName, isRefreshed } = storeToRefs(useReleasesStore());
</script>
