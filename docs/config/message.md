---
lang: zh-CN
title: 消息通知
description: 消息通知
---

## Message 配置项

`[message]`

| Key            | 值类型                    | 说明                                                 |
| -------------- | ------------------------- | ---------------------------------------------------- |
| email          | Email [↓↓](#email)        |                                                      |
| ~~serverChan~~ | 字符串                    | 已过期 [官网](https://sct.ftqq.com/)获取 token       |
| pushplusToken  | 字符串                    | 即将过期 [官网](http://www.pushplus.plus/)获取 token |
| api            | 字符串                    | get 链接模板 例如：`http://xxxx.xxx/{title}/{text}`  |
| 从青龙面板移植 | [环境变量](#青龙面板相关) |                                                      |

## Email

`[email]`

| Key      | 值类型 | 默认值    | 举例             | 说明             |
| -------- | ------ | --------- | ---------------- | ---------------- |
| **from** | 字符串 |           | `mhtwrnm@qq.com` | 发件邮箱         |
| to       | 字符串 | from 的值 | `mhtwrnm@qq.com` | 接收邮箱         |
| **pass** | 字符串 |           |                  | 发件邮箱的授权码 |
| **host** | 字符串 |           | `smtp.163.com`   |                  |
| port     | 数值   | `465`     |                  | host 的端口      |

- 网易邮箱请参考 [什么是 POP3、SMTP 和 IMAP?](http://help.163.com/09/1223/14/5R7P6CJ600753VB8.html?servCode=6010376)
- QQ 邮箱请参考 [如何打开 POP3/SMTP/IMAP 功能？](https://service.mail.qq.com/cgi-bin/help?subtype=1&&no=166&&id=28)

## 青龙面板相关

例如 serverChan 直接使用的青龙面板

[配置项详见](./env.md#青龙面板相关)
