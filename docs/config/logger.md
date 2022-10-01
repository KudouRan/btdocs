---
lang: zh-CN
title: 日志
description: 日志
---

## 日志

`[log]`

| Key          | 值类型                                                            | 默认值  | 说明                                                                 |
| ------------ | ----------------------------------------------------------------- | ------- | -------------------------------------------------------------------- |
| pushLevel    | `error` ， `warn` ， `info` ， `verbose` ， `debug` 或者 `false`; | `debug` | 最低推送等级，默认 `debug` 即支持所有等级,alse（布尔值）则不打印日志 |
| useEmoji     | 布尔                                                              | `true`  | 日志是否使用 emoji 表示等级                                          |
| consoleLevel | 同 pushLevel                                                      | `debug` | 打印日志等级，false（布尔值）则不打印日志                            |
| fileLevel    | 同 pushLevel                                                      | `debug` | 文件日志等级，false（布尔值）则不打印日志                            |
| fileSplit    | `month`，`day`                                                    | `month` | 文件日志保存方式，month 为按月                                       |

::: details 参考配置

```json5
{
  log: {
    // 最低推送等级，默认 `debug` 即支持所有等级
    pushLevel: 'debug',
    // 日志是否使用 emoji 表示等级
    useEmoji: true,
    // 打印日志等级，false（布尔值）则不打印日志
    consoleLevel: 'debug',
    // 文件日志等级，false（布尔值）则不打印日志
    fileLevel: 'debug',
    // 文件日志保存方式，month 为按月，day 为按天，默认为 month
    fileSplit: 'month',
  },
}
```

:::
