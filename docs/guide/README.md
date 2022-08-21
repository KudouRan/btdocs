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
- [x] 自动使用 B 币券兑换电池（测试）
- [x] 直播赠送即将过期的礼物
- [x] 多账号独立配置
- [x] 直播天选时刻（不推荐） <Badge type="warning" text="慎用" vertical="middle" />
- [x] 粉丝勋章/亲密度
- [ ] 大会员领取大积分 <Badge type="warning" text="新增" vertical="middle" />
- [ ] 转盘抽奖（测试）<Badge type="warning" text="新增" vertical="middle" />
- [x] 支持 Docker 、腾讯 SCF 、阿里 FC、百度 CFC、华为 FG、青龙面板等方式运行，支持执行消息推送
- [x] 代码自动在线更新，发包任你发 <Badge type="tip" text="推荐" vertical="middle" />
- [ ] 风纪委员（迁移，测试中），来自 [dd178/BILI_judgement](https://github.com/dd178/BILI_judgement/blob/master/judgement.py)，（我们不生产代码，我们只是代码的搬运工），慎用，如有不良后果，概不负责。
- [ ] ~~直播礼物红包（测试）~~

## 使用说明

配置方式见顶部导航栏，点击配置[或者点击这里跳转](../config/)。

### 重要提示

::: danger cookie 重要提示（关于频繁失效），除了账号本身可能存在的风险外（例如异地登录，大量的天选等），还可能是以下原因
请务必查看 Cookie 的获取[点击这里跳转](../config/get_value.md)
:::

## 更新

::: tip 测试内容
activityLottery 测试中，配置详见 [配置](../config/func.md)

useCouponBp 测试中，配置详见 [配置](../config/func.md)
:::

注意以下版本将在 star 200 后发布，目前可能还未完全跟新，请关注！

<Badge type="warning" text="修复" vertical="middle" /> 某些情况下替换 cookie 导致配置文件格式错误（群友反馈）。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 取消 charging，使用 useCouponBp 替代，并增加 b 币兑换电池（群友需求）。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> mangaTask 增加漫画自动领取奖励（阅读奖励，签到奖励，不过前提是这些已经做过了），暂时不需要开启，也不能关闭。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 转盘的爬虫增加追番选项，如有需要可以配置 [activityLottery.bangumi]，当然是否有用存在随机性。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> addCoins 投币不再是固定 1 颗。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> bigPoint 重试可配置等待时间。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> npm 增加 --createCookie -cck 参数，可以使用 cookie 生成新 cookie，用处懂的都懂。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 完善 delay 参数。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 调整 matchGame 默认值（更加保守），防止有人不懂直接开启但不改配置，导致丢失大量硬币（冤大头群友）。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 部分情况的日志输出优化，增加中奖标题提示（例如：xxxxx-【转盘】）（Issue 92）。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> getPrivilege 的日志增加 73319 的解释（Issue 109）。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 优化输出的版本。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> tsconfig strictNullChecks 仅改变开发体验，增加稳定性，与程序最后运行结果无关。
<br/>

链接跳转：

[转盘抽奖](../config/func.md#转盘抽奖)

[更多日志点击访问详情](./update.md)

风纪委员（迁移，测试中），来自 [dd178/BILI_judgement](https://github.com/dd178/BILI_judgement/blob/master/judgement.py)，hash：[b74ebc81fb47d98b7008ccd662ab0c5c9e94707c](https://github.com/dd178/BILI_judgement/commit/b74ebc81fb47d98b7008ccd662ab0c5c9e94707c)（我们不生产代码，我们只是代码的搬运工），对原本的代码做了以下修改：

- 完善了 api 的部分 header 信息。
- 增加两次任务之间的一点随机延时。
- 将投票内容为空的日志补全。
- mode2 保存时，先不接受案件。
- 改变代码风格。

### QQ 群

扫码加入群，没事别进去，进群瞎逼逼然后再退群你觉得你很帅？我只能说傻逼。（群号：759694670）：

![qq群](/images/qq_group.png)
