---
lang: zh-CN
title: 常见问题
description: 常见问题解答
---

## Q&A

**Q：** 为啥我的 Cookie 三天两头的失效？我有多个账号，但是复制的 Cookie 只有最新的有用，怎么办？我只有手机，怎么获取 Cookie？

**A：** 请查看文档，Cookie 的获取方式。[Cookie 的获取方式](../config/get_value.md#必看)

<el-divider border-style="dashed" />

**Q：** 使用青龙面板安装依赖失败？

**A：** npm 包安装失败与本项目无关，建议尝试切换 npm 源。检查网络情况，如 DNS，防火墙，代理，路由器拦截等。可百度了解相关内容。

<el-divider border-style="dashed" />

**Q：** 版本何时更新？

**A：** 不定期更新依赖，与时俱进。优先级高的 bug 会尽快修复。功能需求会根据实际情况更新。

<el-divider border-style="dashed" />

**Q：** 账号出现风控？

**A：** 可能是程序的原因，但请优先考虑是否是异地使用等自身原因，然后再停止运行/反馈问题。

<el-divider border-style="dashed" />

**Q：** 莫名奇妙的投币，消耗道具，是不是程序盗用了？

**A：** 是的，你别用。（代码是开源的你可以找出程序任何的盗用的行为）

<el-divider border-style="dashed" />

**Q：** 为什么这么垃圾？

**A：** 是的，为什么呢？

## 常见异常

## 与程序无关异常

### Cannot find module

出现以下异常时因为没有安装依赖，我不知道你是否有安装过，但至少他是失败的，或者你安装的位置不正确。那就相当于你没安装

```bash{5}
node:internal/modules/cjs/loader:936
  throw err;
  ^

Error: Cannot find module '@catlair/bilitools'
Require stack:
- /home/catlair/github/btdoc/demo.js
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (/home/catlair/github/btdoc/demo.js:1:17)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '/home/catlair/github/btdoc/demo.js' ]

```

特指 `@catlair/bilitools` 包，其它包出现问题可能就是程序本身导致的，请提交反馈。
