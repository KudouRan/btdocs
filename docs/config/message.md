---
lang: zh-CN
title: 消息通知/推送
description: 消息通知
---

## 消息推送

`[message]`

| Key            | 值类型                    | 说明                                                     |
| -------------- | ------------------------- | -------------------------------------------------------- |
| br             | 字符串                    | 主要配合 api 使用，有的 api 换行是`\n`，有的是需要`\n\n` |
| onlyError      | 布尔值                    | 仅错误时发送                                             |
| email          | [点击了解](#email)        |                                                          |
| pushplusToken  | 字符串                    | [官网](http://www.pushplus.plus/)获取 token              |
| api            | 字符串或对象              | 自定义推送 API，[详见](#自定义推送-api)                  |
| 从青龙面板移植 | [环境变量](#来自青龙面板) | 你在找微信，tg，serverChan？不妨看这里                   |

::: details 参考配置

```json5
{
  message: {
    br: '\n',
    onlyError: false,
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

## 来自青龙面板

> 下列环境变量来自 `青龙面板`
>
> 具体介绍看这里 <https://github.com/whyour/qinglong/blob/develop/sample/config.sample.sh>
> 支持 serverChan（Server 酱）、Telegram（Telegram）、Wechat（微信）等

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

由于青龙面板在不断更新，但是这里可能没有更，下面列出支持的列表：

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
  'TG_BOT_TOKEN': 'telegram',
  'TG_USER_ID',
  'TG_PROXY_AUTH',
  'TG_PROXY_HOST',
  'TG_PROXY_PORT',
  'TG_API_HOST',
  'DD_BOT_TOKEN',
  'DD_BOT_SECRET',
  'QYWX_KEY': '企业微信',
  'QYWX_AM': '企业微信应用消息',
  'IGOT_PUSH_KEY': 'iGot',
  'PUSH_PLUS_TOKEN',
  'PUSH_PLUS_USER',
};
```

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
