---
lang: zh-CN
title: 消息通知
description: 消息通知
---

## Message 配置项

`[message]`

| Key            | 值类型                    | 说明                                                     |
| -------------- | ------------------------- | -------------------------------------------------------- |
| br             | 换行符                    | 主要配合 api 使用，有的 api 换行是`\n`，有的是需要`\n\n` |
| email          | Email [↓↓](#email)        |                                                          |
| pushplusToken  | 字符串                    | [官网](http://www.pushplus.plus/)获取 token              |
| api            | 字符串或对象              | 自定义推送 API，[详见](#自定义推送-api)                  |
| 从青龙面板移植 | [环境变量](#青龙面板相关) |                                                          |

::: details 参考配置

```json5
{
  message: {
    email: {
      from: 'xxxxxxxxx',
      to: 'xxxxxxxxx',
      pass: 'xxxxxxxxx',
      host: 'smtp.xxx.com',
      part: 465,
    },
    pushplusToken: 'xxxxxxxxxxxxxxx',
    SCKEY: 'xxxxxxxx',
  },
}
```

:::

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

## 自定义推送 API

### 简单 GET 请求

```json5
{
  message: {
    api: 'http://www.pushplus.plus/send?token=xxxxxxxxxxxxx&title={title}&content={text}',
  },
}
```

上面使用的是 pushplus 举例。

- 链接中的 token 是用户自己的 token，title 和 text 是推送的标题和内容，更多参数详见 pushplus 文档。
- 最重要的是 `title={title}&content={text}`，`{title}` 和 `{text}` 会被替换成推送的标题和内容。

再举一个 serverChan 的例子
`https://sctapi.ftqq.com/SCTxxxxxxxxxxxxxx.send?title={title}&desp={text}`

### 详细自定义

```json5
{
  message: {
    api: {
      // url 必填，query 参数请直接拼接到 url 中
      url: '',
      // 方法，默认值 POST，支持 GET、POST、PUT、DELETE、PATCH 等
      method: 'POST',
      // 头部，默认值如下
      headers: {
        'Content-Type': 'application/json',
      },
      // 超时时间，默认值 5s
      timeout: 5000,
      // 设置 https 代理
      proxy: {
        host: '',
        port: 443,
        auth: '',
      },
      // 请求体，使用 GET 方法时，请留空
      data: {},
    },
  },
}
```

使用 pushplus 的 POST 方法举例。

```json5
{
  message: {
    api: {
      url: 'http://www.pushplus.plus/send',
      data: {
        token: 'xxxxxxxxxxxxxxxxxxx',
        title: '{title}',
        content: '{text}',
      },
    },
  },
}
```

- 链接中的 token 是用户自己的 token，title 和 text 是推送的标题和内容，更多参数详见 pushplus 文档。
- 最重要的是 `title: {title} , content: {text}`，`{title}` 和 `{text}` 会被替换成推送的标题和内容。
- 请求方法和 header 都可以使用默认值

再使用 serverChan 的 POST 方法举例。

```json5
{
  message: {
    api: {
      url: 'https://sctapi.ftqq.com/xxxxxxxxxxxxxxxx.send',
      data: {
        title: '{title}',
        desp: '{text}',
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  },
}
```

- 这里的 header 需要修改，因为默认的是 `application/json`，而 serverChan 需要 `application/x-www-form-urlencoded`
