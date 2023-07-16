---
lang: zh-CN
title: 必要值获取（必看）
description: 必要值获取（必看）
---

## 必看

如果你使用程序自带的扫码登录，可以忽略下面的内容，否则必看。

最终 Cookie 是这样的（为了演示方便换了行，实际只有一行），只有基础的三个用户信息也能用，但是并不推荐，且容易出现某些异常。

```text
_uuid=D2282D0F-257B-845A-BDF5-C770ED288F4001440infoc; buvid3=BF17608E-FB87-4F49-A922-56FD2E284D6F18534infoc;
fingerprint=5502cd4fe9637738de04bd9c3d1bdbc5;
buvid_fp=BF17608E-FB87-4F49-A922-56FD2E284D6F18534infoc;
SESSDATA=21607773%2C1631089673%2C71a42%2A31; bili_jct=dd92c55a6d67041ce2f3fb1650889ea8;
DedeUserID=12324234243817316; DedeUserID__ckMd5=47d541f04b605da9;
sid=ivie73r8; fingerprint3=792b32adfecbe31a4aca53ab7be1ad76;
fingerprint_s=bb6736758e7344a295c2ed6070cc642e;
buvid_fp_plain=BF17608E-FB87-4F49-A922-56FD2E284D6F18534infoc;
CURRENT_FNVAL=80; blackside_state=1; rpdid=|(kmJYYJ)lkR0J'uYu)llkJYJ; _dfcaptcha=a46d7562a42065d43a88c053e283e876;
LIVE_BUVID=AUTO8016188357987702; bsource=search_baidu; PVID=2
```

**为了避免 cookie 被刷新失效**（例如你时常使用浏览器访问 b 站，那就不要直接复制它的 cookie，因为目前存在 cookie 自动刷新的情况，你保留的就会失效了），你应该使用隐私窗口重新登录哔站，并获取新的 cookie。

::: details 隐私窗口打开方式（PC 举例）：
![隐私窗口](@imgs/br_ys.png)
:::

获取成功后应该直接关闭隐私窗口，而不是退出你的哔站账号，那样 cookie 立马失效。

一些人使用多账号时喜欢退出后再登录第二个账号，这样第一个账号的 cookie 就会失效。你应该直接关闭隐私窗口，然后再打开一个新的隐私窗口。

::: details 如图所示，这是错误的
![bili_exit](@imgs/bili_exit.png)
:::

## PC 获取 Cookie 的方法

推荐使用 Firefox/Chrome/Chromium Edge/360 极速浏览器

### Firefox

打开浏览器隐私窗口，任意方式进入 b 站（搜索，收藏夹，地址访问等），登录账号。  
按 F12 （或者右键 --> 检查）打开开发者工具，切换到`网络` ( `network` )  
点击重新载入（或者按 F5，Ctrl + R 等）刷新页面

![firefox-network](/images/firefox-network.png)

点击某一个请求（通常为 `nav` ）

![firefox-net-bnav](/images/firefox-net-bnav.png)

### Chrome/Chromium

打开浏览器隐私窗口，任意方式进入 b 站（搜索，收藏夹，地址访问等），登录账号。  
按 F12 （或者右键 --> 检查）打开开发者工具，切换到 `网络` ( `network` )  
点击重新载入（或者按 F5，Ctrl + R 等）刷新页面  
点击某一个请求（通常为 nav ）

![chrome-net-bnav](/images/chrome-net-bnav.png)

::: danger 注意
在使用 Chromium 类的浏览器时复制时一定要选中**复制**，而不是使用自带的**复制值**功能。
:::

选中值，点击右键，选择 `复制`或者按键 `Ctrl + C`，得到结果会被编码（下为可能被编码的部分）。

```
SESSDATA=b2817085%2C1672313089%2C25294%2A71; PVID=3; b_timer=%7B%22ffp%22%3A%7B%22333.851.fp.risk_B0835BF0%22%3A%22181C34B87E8%22%2C%22777.5.0.0.fp.risk_B0835BF0%22%3A%22181C352F104%22%7D%7D
```

点击项，点击右键，选择 `复制值`，得到结果并没有被编码（如下举例），这个添加到配置中是会导致 json5 格式错误的，并且部分接口数据也会异常。

```
SESSDATA=b281131,167123189,1235294*21; PVID=3; b_timer={"ffp":{"333.851.fp.risk_B0835BF0":"181C34B87E8","777.5.0.0.fp.risk_B0835BF0":"181C352F104"}}
```

当然你可以把其放到这里进行编码

<EncodeCookie></EncodeCookie>

## 移动端获取 cookie

推荐使用 `alook` 浏览器，可以直接在应用商城下载，或者在 [官网](https://www.alookweb.com/) 下载。

如果有类似的浏览器，欢迎说明。

[操作详情点击](./get_cookie_mobile.md)

## 自动获取 UserAgent

当前浏览器的 UserAgent 如下：

<code>{{ userAgent }}</code>

## 手机端 access_key

### 扫码获取 1

npm 包本身是支持扫码登录的。参考各个平台的使用方法（阿里云函数，腾讯云函数，本地，青龙面板）

### 扫码获取 2

目前暂时不需要 access_key，但是以后可能会用到，所以这里提供一个获取方法。

<https://github.com/catlair/blogin/>

在线地址: <https://blogin-catlair.vercel.app/api> 由于技术原因，在线地址服务器在美国等地，如果介意请不要使用。

### 通过浏览器 cookie 获取

缺点是无法获取 refresh_token，导致无法刷新 access_key。  
优点是搜集浏览器也能用。

[操作详情点击](./get_access_key_pc.md)

### 说明

> 在和 cookie 同级的地方配置 accessKey （是写成 accessKey，不是 access_key），部分接口会优先使用 accessKey 例如大积分任务（但不是必须，Cookie 一样正常使用）。

<script setup>
import { ref, onMounted } from "vue";

const userAgent = ref('');

onMounted(() => {
  userAgent.value = navigator.userAgent;
});
</script>
