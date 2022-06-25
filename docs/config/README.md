---
lang: zh-CN
title: 配置说明
description: 配置说明
---

## 配置相关

- 配置使用的 `json5`，兼容 `json` 且更加灵活，可以支持 `注释`。
- 务必使用 <https://www.lddgo.net/string/json5> 校验 json5 格式。
- Gzip 压缩地址（有说明时才用，一般都不需要用）<https://www.baidufe.com/fehelper/en-decode/>
- 我希望你能把必看的看完，没看完就问，不给予回答，请换个程序用，别找我。

## 用户配置参考

::: details 多用户参考配置，可以复制修改后使用
@[code](./all.json5)
:::

**多用户配置只用于部分情况，并不是所有都支持**

不支持的情况填写多个只会使用第一个, 不用担心

## 配置文件路径

<ConfigPath />

## 安全问题

请不要把配置上传到 Github 公开仓库等公开平台，特别是使用 Github Action 的。

所有人都可以直接在 Github 上搜索的，甚至有硬核会员年度大会员还有 10 万粉丝的账号上传到 Github。别人拿到你的 cookie，除了改密码换绑提现之外可以做任何事情。

理论上你除了 b 站任何人都可能会对你的账号造成影响，但是不信我你怎么用呢 😄😄😄。

![bili_jct](@imgs/bili_jct.png)
