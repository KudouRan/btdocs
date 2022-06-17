---
lang: zh-CN
title: 介绍
description: 简单介绍
---

::: tip 参与贡献
如果对与此文档有补充、改进意见或者修改，每个页面都可以直接点击末尾的`在 GitHub 上编辑此页`。非常感谢！
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
- [x] 支持 Docker 、腾讯 SCF 、阿里 FC、百度 CFC、华为 FG、青龙面板等方式运行，支持执行消息推送
- [x] 代码自动在线更新，发包任你发 <Badge type="tip" text="推荐" vertical="middle" />
- [ ] ~~直播礼物红包（测试）~~
- [ ] ~~风纪委员 headless 版（不支持 scf）见 [bili-task-puppeteer](https://github.com/catlair/bili-task-puppeteer)~~（没有资格）

## 使用说明

配置方式见顶部导航栏，点击配置[或者点击这里跳转](../config/)。

为了方便管理，能使用 npm 包的地方都将使用 npm 包。目前还不支持的（平台原因）仅有：

百度云函数、华为云函数（包括 FG、AGC）

所有老方式都是支持的，但是建议使用 npm 包的方式。

### 重要提示

请不要使用直播礼物红包 `liveRedPack`，经过测试发现，并不是参与即可获取红包，b 站可能存在其他机制。

## 更新

新增天选时刻、~~红包~~，支持自动读取/删除关注消息。

直播获取小心心改版，且取消直播间弹幕功能，使用 `粉丝勋章/亲密度（测试）`替代。

领取年度大会员权益/B 币券，更新为每日检测，适应新规则。

支持获取在线代码运行，部署一次即可长期更新（逻辑不变的情况下），添加环境变量 `USE_NETWORK_CODE` 尝试，百度云不支持环境变量，可以在附加消息中添加 `USE_NETWORK_CODE` 字段。值为字符串，可以是任意值，但不能为空。

## 赞助

备注昵称，将出现在感谢列表中。

<el-button v-for="button in buttons" :key="button.text" :type="button.type" text @click="changeZZUrl(button)">{{ button.text }}</el-button>

<img :class="zzClass" :src="zzUrl" alt="zz_three"/>

<script setup lang="ts">
import zz_three from '@imgs/zz_three.png';
import zz_alipay from '@imgs/zz_alipay.png';
import zz_weixin from '@imgs/zz_weixin.png';
import zz_qq from '@imgs/zz_qq.png';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useReleasesStore } from '@stores/releases';

const { tagName, isRefreshed } = storeToRefs(useReleasesStore());


const zzUrls = {
  all: zz_three,
  alipay: zz_alipay,
  weixin: zz_weixin,
  qq: zz_qq,
}
const zzUrl = ref(zz_three);
const zzClass = ref('');

const buttons = [
  { type: 'primary', text: '全部' , url: 'all'},
  { type: 'primary', text: '支付宝', url: 'alipay' },
  { type: 'primary', text: '微信' , url: 'weixin'},
  { type: 'primary', text: 'QQ' , url: 'qq'},
] as const

function changeZZUrl(button) {
  zzUrl.value = zzUrls[button.url];
  if (button.url === 'all') {
    zzClass.value = '';
  } else {
    zzClass.value = 'zz'
  }
}
</script>

<style>
img.zz{
  display: block;
  width: 400px;
}
</style>
