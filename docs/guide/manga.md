---
lang: zh-CN
title: 漫画测试
description: 漫画测试
---

## 漫画测试

### 保存二进制

略

### 手动输入

不能保存二进制，可以使用手动输入，需要 2+2+14，共 18 个字节的数据。

- 用户 id 后面的`（`（`0x28`）在后面两位。
- eventId（0015338）后面的 `@`（`0x40`） 后面的两位。
- 叉叉 `0x78` 到最后。
- 下图用 `V` （`x056`）把需要的位置占住了。

![漫画测试](@imgs/getMangaSign.png)

支持以下方式配置，第一种必须要 json5 的文件。

```json5
{
  managa: {
    read: true
    readSign:  [
      0xbd, 0x84, 0xb9, 0x07, 0x9f, 0xa7, 0x8c, 0xd3, 0x92, 0xc2, 0x30, 0x80, 0x01, 0xf4, 0x94,
      0xd3, 0xc2, 0x30,
    ]
  }
}
```

```json5
{
  managa: {
    read: true
    readSign:  [
      '0xbd', '0x84', '0xb9', '0x07', '0x9f', '0xa7', '.....'
    ]
  }
}
```

```json5
{
  managa: {
    read: true
    readSign:  [
      'bd', '84', 'b9', '07', '9f', 'a7', '8c', '......'
    ]
  }
}
```

```json5
{
  managa: {
    read: true
    readSign:  [
      'bd', '84b9079fa78c'......'
    ]
  }
}
```
