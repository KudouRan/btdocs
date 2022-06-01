---
lang: zh-CN
title: 环境变量
description: 环境变量
---

## 值

| 名字                       | 说明                                                                 |
| -------------------------- | -------------------------------------------------------------------- |
| TENCENT_SECRET_ID          | 使用 SCF 随机执行需要腾讯账号授权 ID                                 |
| TENCENT_SECRET_KEY         | 使用 SCF 随机执行需要腾讯账号授权 KEY                                |
| ALI_SECRET_ID              | 使用 FC 随机执行需要阿里账号授权 ID                                  |
| ALI_SECRET_KEY             | 使用 FC 随机执行需要阿里账号授权 KEY                                 |
| USE_NETWORK_CODE           | 直接通过网络请求代码，无需手动更新（云函数）                         |
| SERVERLESS_PLATFORM_VENDOR | Serverless 供应商，本地推送时必须，Docker 默认为`tencent`            |
| BILITOOLS_CONFIG           | [Gzip 压缩](./README.md)后的单个用户配置，所有环境都可用             |
| RUN_SCF_ALL                | 运行全部云函数（ Docker 推送至 SCF 时使用，值为需要`y`）             |
| ~~SCF_MEMORY_SIZE~~        | scf 中运行的内存大小（默认 128M，范围为 64 以及 128 的 1-24 整数倍） |
| ~~BILITOOLS_FILE_NAME~~    | ~~给配置文件命名，主要为了防止青龙面板的配置冲突~~                   |

## 青龙面板相关

> 下列环境变量来自 `青龙面板`
>
> 具体介绍看这里 <https://github.com/whyour/qinglong/blob/develop/sample/config.sample.sh>

支持以下三种方式填写：

- 环境变量，如 `PUSH_PLUS_TOKEN`
- 通过在配置中的 message 字段中配置，以下两种方式都可以。
  ```json
  {
    "message": {
      "PUSH_PLUS_TOKEN": "xxxxxxxx",
      "pushPlusToken": "xxxxxxxx",
      "SCKEY": "xxxxxxxx",
      "sckey": "xxxxxxxx"
    }
  }
  ```

```js
{
  'GOBOT_URL',
  'GOBOT_TOKEN',
  'GOBOT_QQ',
  'SCKEY': 'server酱',
  'QQ_SKEY',
  'QQ_MODE',
  'BARK_PUSH',
  'BARK_SOUND',
  'BARK_GROUP',
  'TG_BOT_TOKEN',
  'TG_USER_ID',
  'TG_PROXY_AUTH',
  'TG_PROXY_HOST',
  'TG_PROXY_PORT',
  'TG_API_HOST',
  'DD_BOT_TOKEN',
  'DD_BOT_SECRET',
  'QYWX_KEY',
  'QYWX_AM',
  'IGOT_PUSH_KEY',
  'PUSH_PLUS_TOKEN',
  'PUSH_PLUS_USER',
};
```
