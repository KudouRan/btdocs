---
lang: zh-CN
title: 介绍
description: 简单介绍
---

::: tip 参与贡献
如果对与此文档有补充、改进意见或者修改，每个页面都可以直接点击末尾的`在 GitHub 上编辑此页`。非常感谢！
:::

::: tip 参与贡献
如果喜欢请为 <https://github.com/KudouRan/BiliTools> 点个 star，关注才能不迷路。非常感谢！
:::

## 支持功能 <Badge v-if="isRefreshed" type="tip" :text="`版本${tagName}`" vertical="top" />

- [x] 部分方式每日随机时间运行 <Badge type="tip" text="推荐" vertical="middle" />
- [x] 每日签到/分享/播放
- [x] 直播签到
- [x] 漫画签到
- [ ] 自动使用即将过期的漫读券
- [x] 每日自动投币（指定数量）
- [x] 银瓜子兑换硬币
- [x] 应援团签到
- [x] 硬币赛事竞猜（不保证胜率，支持正压、反压和随机压）
- [x] 直播间弹幕（每日首次获得 100 亲密度，自动点亮灰色勋章）
- [x] 领取年度大会员权益/B 币券（无测试条件，更新为每日检测）
- [x] 自动使用 B 币券充电
- [x] 直播赠送即将过期的礼物
- [x] 多账号独立配置
- [x] 直播天选时刻（测试） <Badge type="warning" text="慎用" vertical="middle" />
- [x] 粉丝勋章/亲密度（测试）
- [ ] 大会员领取大积分（测试）<Badge type="warning" text="新增" vertical="middle" />
- [x] 支持 Docker 、腾讯 SCF 、阿里 FC、百度 CFC、华为 FG、青龙面板等方式运行，支持执行消息推送
- [x] 代码自动在线更新，发包任你发 <Badge type="tip" text="推荐" vertical="middle" />
- [x] 风纪委员（迁移，测试中），来自 [dd178/BILI_judgement](https://github.com/dd178/BILI_judgement/blob/master/judgement.py)，（我们不生产代码，我们只是代码的搬运工），慎用，如有不良后果，概不负责。
- [ ] ~~直播礼物红包（测试）~~
- [ ] ~~风纪委员 headless 版（不支持 scf）见 [bili-task-puppeteer](https://github.com/catlair/bili-task-puppeteer)~~（没有资格）

## 使用说明

配置方式见顶部导航栏，点击配置[或者点击这里跳转](../config/)。

为了方便管理，能使用 npm 包的地方都将使用 npm 包。目前还不支持的（平台原因）仅有：

百度云函数、华为云函数（包括 FG、AGC）

所有老方式都是支持的，但是建议使用 npm 包的方式。

### 重要提示

请不要使用直播礼物红包 `liveRedPack`，经过测试发现，并不是参与即可获取红包，b 站可能存在其他机制。

::: danger cookie 重要提示（关于频繁失效）
请务必查看 Cookie 的获取[点击这里跳转](../config/get_value.md)
:::

## 更新

::: tip v0.5.220716
<Badge type="warning" text="修改" vertical="middle" /> b 站修改风纪委员 liveIntimacy 方式发生改变
<br>
<Badge type="tip" text="优化" vertical="middle" /> bigPoint 增加重试、取消观看视频和自定义视频（正片，非 up 投稿）的配置。
<br>
<Badge type="tip" text="优化" vertical="middle" /> judgement mode2。
<br>
:::

liveIntimacy 的直播心跳可能需要消耗比实际需要时间长很多的时间，这是因为目前对**刚**获取到的亲密度判断不准确，甚至已经发送弹幕和点赞了，但是依然会通过直播心跳去获取这多出来的 200 亲密度，浪费 10 分钟。

[更多日志点击访问详情](./update.md)

风纪委员（迁移，测试中），来自 [dd178/BILI_judgement](https://github.com/dd178/BILI_judgement/blob/master/judgement.py)，hash：[b74ebc81fb47d98b7008ccd662ab0c5c9e94707c](https://github.com/dd178/BILI_judgement/commit/b74ebc81fb47d98b7008ccd662ab0c5c9e94707c)（我们不生产代码，我们只是代码的搬运工），对原本的代码做了以下修改：

- 完善了 api 的部分 header 信息。
- 增加两次任务直接的一点随机延时。
- 将投票内容为空的日志补全。
- 改变代码风格。

直播获取小心心改版，且取消直播间弹幕功能，使用 `粉丝勋章/亲密度（测试）` 替代。

支持获取在线代码运行，部署一次即可长期更新（逻辑不变的情况下），添加环境变量 `USE_NETWORK_CODE` 尝试，百度云不支持环境变量，可以在附加消息中添加 `USE_NETWORK_CODE` 字段。值为字符串，可以是任意值，但不能为空。

## 支持

<SponsorShip></SponsorShip>

### QQ 群

扫码加入群，密码 catlair 最后一个字母（群号：759694670）：

![qq群](/images/qq_group.png)
