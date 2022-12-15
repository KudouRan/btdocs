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
| silver2Coin     | `true` | 银瓜子兑换硬币（配合直播签到用）              |                                       |
| mangaTask       |        | 漫画任务（包含签到，分享，阅读，小游戏）      | [点击](../config/func.md#漫画任务)    |
| supGroupSign    |        | 应援团签到 （目前也无意义了啊）               |                                       |
| useCouponBp     |        | 使用 b 币券（充电/兑换电池）                  | [点击](../config/func.md#使用-b-币券) |
| getVipPrivilege |        | 获取大会员权益                                |                                       |
| matchGame       |        | 赛事竞猜（人人都是硬币慈善家）                | [点击](../config/func.md#竞猜)        |
| giveGift        |        | 赠送过期礼物                                  | [点击](../config/func.md#直播间礼物)  |
| liveIntimacy    |        | 牌子亲密度 （非云函数为异步运行）             | [点击](../config/func.md#粉丝亲密度)  |
| batchUnfollow   |        | 取消关注                                      | [点击](../config/func.md#取关分组)    |
| ~~liveLottery~~ |        | ~~直播天选时刻~~（黑号风险）                  | [点击](../config/func.md#天选时刻)    |
| liveRedPack     |        | 直播天选红包                                  | [点击](../config/func.md#天选红包)    |
| dailyBattery    |        | 每日电池任务（电池+1）                        |                                       |
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

### 重要提示

::: danger cookie 重要提示（关于频繁失效），除了账号本身可能存在的风险外（例如异地登录，大量的天选等），还可能是以下原因
请务必查看 Cookie 的获取[点击这里跳转](../config/get_value.md)
:::

## 使用说明

配置方式见顶部导航栏（移动端点左上角，上面部分是导航），点击配置[或者点击这里跳转](../config/)。

## 更新

::: tip 测试内容
漫画基本上获取积分的方法都有了，兑换也有了，使用也有。相当于来了个更高级的等免功能
:::

[历史各版本配置对比](/config/version.md)

**下次更新预览（预计 2023 年或者农历 2023）：**

<Badge type="danger" text="警告" vertical="middle" /> 删除部分旧配置兼容。
<br/>
<Badge type="danger" text="警告" vertical="middle" /> 不再提供打包可执行文件。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 通过扫码获取 Cookie，二维码可打印到青龙日志，云函数控制台，本地控制台。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> Docker 可以传递参数。
<br/>
<Badge type="warning" text="修复" vertical="middle" /> 漫画阅读额外使用了非即将过期的漫读券。
<br/>
<Badge type="warning" text="修复" vertical="middle" /> 大积分任务未全部完成的情况下没有日志输出。

**在做但没有思路的：**

修改 json5 文件。操作 json5 和 json 不一样，因为 json5 有注释，目前 json5 官方提供的 js 包并不支持修改后保留注释。comment-json 倒是有这种功能，但奈何不是 json5。从一开始就选错了？可能只有在 json5 官方库的基础上自己写一个了。

**上一个版本 1203：**

<Badge type="danger" text="警告" vertical="middle" /> 删除大部分旧配置兼容。
<br/>
<Badge type="danger" text="警告" vertical="middle" /> 删除 serverless 部署工具。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> [manga.guess] 漫画每日猜拳（间隔太小会出现未知问题，故运行时长较长。收益存在随机性，也可能赔本，但基本上不存在赔本）。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 每月会员福利会领取 [漫画商城优惠]。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 多账户下风纪委员长期没案件会阻塞后期运行，现可以配置为异步执行。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 漫画券兑换配置更改，增加保留积分数、兑换数在原基础上增加自动数量。
<br/>
<Badge type="warning" text="修复" vertical="middle" /> 修复 dailyBattery 任务只部分完成的问题。
<br/>
<Badge type="warning" text="修复" vertical="middle" /> 粉丝亲密度 intimacy 错误的结束、错误的重试机制。
<br/>

::: details 优化
<Badge type="tip" text="优化" vertical="middle" /> 大积分每日 75 调整到 65（官方删除一个任务）。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 大积分视频观看：去掉自定义 epid（如有自定义需要可以提，没人需要就不加了）、默认西游记随机一集改为四大名著 5 个正剧中随机、完善接口数据，更加还原真实请求。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 漫画券兑换未到达 12 点时进行等待，超过 12:02 自动退出，故可提前启动。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 漫画阅读快速完成。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 当然还有每次更新的保留节目：日志调整。
:::

链接跳转：

[更多日志点击访问详情](./update.md)

## QQ 群

如果需要反馈，尽量选择 issue，而不是进群。

扫码加入群，没事别进去，自己扫码进群以后哔哔谁把你拉进来的是什么意思（群号：759694670）：

![qq群](/images/qq_group.png)
