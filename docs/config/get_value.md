---
lang: zh-CN
title: 必要值获取（必看）
description: 必要值获取（必看）
---

## 获取 Cookie 的方法

以 PC 端浏览器举例（推荐使用 Firefox/Chrome/Chromium Edge）

最终 Cookie 是这样的（为了演示方便换了行，实际只有一行）

```text
_uuid=D2282D0F-257B-845A-BDF5-C770ED288F4001440infoc; buvid3=BF17608E-FB87-4F49-A922-56FD2E284D6F18534infoc;
fingerprint=5502cd4fe9637738de04bd9c3d1bdbc5;
buvid_fp=BF17608E-FB87-4F49-A922-56FD2E284D6F18534infoc;
SESSDATA=21607773%2C1631089673%2C71a42%2A31; bili_jct=dd92c55a6d67041ce2f3fb1650889ea8;
DedeUserID=521268093; DedeUserID__ckMd5=47d541f04b605da9;
sid=ivie73r8; fingerprint3=792b32adfecbe31a4aca53ab7be1ad76;
fingerprint_s=bb6736758e7344a295c2ed6070cc642e;
buvid_fp_plain=BF17608E-FB87-4F49-A922-56FD2E284D6F18534infoc;
CURRENT_FNVAL=80; blackside_state=1; rpdid=|(kmJYYJ)lkR0J'uYu)llkJYJ; _dfcaptcha=a46d7562a42065d43a88c053e283e876;
LIVE_BUVID=AUTO8016188357987702; bsource=search_baidu; PVID=2
```

**为了避免 cookie 被刷新失效**（例如你时常使用浏览器访问 b 站，那就不要直接复制它的 cookie，因为目前存在 cookie 自动刷新的情况，你保留的就会失效了），你应该使用隐私窗口重新登录哔站，并获取新的 cookie。

隐私窗口打开方式（举例）：

![隐私窗口](@imgs/br_ys.png)

获取成功后应该直接关闭隐私窗口，而不是退出你的哔站账号，那样 cookie 立马失效。

如下图所示，**这是错误的**，某些人喜欢退出后再登录第二个账号，这样第一个账号的 cookie 就会失效。你应该直接关闭隐私窗口，然后再打开一个新的隐私窗口。

![bili_exit](@imgs/bili_exit.png)

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

选中值，点击右键，选择 `复制`或者按键 `Ctrl + C`，得到结果会被编码（如下例）。

```
SESSDATA=b2817085%2C1672313089%2C25294%2A71; PVID=3; b_timer=%7B%22ffp%22%3A%7B%22333.851.fp.risk_B0835BF0%22%3A%22181C34B87E8%22%2C%22777.5.0.0.fp.risk_B0835BF0%22%3A%22181C352F104%22%7D%7D
```

点击项，点击右键，选择 `复制值`，得到结果并没有被编码（如下举例），这个添加到配置中是会导致 json5 格式错误的，并且部分接口数据也会异常。

```
SESSDATA=b281131,167123189,1235294*21; PVID=3; b_timer={"ffp":{"333.851.fp.risk_B0835BF0":"181C34B87E8","777.5.0.0.fp.risk_B0835BF0":"181C352F104"}}
```

当然你可以把其放到这里进行编码

<el-space>
<el-input v-model="cookie" placeholder="请输入 Cookie"></el-input>
<el-button @click="encodeCookieClick">点击编码</el-button>
</el-space>

<code v-if="newCookie">{{ newCookie }}</code>

## 自动获取 UserAgent

当前浏览器的 UserAgent 如下：

<code>{{ userAgent }}</code>

## 手机端 access_key

目前暂时不需要 access_key，但是以后可能会用到，所以这里提供一个获取方法。

<https://github.com/catlair/blogin/>

在线地址: <https://blogin-catlair.vercel.app/api> 由于技术原因，在线地址服务器在美国等地，如果介意请不要使用。

> 在和 cookie 同级的地方配置 accessKey （是写成 accessKey，不是 access_key），部分接口会优先使用 accessKey 例如大积分任务。

<script setup>
import { ref, onMounted } from "vue";
import { encodeCookie } from '@utils/cookie';

const userAgent = ref('');
const cookie = ref('');
const newCookie = ref('');

onMounted(() => {
  userAgent.value = navigator.userAgent;
});

function encodeCookieClick(){
  newCookie.value = encodeCookie(cookie.value);
}
</script>
