---
lang: zh-CN
title: 配置说明
description: 配置说明
---

## 配置相关

- 配置使用的 `json5`，兼容 `json` 且更加灵活，可以支持 `注释`。
- 务必使用 <https://www.lddgo.net/string/json5> 校验 json5 格式。
- 压缩配置地址（选择 gzip 压缩）：<https://www.baidufe.com/fehelper/en-decode/>

### 配置文件路径

满足以下的目录结构的 `config.json{5}` 都是符合要求的配置文件路径，青龙面板，npm 除外。

```bash{11}
.
├── config
│  ├── config.json
│  └── config.json5
└── src
   ├── config
   │  ├── config.json
   │  └── config.json5
   ├── config.json
   ├── config.json5
   └── index.js
```

::: tip 目录树
或者这样更加生动
<el-tree :data="data" :props="defaultProps" />
:::

- 当然你可以不用文件配置，直接使用环境变量 `BILITOOLS_CONFIG`（配置按照要求 [gzip 压缩](https://www.baidufe.com/fehelper/en-decode/)）

### 配置介绍（开发查看）

所有配置都登记在 [`types/config.ts`](https://gitee.com/catlair/BiliTools/blob/main/src/types/config.ts) 文件中

::: details 解释

- `number`: 数字 例如：`123`。
- `string`: 字符串 例如：`"ojbk"`。
- `boolean`: 布尔值 `true` 或者 `false`。
- `[]`: 数组 例如：`number[]` 具体可以是 `[1,2,3]`。
- `targetLevel?: number;` `?` 表示 `targetLevel` 是可选的配置。
  :::

### 用户配置参考

::: details 参考配置
@[code](./config.json5)
:::

多用户配置参考 [config.example.json5](https://gitee.com/catlair/BiliTools/blob/main/config/config.example.json5)

单用户配置参考 [config.single.json](https://gitee.com/catlair/BiliTools/blob/main/config/config.single.json)

注：多用户就是单用户数组。

**多用户配置只用于部分情况，并不是所有都支持**

- 本地（如 npm）/docker 运行多个用户
- 本地（如 npm）/docker 推送多个到 scf

其他情况填写多个只会使用第一个, 不用担心

<script setup>
import 'element-plus/es/components/message/style/css'
import { ElTree } from 'element-plus'
  
const customNodeClass = (data, node) => {
  if (data.isPenultimate) {
    return 'is-penultimate';
  }
  return null;
};

const data = [
  {
    label: 'config',
    children: [
      {
        label: 'config.json',
      },
      {
        label: 'config.json5',
      },
    ],
  },
  {
    label: 'src',
    children: [
      {
        label: 'config',
        children: [
          {
            label: 'config.json',
          },
          {
            label: 'config.json5',
          },
        ],
      },
      {
        isPenultimate: true,
        label: 'index.js',
      },
      {
        label: 'config.json',
      },
      {
        label: 'config.json5',
      },
    ],
  },
];

const defaultProps = {
  children: 'children',
  label: 'label',
  class: customNodeClass,
};
</script>

<style>
.is-penultimate > .el-tree-node__content {
  color: red;
}

.el-tree-node.is-expanded.is-penultimate > .el-tree-node__children {
  display: flex;
  flex-direction: row;
}
.is-penultimate > .el-tree-node__children > div {
  width: 25%;
}
</style>
