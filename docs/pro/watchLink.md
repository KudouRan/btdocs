---
lang: zh-CN
title: 观看直播
description: 观看直播
---

## 配置

```json5
{
  function: {
    watchLink: true,
  },
  watchLink: {
    // 用户 uid，非直播间 id
    uid: [],
    // 直播心跳
    heart: true,
    // 运行时间，单位分钟
    time: 30,
    // 直播分区，例如 3,321 为手游-原神
    parentId: 3,
    areaId: 321,
  },
}
```
