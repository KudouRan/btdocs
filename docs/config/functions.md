---
lang: zh-CN
title: 功能开关
description: 功能开关
---

## 功能配置

`[config]`

| Key                 | 默认值  | 说明                    |
| ------------------- | ------- | ----------------------- |
| silver2Coin         | `true`  | 银瓜子兑换硬币          |
| addCoins            | `true`  | 投币                    |
| liveSignTask        | `true`  | 直播间签到              |
| shareAndWatch       | `true`  | 观看和分享视频          |
| supGroupSign        | `false` | 应援团签到              |
| charging            | `false` | 给 UP 充电              |
| getVipPrivilege     | `false` | 获取大会员权益          |
| giveGift            | `false` | 赠送过期礼物            |
| matchGame           | `false` | 赛事竞猜                |
| liveLottery         | `false` | 直播天选时刻            |
| liveIntimacy        | `false` | 牌子亲密度              |
| mangaTask           | `false` | 漫画任务                |
| ~~mangaSign~~       | `false` | （请使用 mangaTask）    |
| ~~liveRedPack~~     | `false` | ~~直播天选红包~~        |
| ~~liveSendMessage~~ | `false` | （请使用 liveIntimacy） |

::: details 参考写法

```json5
{
  function: {
    silver2Coin: true,
    addCoins: true,
    liveSignTask: true,
    shareAndWatch: true,
    mangaTask: false,
    supGroupSign: false,
    charging: false,
    getVipPrivilege: false,
    giveGift: false,
    matchGame: false,
    liveLottery: false,
    liveRedPack: false,
    supGroupSign: false,
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

| Key        | 值类型   | 默认值     | 说明                                                     |
| ---------- | -------- | ---------- | -------------------------------------------------------- |
| mid        | 数值     | 自己的 mid | 充电目标的 mid（默认自己）                               |
| presetTime | 数值数组 | `[10, 20]` | 每月充电的日期，每月最后一天必定运行，此外默认 10，20 号 |

::: details 参考写法

```json5
{
  charge: {
    presetTime: [10, 20],
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

| Key            | 值类型             | 默认值                                                                                                 | 说明                                                                                               |
| -------------- | ------------------ | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| excludeAward   | 字符串数组         | `["舰","船","航海","代金券","优惠券","自拍","照","写真","图","提督","车车一局","再来一局","游戏道具"]` | 奖品描述不能包含，比如“自拍一张”将被跳过                                                           |
| includeAward   | 字符串数组         | `["谢"]`                                                                                               | 奖品描述包含，如果满足则跳过 excludeAward                                                          |
| blackUid       | 数值数组           | `[65566781, 1277481241, 1643654862, 603676925]`                                                        | up 黑名单（up 的 id，不是房间号）                                                                  |
| moveTag        | 字符串             | `天选时刻`                                                                                             | 关注的用户统一移动到此                                                                             |
| pageNum        | 数值               | `2`                                                                                                    | 扫描几页直播间                                                                                     |
| isMoveTag      | 布尔               | `true`                                                                                                 | 否将天选时刻关注 UP 移动到分组                                                                     |
| actFollowMsg   | `read`或者 `del`   | `'read'`                                                                                               | 关注时产生的回复的处理方式                                                                         |
| scanFollow     | 任意值或者`'only'` | 无                                                                                                     | 扫描关注的用户，任意值则扫描，如果为 `only` 则只扫描关注用户，不会扫描直播分区。默认无值（不扫描） |
| skipNeedFollow | 布尔值             | `false`                                                                                                | 跳过条件为关注的天选时刻                                                                           |

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
    isMoveTag: true,
    moveTag: '天选时刻',
    pageNum: 2,
    actFollowMsg: 'read',
    scanFollow: '',
    skipNeedFollow: false,
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

## 粉丝亲密度

`[intimacy]`

| Key             | 值类型           | 默认值  | 说明                                     |
| --------------- | ---------------- | ------- | ---------------------------------------- |
| liveSendMessage | 布尔             | `true`  | 直播弹幕（+100，点亮灰牌子）             |
| liveShare       | 布尔             | `true`  | 分享直播（+100 \* 5）                    |
| liveLike        | 布尔             | `true`  | 点赞直播间 (+200 \* 3)                   |
| liveHeart       | 布尔             | `false` | 观看直播 (+100 \* 1)                     |
| whiteList       | **用户 id** 数组 | `[]`    | 只操作此列表中的（优先级高于 blackList） |
| blackList       | **用户 id** 数组 | `[]`    | 操作全部，但排除其中的                   |

- 布尔值，`true` 表示开启，`false` 表示关闭
- **用户 id**（主站的 id） 并非主播直播间 ID

::: details 参考写法

```json5
{
  intimacy: {
    liveSendMessage: true,
    liveShare: true,
    liveLike: true,
    liveHeart: false,
    whiteList: [],
    blackList: [],
  },
}
```

:::

## 漫画任务

`[manga]`

| Key         | 值类型     | 默认值 | 说明                                                                                           |
| ----------- | ---------- | ------ | ---------------------------------------------------------------------------------------------- |
| sign        | 布尔       | `true` | 漫画签到任务                                                                                   |
| buy         | 布尔       | `true` | 是否使用即将过期的漫读券                                                                       |
| mc          | 数组数组   | `[]`   | 购买漫画 id（优先级高）                                                                        |
| name        | 字符串数组 | `[]`   | 购买漫画名称（优先级中）                                                                       |
| love        | 布尔       | `true` | 购买追漫（优先级低）                                                                           |
| buyInterval | 数值       | `6`    | 执行购买漫画间隔时间（单位天），默认 6，即每月 1，7，13，19，25。设置为 0 表示关闭，1 表示每天 |
| buyWeek     | 数值数组   | `[3]`  | 星期几执行购买漫画，默认星期 3，和上面的 buyInterval 不冲突                                    |

- 布尔值，`true` 表示开启，`false` 表示关闭
- mc 获取：<https://manga.bilibili.com/detail/mc29195> 这篇漫画的 mcId 就是 `29195`

::: details 参考写法

```json5
{
  manga: {
    // 签到
    sign: true,
    // 购买漫画
    buy: false,
    // 购买漫画 id（优先级高）
    mc: [29195],
    // 购买漫画名称（优先级中）
    name: ['两不疑'],
    // 购买追漫（优先级低）
    love: true,
    // 执行购买漫画间隔时间（单位天），设置为 0 表示关闭，1 表示每天
    buyInterval: 6,
    // 星期几执行购买漫画（与 buyInterval 都有效）
    buyWeek: [3],
  },
}
```

:::
