---
lang: zh-CN
title: 关于
description: about
sidebar: false
---

## 赞助

备注昵称，将出现在感谢列表中。

<el-button v-for="button in buttons" :key="button.text" :type="button.type" text @click="changeZZUrl(button)">{{ button.text }}</el-button>

<img :class="zzClass" :src="zzUrl" alt="zz_three"/>

## 联系方式

### QQ 群

![qq群](/images/qq_group.png)

### issue

见到导航栏

### 邮箱

见 Github 个人页

## 说明

1. bug 是不可避免的，我们尽量减少 bug 所带来得损失，**但这并不意味着我们要为此负责**，选择权在您，望周知。
2. 不会以任何方式收集用户 mid、Cookies、关注列表、收藏记录等信息。项目只向 B 站提供 Cookies，请不要将 Cookies 上传到 Github 等**开放平台**以及其他任何**不可信**平台。
3. 仓库中内置的任何 B 站相关用户信息，都不会影响你的投币、充电、打赏，权利掌握在使用者手中。
4. 如果您有任何疑问，请提交 issue，我们会尽快给予回复。

<script setup lang="ts">
import zz_three from '@imgs/zz_three.png';
import zz_alipay from '@imgs/zz_alipay.png';
import zz_weixin from '@imgs/zz_weixin.png';
import zz_qq from '@imgs/zz_qq.png';
import { ref } from 'vue';

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
