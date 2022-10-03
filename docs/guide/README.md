---
lang: zh-CN
title: 介绍
description: 简单介绍
---

::: tip 参与贡献
如果对与此文档有补充、改进意见或者修改，每个页面都可以直接点击末尾的`在 GitHub 上编辑此页`，非常感谢！

如果喜欢请为 <https://github.com/catlair/BiliOutils> 点个 star，关注才能不迷路。非常感谢！
:::

## 支持功能 <Badge v-if="isRefreshed" type="tip" :text="`版本${tagName}`" vertical="top" />

**注意：**

- 表中排列顺序即为功能的调用顺序，内部设置顺序，与配置顺序无关。
- 带删除线的表示已经弃用或其它原因不推荐使用，但是内容没有删除。

| 功能            | 默认值 | 说明                                          | 配置文档                              |
| --------------- | ------ | --------------------------------------------- | ------------------------------------- |
| exchangeCoupon  |        | 兑换漫读券 （暂时~~只能~~通过指定 task 运行） | [点击](../config/func.md#兑换漫读券)  |
| liveSignTask    | `true` | 直播间签到                                    |                                       |
| addCoins        | `true` | 投币                                          | [点击](../config/func.md#投币)        |
| bigPoint        |        | 大会员领取大积分                              | [点击](../config/func.md#大积分)      |
| shareAndWatch   | `true` | 观看和分享视频                                |                                       |
| silver2Coin     | `true` | 银瓜子兑换硬币                                |                                       |
| mangaTask       |        | 漫画任务                                      | [点击](../config/func.md#漫画任务)    |
| supGroupSign    |        | 应援团签到 （目前也无意义了啊）               |                                       |
| useCouponBp     |        | 使用 b 币券（充电/兑换电池）                  | [点击](../config/func.md#使用-b-币券) |
| getVipPrivilege |        | 获取大会员权益                                |                                       |
| matchGame       |        | 赛事竞猜（人人都是硬币慈善家）                | [点击](../config/func.md#竞猜)        |
| giveGift        |        | 赠送过期礼物                                  | [点击](../config/func.md#直播间礼物)  |
| liveIntimacy    |        | 牌子亲密度 （非云函数为异步运行）             | [点击](../config/func.md#粉丝亲密度)  |
| batchUnfollow   |        | 取消关注                                      | [点击](../config/func.md#取关分组)    |
| ~~liveLottery~~ |        | ~~直播天选时刻~~（黑号风险）                  | [点击](../config/func.md#天选时刻)    |
| liveRedPack     |        | 直播天选红包                                  | [点击](../config/func.md#天选红包)    |
| activityLottery |        | 转盘抽奖                                      | [点击](../config/func.md#转盘抽奖)    |
| judgement       |        | 风纪委员                                      | [点击](../config/func.md#风纪委员)    |

只有将这些值设置为 `true` 才会生效，如果设置为 `false` ，具体的配置再怎么样也不会去执行，下面是参考写法。

::: details 参考写法

```json5
{
  function: {
    silver2Coin: true,
    addCoins: true,
    liveSignTask: true,
    shareAndWatch: true,
    mangaTask: false,
    batchUnfollow: false,
    supGroupSign: false,
    useCouponBp: false,
    getVipPrivilege: false,
    giveGift: false,
    matchGame: false,
    liveRedPack: false,
    supGroupSign: false,
    bigPoint: false,
    judgement: false,
    activityLottery: false,
  },
}
```

:::

**其它**

- 阿里云函数/腾讯云函数每日随机时间运行。 <Badge type="tip" text="推荐" vertical="middle" />
- 多账号独立配置。
- 支持 Docker 、腾讯 SCF 、阿里 FC、百度 CFC、华为 FG、青龙面板等方式运行。（文档查看侧边栏，手机端点左上角）
- 支持执行消息推送。
- 部分平台代码自动在线更新，发包任你发。

### 重要提示

::: danger cookie 重要提示（关于频繁失效），除了账号本身可能存在的风险外（例如异地登录，大量的天选等），还可能是以下原因
请务必查看 Cookie 的获取[点击这里跳转](../config/get_value.md)
:::

## 使用说明

配置方式见顶部导航栏（移动端点左上角，上面部分是导航），点击配置[或者点击这里跳转](../config/)。

## 更新

::: tip 测试内容
b 币券兑换电池 useCouponBp 测试中，配置详见 [配置](../config/func.md)

天选红包 liveRedPack 测试中，配置详见 [配置](../config/func.md)
:::

[历史各版本配置对比](/config/version.md)

**9-30 更新：**

<Badge type="tip" text="优化" vertical="middle" /> 增加消息推送仅错误时推送。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 未登录时打印 id，方便为多账号检查。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 删除风纪委员的 mode 配置，仅支持原 mode=1。
<br/>
<Badge type="warning" text="修复" vertical="middle" /> 更新依赖。
<br/>

**之前：**

<Badge type="tip" text="优化" vertical="middle" /> 去除投币功能部分废弃的配置。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 转盘抽奖的在线链接支持自定义/代理前缀。
<br/>
<Badge type="warning" text="修复" vertical="middle" /> 漫画领取奖励出现赛季错误的问题。
<br/>
<Badge type="warning" text="修复" vertical="middle" /> 充电/兑换电池若干问题。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> liveRedPack 去除 countDown 配置。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 调整部分日志，增加错误标题。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 增加取关的配置。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 增加赠送直播间礼物 all 选项。
<br/>
<Badge type="warning" text="删除" vertical="middle" /> 去除自动更新。
<br/>

链接跳转：

[天选红包](../config/func.md#天选红包)

[更多日志点击访问详情](./update.md)

## QQ 群

如果需要反馈，尽量选择 issue，而不是进群。

扫码加入群，没事别进去，自己扫码进群以后哔哔谁把你拉进来的是什么意思（群号：759694670）：

![qq群](/images/qq_group.png)

## Q&A

**Q：** 为啥我的 Cookie 三天两头的失效？

**Q：** 我有多个账号，但是复制的 Cookie 只有最新的有用，怎么办？

**Q：** 我只有手机，怎么获取 Cookie？

**A：** 请查看文档，Cookie 的获取方式。

<el-divider border-style="dashed" />

**Q：** 使用青龙面板安装依赖失败？

**A：** npm 包安装失败与本项目无关，建议尝试切换 npm 源。检查网络情况，如 DNS，防火墙，代理，路由器拦截等。可百度了解相关内容。

<el-divider border-style="dashed" />

**Q：** 版本何时更新？

**A：** 不定期更新依赖，与时俱进。优先级高的 bug 会尽快修复。功能需求会根据实际情况更新。

<el-divider border-style="dashed" />

**Q：** 账号出现风控？

**A：** 可能是程序的原因，但请优先考虑是否是异地使用等自身原因，然后再停止运行/反馈问题。

<el-divider border-style="dashed" />

**Q：** 莫名奇妙的投币，消耗道具，是不是程序盗用了？

**A：** 是的，你别用。（代码是开源的你可以找出程序任何的盗用的行为）

<el-divider border-style="dashed" />

**Q：** 为什么这么垃圾？

**A：** 是的，为什么呢？
