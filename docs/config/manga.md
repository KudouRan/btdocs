---
lang: zh-CN
title: 漫画测试
description: 漫画测试
---

## 漫画阅读测试

首相需要的配置如下所示：

```json5
{
  function: {
    mangaTask: true,
  },
  manga: {
    read: true,
  },
}
```

会自动获取每日任务的漫画，然后阅读。完成漫画阅读 30 分钟，指定漫画 15 分钟。当然实际消耗时间会在一分钟左右。由于延迟问题，可能会出现漫画阅读失败的日志，但实际上已经完成。

### 保存二进制

如果使用 httpcanary。可以直接分享请求体，或者保存请求体。

如果使用 PC 端，fiddler 可以使用下图方式保存请求体（切记点击一下编码，否则获取到的是 gzip 压缩后的，能看到 RDIO 开头的就没有问题）。

![fiddler](@imgs/fiddler_sava.png)

获取到二进制的请求体（或者完整请求）后，将文件命名为 `manga_request_mid`，mid 替换为你的用户 id（cookie 中的 DedeUserID）。如图所示

![DedeUserID](@imgs/manga_sava.png)

### 手动输入

考虑到部分抓包工具不能保存二进制，可以使用手动输入，当然不需要全部输入，现需要 2+2+14，共 18 个字节的数据。

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
      'bd84b9079fa78c'......'
    ]
  }
}
```
