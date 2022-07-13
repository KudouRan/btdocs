---
lang: zh-CN
title: 配置详情
description: 配置详情
---

## 配置详情

| Key          | 值类型                               | 默认值              | 说明                                              |
| ------------ | ------------------------------------ | ------------------- | ------------------------------------------------- |
| message      | [点击跳转详情](./message.md)         |                     | 消息推送                                          |
| **cookie**   | 字符串                               | 无，必须手动添加    | **必须** 完整的 Cookie                            |
| function     | [点击跳转详情](./func.md)            |                     | 任务开关                                          |
| userAgent    | 字符串                               | Edge/Firefox/Chrome | 浏览器用户代理，内置偶尔随机更新 （建议自行配置） |
| dailyRunTime | 字符串                               | `17:30:00-23:40:00` | Serveless 随机运行的时间段                        |
| apiDelay     | `[数值, 数值]`或者数值               | `[2, 6]`            | 单位秒，区间中随机，或固定一个值（部分接口有效）  |
| coin         | [点击跳转详情](./func.md#投币)       |                     | 投币相关                                          |
| gift         | [点击跳转详情](./func.md#直播间礼物) |                     | 直播礼物相关                                      |
| charge       | [点击跳转详情](./func.md#充电)       |                     | 充电相关                                          |
| match        | [点击跳转详情](./func.md#竞猜)       |                     | 竞猜相关                                          |
| lottery      | [点击跳转详情](./func.md#天选时刻)   |                     | 天选时刻相关                                      |
| intimacy     | [点击跳转详情](./func.md#粉丝亲密度) |                     | 粉丝亲密度相关                                    |
| manga        | [点击跳转详情](./func.md#漫画任务)   |                     | 漫画相关                                          |
| jury         | [点击跳转详情](./func.md#风纪委员)   |                     | 风纪委员相关                                      |

**重要配置说明**

- cookie 详见 [获取 Cookie 的方法](./get_value.md#获取-cookie-的方法)。
- userAgent - 内置默认浏览器 UA，但请尽量自行设置。
- 该浏览器的 UA 为：<code>{{ userAgent }}</code>

## 完整配置参考

::: tip
由于消息推送较多，且没有默认值，所以下面并没有完全包含所有配置项。
:::

@[code](./all.json5)

<script setup>
import { ref, onMounted } from "vue";

const userAgent = ref('');

onMounted(() => {
  userAgent.value = navigator.userAgent;
});
</script>
