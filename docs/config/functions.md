---
lang: zh-CN
title: 功能开关
description: 功能开关
---

## 功能配置

`[config]`

| Key              | 默认值  | 说明                 |
| ---------------- | ------- | -------------------- |
| silver2Coin      | `true`  | 银瓜子兑换硬币       |
| addCoins         | `true`  | 投币                 |
| liveSignTask     | `true`  | 直播间签到           |
| shareAndWatch    | `true`  | 观看和分享视频       |
| mangaSign        | `false` | 漫画签到（移动端）   |
| supGroupSign     | `false` | 应援团签到（移动端） |
| liveSendMessage  | `false` | 每日直播间发送弹幕   |
| charging         | `false` | 给 UP 充电           |
| getVipPrivilege  | `false` | 获取年度大会员权益   |
| giveGift         | `false` | 赠送过期礼物         |
| matchGame        | `false` | 赛事竞猜             |
| liveLottery      | `false` | 直播天选时刻         |
| liveRedPack      | `false` | 直播天选红包         |
| ~~liveIntimacy~~ | `false` | 牌子亲密度（预设）   |
| ~~liveHeart~~    | `false` | 直播心跳（小心心）   |

::: details 参考写法

```json5
{
  function: {
    silver2Coin: true,
    addCoins: true,
    liveSignTask: true,
    shareAndWatch: true,
    mangaSign: false,
    supGroupSign: false,
    liveSendMessage: false,
    charging: false,
    getVipPrivilege: false,
    giveGift: false,
    matchGame: false,
    liveLottery: false,
    liveRedPack: false,
    liveIntimacy: false,
    supGroupSign: false,
    liveHeart: false,
  },
}
```

:::

## 投币

`[coin]`

| Key           | 值类型            | 默认值 | 说明                                           |
| ------------- | ----------------- | ------ | ---------------------------------------------- |
| targetLevel   | 数值              | `6`    | 目标等级，达到或大于将不投币、分享、观看视频   |
| stayCoins     | 数值              | `0`    | 账号至少保留的硬币数目，低于或等于将不投币     |
| targetCoins   | 数值              | `5`    | 每日投币目标（超过将不投币）                   |
| customizeUp   | 数值数组          | `[]`   | 自定义投币 UP， 在所填中随机选取               |
| retryNum      | 数值              | `4`    | 投币失败重试次数                               |
| upperAccMatch | `true`或者`false` | `true` | 自定义投币 UP 时，合作视频的 UP 必须为指定中的 |

::: details 参考写法

```json5
{
  coin: {
    targetLevel: 6,
    stayCoins: 0,
    targetCoins: 5,
    customizeUp: [],
    retryNum: 4,
    upperAccMatch: true,
  },
}
```

:::

## 充电

`[charge]`

| Key        | 值类型 | 默认值       | 说明                       |
| ---------- | ------ | ------------ | -------------------------- |
| mid        | 数值   | 自己的 mid   | 充电目标的 mid（默认自己） |
| presetTime | 数值   | 每月最后一天 | 每月充电的日期             |

::: details 参考写法

```json5
{
  charge: {
    mid: undefined,
    presetTime: 31,
  },
}
```

:::

## 竞猜

`[match]`

| Key       | 值类型             | 默认值 | 说明                                      |
| --------- | ------------------ | ------ | ----------------------------------------- |
| coins     | 数值               | `5`    | 每次竞猜的数量                            |
| selection | 数值               | `1`    | 压赔率低的（正压）大于 0 的数，反之等于 0 |
| diff      | 数值（可以是小数） | `0.0`  | 赔率需要达到的差距                        |

::: details 参考写法

```json5
{
  match: {
    coins: 5,
    selection: 1,
    diff: 0.0,
  },
}
```

:::

## 天选时刻

`[lottery]`

| Key          | 值类型     | 默认值                                                                                                 | 说明                                      |
| ------------ | ---------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| excludeAward | 字符串数组 | `["舰","船","航海","代金券","优惠券","自拍","照","写真","图","提督","车车一局","再来一局","游戏道具"]` | 奖品描述不能包含，比如“自拍一张”将被跳过  |
| includeAward | 字符串数组 | `["谢"]`                                                                                               | 奖品描述包含，如果满足则跳过 excludeAward |
| blackUid     | 数值数组   | `[65566781, 1277481241, 1643654862, 603676925]`                                                        | up 黑名单（up 的 id，不是房间号）         |
| moveTag      | 字符串     | `天选时刻`                                                                                             | 关注的用户统一移动到此                    |
| pageNum      | 数值       | `2`                                                                                                    | 扫描几页直播间                            |

::: details 参考写法

```json5
{
  lottery: {
    excludeAward: [
      '舰',
      '船',
      '航海',
      '代金券',
      '优惠券',
      '自拍',
      '照',
      '写真',
      '图',
      '提督',
      '车车一局',
      '再来一局',
      '游戏道具',
    ],
    includeAward: ['谢'],
    blackUid: [65566781, 1277481241, 1643654862, 603676925],
    moveTag: '天选时刻',
    pageNum: 2,
  },
}
```

:::

## 直播间礼物

`[gift]`

| Key  | 值类型   | 默认值           | 说明                                 |
| ---- | -------- | ---------------- | ------------------------------------ |
| mids | 数值数组 | coin.customizeUp | 自定义投喂礼物 UP， 在所填中随机选取 |

::: details 参考写法

```json5
{
  gift: {
    mids: [],
  },
}
```

:::
