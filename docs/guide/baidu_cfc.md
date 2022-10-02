---
lang: zh-CN
title: 百度云函数 CFC
description: 百度云函数 CFC
---

## 百度云函数 CFC 文档 <TestedVersion type="cfc" />

下载最新版的[baidu_cfc.zip 压缩包](https://github.com/Kudouran/BiliOutils/releases/latest)

[Gitee 备份下载地址](https://gitee.com/Kudouran/BiliOutils/releases/)

加速下载：
<MyLink :href="downloadUrl"></MyLink>

把 {{tagName}} 替换成最新版本号即可

详细过程略，请参考 [手动部署到 SCF](./action_scf.md)

[点击访问百度 CFC](https://cloud.baidu.com/product/cfc.html)

- Nodejs 版本请选择 12.x 及以上
- 暂时只支持每日任务
- 暂时不支持随机时间运行

## 配置

由于百度云函数的编辑器只能看到入口文件，所有配置直接在入口文件中写入即可。

入口文件中有如下代码：

```javascript{2}
exports.handler = handler;
global.BILITOOLS_CONFIG = null;

var _vm = require('./utils/vm');
```

配置方式如下：

```javascript{2-7}
exports.handler = handler;
global.BILITOOLS_CONFIG = {
  cookie: '',
  function: {
    liveSignTask: true,
  },
};

var _vm = require('./utils/vm');
```

<script setup>
import { storeToRefs } from 'pinia';
import { useReleasesStore } from '@stores/releases';

const { tagName } = storeToRefs(useReleasesStore());
const ghproxy = __GLOBAL_GHPROXY__
const downloadUrl = `https://${ghproxy}/https://github.com/Kudouran/BiliOutils/releases/download/${tagName.value}/baidu_cfc.zip`
</script>
