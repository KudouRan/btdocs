---
lang: zh-CN
title: 阿里云函数 FC
description: 阿里云函数 FC
---

## 阿里云函数 FC 文档 <TestedVersion type="fc" />

[点击进入云函数控制台](https://fcnext.console.aliyun.com/cn-chengdu/services)

![services](/images/fc-services.png)

创建一个服务，日志可有可无，过程略

然后在服务下创建一个函数

### 基础配置

- 运行环境选择最新的 `Nodejs`（最低请选择 14）

![FC基础配置](/images/fc-base-config.png)

### 触发器配置

![fc-create-trigger](/images/fc-create-trigger.png)

### 高级配置

设置超时时间

![fc-timeout](/images/fc-timeout.png)

## 安装或更新

![fc-npm](/images/fc-npm.png)

云函数使用了镜像加速，但是镜像不是实时更新的，如果想要今天刚更新的模块，请设置源为默认。

```bash
npm config set registry https://registry.npmjs.org/
```

安装/更新依赖，都是同样的

```bash
yarn add @catlair/bilitools
```

可能因为 node 版本出现类似的错误

```bash
warning package.json: No license field
warning No license field
[1/4] Resolving packages...
[2/4] Fetching packages...
error responselike@3.0.0: The engine "node" is incompatible with this module. Expected version ">=14.16". Got "12.14.1"
error Found incompatible module.
info Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.
```

可以运行如下命令，忽略错误后安装/更新（因为安装和运行环境的版本不一样，所以不用担心）

```bash
yarn config set ignore-engines true
yarn add @catlair/bilitools
```

修改 index.js 的代码

```javascript
exports.handler = require('@catlair/bilitools').fc_handler();
```

最后参考图中位置，添加配置文件，再点击部署

<!-- ### 代码自动更新 -->

<!-- <ServerlessCommon/> -->

## 更新 Cookie

可能需要安装一个依赖

```bash
yarn add @catlair/blogin
```

然后执行如下命令

```bash
npx bilitools -l
```

再使用手机扫码，如果 mid 存在于配置文件中，会自动更新，否则获取到的 cookie 会打印到控制台，以及 log 文件，请自行复制到配置文件中。

## 随机时间运行（可选）

获取 ARM ID 和 KEY

[跳转到创建 RAM 子用户](https://ram.console.aliyun.com/users)

创建用户

![ali-create-user](/images/ali-create-user.png)

添加 FC 的权限，并在此复制 ID 和 KEY

![/images/ali-ram-new](/images/ali-ram-new.png)

![/images/ali-new-access](/images/ali-new-access.png)

将 `ALI_SECRET_ID` 和 `ALI_SECRET_KEY` 添加到云函数的配置中（[位置参考](#高级配置)）

![fc-ali-sercret](/images/fc-ali-secret.png)

## 视频参考

<BilibiliVideo bv="BV1VU4y1Q7zz"/>

## 配置文件

<ConfigPath />

## 自定义任务

讨论：<https://github.com/catlair/BiliOutils/issues/90#issuecomment-1190976142>

将触发器附加内容设置为：

```json5
{ task: 'xxxx,yyyy,zzzz' }
```

`任务 1,任务 2,任务 3`，部分任务需要前置 `loginTask`
