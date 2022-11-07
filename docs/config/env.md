---
lang: zh-CN
title: 环境变量
description: 环境变量
---

## 环境变量文档

| 名字                       | 说明                                                                 |
| -------------------------- | -------------------------------------------------------------------- |
| TENCENT_SECRET_ID          | 使用 SCF 随机执行需要腾讯账号授权 ID                                 |
| TENCENT_SECRET_KEY         | 使用 SCF 随机执行需要腾讯账号授权 KEY                                |
| ALI_SECRET_ID              | 使用 FC 随机执行需要阿里账号授权 ID                                  |
| ALI_SECRET_KEY             | 使用 FC 随机执行需要阿里账号授权 KEY                                 |
| USE_NETWORK_CODE           | 直接通过网络请求代码，无需手动更新（云函数）                         |
| BILITOOLS_IS_ASYNC         | 异步执行，懂的都懂                                                   |
| SERVERLESS_PLATFORM_VENDOR | Serverless 供应商，本地推送时必须，Docker 默认为`tencent`            |
| BILITOOLS_CONFIG           | [Gzip 压缩](./README.md)后的单个用户配置，所有环境都可用             |
| RUN_SCF_ALL                | 运行全部云函数（ Docker 推送至 SCF 时使用，值为需要`y`）             |
| ~~BILITOOLS_FILE_NAME~~    | 给配置文件命名，主要为了防止青龙面板的配置冲突                       |
| ~~SCF_MEMORY_SIZE~~        | scf 中运行的内存大小（默认 128M，范围为 64 以及 128 的 1-24 整数倍） |
