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
- [ ] 转盘抽奖（测试）<Badge type="warning" text="新增" vertical="middle" />
- [x] 支持 Docker 、腾讯 SCF 、阿里 FC、百度 CFC、华为 FG、青龙面板等方式运行，支持执行消息推送
- [x] 代码自动在线更新，发包任你发 <Badge type="tip" text="推荐" vertical="middle" />
- [x] 风纪委员（迁移，测试中），来自 [dd178/BILI_judgement](https://github.com/dd178/BILI_judgement/blob/master/judgement.py)，（我们不生产代码，我们只是代码的搬运工），慎用，如有不良后果，概不负责。
- [ ] ~~直播礼物红包（测试）~~
- [ ] ~~风纪委员 headless 版（不支持 scf）见 [bili-task-puppeteer](https://github.com/catlair/bili-task-puppeteer)~~（没有资格）

## 使用说明

配置方式见顶部导航栏，点击配置[或者点击这里跳转](../config/)。

### 重要提示

::: danger cookie 重要提示（关于频繁失效），除了账号本身可能存在的风险外，可能时以下原因
请务必查看 Cookie 的获取[点击这里跳转](../config/get_value.md)
:::

## 更新

::: tip 测试内容
activityLottery 测试中，配置详见 [配置](../config/func.md)
:::

::: tip v0.5.220724
<Badge type="warning" text="修复" vertical="middle" /> 通过压缩的代码出现了 gc 这样的全局变量/保留字，暂时不压缩。vm gz 包从 40 变为 60kb。
<br/>

<Badge type="warning" text="修复" vertical="middle" /> 观看和分享视频获取到 404。
<br/>

<Badge type="tip" text="新增" vertical="middle" /> exchangeCoupon 兑换漫读券（请用自己的方式定时到大约 12:00:02 左右）。
<br/>

<Badge type="tip" text="新增" vertical="middle" /> 增加 log 配置，暂时只开放了是否使用 Emoji，推送日志等级。
<br/>

<Badge type="tip" text="新增" vertical="middle" /> npm 全局命令增加 task 和 item 参数。
<br/>

<Badge type="tip" text="新增" vertical="middle" /> npm 青龙面板增加 task、item 和 config（自定义 config 路径） 参数。
<br/>

<Badge type="tip" text="新增" vertical="middle" /> 腾讯云函数/阿里云函数增加可配置附加信息 task。
<br/>

<Badge type="tip" text="新增" vertical="middle" /> 自动投喂可配置礼物。
<br/>

<Badge type="tip" text="优化" vertical="middle" /> bigPoint 观看视频增加间隔 20 s（可配置）。
<br/>

<Badge type="tip" text="优化" vertical="middle" /> judgement 休眠时间减少至 20 min （可配置）。
<br/>

<Badge type="tip" text="优化" vertical="middle" /> vm 增加运行 trycatch 失败后正常运行。
:::

[更多日志点击访问详情](./update.md)

风纪委员（迁移，测试中），来自 [dd178/BILI_judgement](https://github.com/dd178/BILI_judgement/blob/master/judgement.py)，hash：[b74ebc81fb47d98b7008ccd662ab0c5c9e94707c](https://github.com/dd178/BILI_judgement/commit/b74ebc81fb47d98b7008ccd662ab0c5c9e94707c)（我们不生产代码，我们只是代码的搬运工），对原本的代码做了以下修改：

- 完善了 api 的部分 header 信息。
- 增加两次任务直接的一点随机延时。
- 将投票内容为空的日志补全。
- mode2 保存先不接受案件。
- 改变代码风格。

### QQ 群

扫码加入群，密码 catlair 最后一个字母（群号：759694670）：

![qq群](/images/qq_group.png)

## 支持

<SponsorShip></SponsorShip>
