---
lang: zh-CN
title: 配置详情
description: 配置详情
---

## 配置详情

| Key             | 值类型                               | 默认值              | 说明                                              |
| --------------- | ------------------------------------ | ------------------- | ------------------------------------------------- |
| message         | [点击跳转详情](./message.md)         |                     | 消息推送                                          |
| **cookie**      | 字符串                               | 无，必须手动添加    | **必须** 完整的 Cookie                            |
| function        | [点击跳转详情](./func.md)            |                     | 任务开关                                          |
| userAgent       | 字符串                               | Edge/Firefox/Chrome | 浏览器用户代理，内置偶尔随机更新 （建议自行配置） |
| dailyRunTime    | 字符串                               | `17:30:00-23:40:00` | Serveless 随机运行的时间段                        |
| apiDelay        | `[数值, 数值]`或者数值               | `[2, 6]`            | 单位秒，区间中随机，或固定一个值（部分接口有效）  |
| coin            | [点击跳转详情](./func.md#投币)       |                     | 投币相关                                          |
| gift            | [点击跳转详情](./func.md#直播间礼物) |                     | 直播礼物相关                                      |
| charge          | [点击跳转详情](./func.md#充电)       |                     | 充电相关                                          |
| match           | [点击跳转详情](./func.md#竞猜)       |                     | 竞猜相关                                          |
| lottery         | [点击跳转详情](./func.md#天选时刻)   |                     | 天选时刻相关                                      |
| intimacy        | [点击跳转详情](./func.md#粉丝亲密度) |                     | 粉丝亲密度相关                                    |
| manga           | [点击跳转详情](./func.md#漫画任务)   |                     | 漫画相关                                          |
| jury            | [点击跳转详情](./func.md#风纪委员)   |                     | 风纪委员相关                                      |
| bigPoint        | [点击跳转详情](./func.md#大积分)     |                     | 大积分相关                                        |
| exchangeCoupon  | [点击跳转详情](./func.md#兑换漫读券) |                     | 兑换漫读券相关                                    |
| activityLottery | [点击跳转详情](./func.md#转盘抽奖)   |                     | 转盘抽奖相关                                      |
| limit           | [点击跳转详情](#解除限制)            |                     | 解除内部限制配置                                  |
| log             | [点击跳转详情](./logger.md)          |                     | 日志配置                                          |

**重要配置说明**

- cookie 详见 [获取 Cookie 的方法](./get_value.md#获取-cookie-的方法)。
- userAgent - 内置默认浏览器 UA，但请尽量自行设置为常用设备 UA。该浏览器的 UA 为：<code>{{ userAgent }}</code>

## 完整配置参考

::: tip
由于消息推送较多，且没有默认值，所以下面并没有完全包含所有配置项。但是这里已经基本包含了配置。详情还是看 [配置详情](./func.md)。
:::

@[code](./all_all.json5)

<script setup>
import { ref, onMounted } from "vue";

const userAgent = ref('');

onMounted(() => {
  userAgent.value = navigator.userAgent;
});
</script>

## 解除限制

`[limit]`

| Key    | 值类型 | 默认值 | 说明                                                |
| ------ | ------ | ------ | --------------------------------------------------- |
| level6 | 布尔   | `true` | 获取经验限制为 6 级，6 级后不投币、观看视频、分享等 |
| coins5 | 布尔   | `true` | 每日投币限制 5 颗，配置投币数量不能大于 5           |
