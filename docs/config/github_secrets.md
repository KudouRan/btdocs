---
lang: zh-CN
title: Github Secrets
description: Github Secrets
---

## Github Actions secrets

配置地址 `https://github.com/github用户名/仓库名/settings/secrets/actions`

| 名字               | 说明                                           |
| ------------------ | ---------------------------------------------- |
| BILITOOLS_CONFIG   | Gzip 压缩后的配置                              |
| TENCENT_SECRET_ID  | 使用 SCF 必须的腾讯账号授权 ID                 |
| TENCENT_SECRET_KEY | 使用 SCF 必须的腾讯账号授权 KEY                |
| TIMEOUT_MINUTES    | 部分时机设置的 Action 超时时间（默认 15 分钟） |
