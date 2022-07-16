---
lang: zh-CN
title: 更新日志
description: 更新日志
---

## 0.5.220716

- <Badge type="warning" text="修改" vertical="middle" /> b 站修改风纪委员，liveIntimacy 方式发生改变。

- <Badge type="tip" text="优化" vertical="middle" /> bigPoint 增加重试、取消观看视频和自定义视频（正片，非 up 投稿）的配置。

- <Badge type="tip" text="优化" vertical="middle" /> judgement mode2。

liveIntimacy 的直播心跳可能需要消耗比实际需要时间长很多的时间，这是因为目前对**刚**获取到的亲密度判断不准确，甚至已经发送弹幕和点赞了，但是依然会通过直播心跳去获取这多出来的 200 亲密度，浪费 10 分钟，（虽然这部分是异步操作的，你的粉丝牌越多，浪费的时间越接近于 0）。

## 0.5.220711

- <Badge type="tip" text="新增" vertical="middle" /> 新增风纪委员，函数名 <code>judgement</code>。慎用，如有不良后果，概不负责。

- <Badge type="warning" text="修复" vertical="middle" /> Cookie URL 编码问题（部分接口对编码有要求），Cookie 格式兼容性问题（内容空格间隔，后置分号等）。

- <Badge type="warning" text="修复" vertical="middle" /> 投币时获取稿件出错的问题，以及部分用户关注列表稿件太少导致多次投币失败的问题。

- <Badge type="tip" text="优化" vertical="middle" /> SetCookie 获取。

风纪委员（迁移，测试中），来自 [dd178/BILI_judgement](https://github.com/dd178/BILI_judgement/blob/master/judgement.py)，hash：[b74ebc81fb47d98b7008ccd662ab0c5c9e94707c](https://github.com/dd178/BILI_judgement/commit/b74ebc81fb47d98b7008ccd662ab0c5c9e94707c)（我们不生产代码，我们只是代码的搬运工）

## 0.5.220628

- <Badge type="tip" text="新增" vertical="middle" />新增大会员领取大积分，函数名 <code>bigPoint</code>。故每日可领取签到 5/10、观看视频（ 20 x 2 ）、浏览界面（ 10 x 3 ），共计 75+ 积分。
