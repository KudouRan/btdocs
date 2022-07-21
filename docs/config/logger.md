---
lang: zh-CN
title: 日志
description: 日志
---

## 日志

`[log]`

| Key       | 值类型                                               | 默认值  | 说明                                      |
| --------- | ---------------------------------------------------- | ------- | ----------------------------------------- |
| pushLevel | `error` ， `warn` ， `info` ， `verbose` ， `debug`; | `debug` | 最低推送等级，默认 `debug` 即支持所有等级 |
| useEmoji  | 布尔                                                 | `true`  | 日志是否使用 emoji 表示等级               |

::: details 参考配置

```json5
{
  log: {
    // 最低推送等级，默认 `debug` 即支持所有等级
    pushLevel: 'debug',
    // 日志是否使用 emoji 表示等级
    useEmoji: true,
  },
}
```

:::
