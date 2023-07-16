---
lang: zh-CN
title: 更新日志
description: 更新日志
---

## 历史配置对比

[历史配置对比](/config/version.md)

**v0.23.715**

<Badge type="warning" text="修复" vertical="middle" /> 直播心跳使用 uid 获取直播间号错误。
<Badge type="warning" text="修复" vertical="middle" /> 漫画每日阅读无法获取漫画列表。
<Badge type="danger" text="警告" vertical="middle" /> 漫画猜拳小游戏下线。

**v0.23.0118**

<Badge type="danger" text="警告" vertical="middle" /> 删除部分旧配置兼容。
<br/>
<Badge type="danger" text="警告" vertical="middle" /> 不再提供打包可执行文件。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 通过扫码获取 Cookie，二维码可打印到青龙日志，云函数控制台，本地控制台。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> Docker 可以传递参数。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 利用 vercel 检测是否更新，同时增加公告。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 增加开源声明打印。
<br/>
<Badge type="warning" text="修复" vertical="middle" /> 漫画阅读额外使用了非即将过期的漫读券。
<br/>
<Badge type="warning" text="修复" vertical="middle" /> 大积分任务未全部完成的情况下没有日志输出。

**221203**

<Badge type="danger" text="警告" vertical="middle" /> 删除大部分旧配置兼容。
<br/>
<Badge type="danger" text="警告" vertical="middle" /> 删除 serverless 部署工具。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> [manga.guess] 漫画每日猜拳（间隔太小会出现未知问题，故运行时长较长。收益存在随机性，也可能赔本，但基本上不存在赔本）。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 每月会员福利会领取 [漫画商城优惠]。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 多账户下风纪委员长期没案件会阻塞后期运行，现可以配置为异步执行。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 漫画券兑换配置更改，增加保留积分数、兑换数在原基础上增加自动数量。
<br/>
<Badge type="warning" text="修复" vertical="middle" /> 修复 dailyBattery 任务只部分完成的问题。
<br/>
<Badge type="warning" text="修复" vertical="middle" /> 粉丝亲密度 intimacy 错误的结束、错误的重试机制。
<br/>

::: details 优化
<Badge type="tip" text="优化" vertical="middle" /> 大积分每日 75 调整到 65（官方删除一个任务）。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 大积分视频观看：去掉自定义 epid（如有自定义需要可以提，没人需要就不加了）、默认西游记随机一集改为四大名著 5 个正剧中随机、完善接口数据，更加还原真实请求。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 漫画券兑换未到达 12 点时进行等待，超过 12:02 自动退出，故可提前启动。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 漫画阅读快速完成。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 当然还有每次更新的保留节目：日志调整。
:::

**221107：**

<Badge type="tip" text="新增" vertical="middle" /> 新增 dailyBattery 每日电池任务，发送 5 条弹幕获取 1 电池。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 新增多用户配置支持公共配置。
<br/>
<Badge type="warning" text="修复" vertical="middle" /> 【非云函数】，cookie 存在单引号时重新保存错误。
<br/>
<Badge type="warning" text="修复" vertical="middle" /> 【云函数】，阿里云内不打印错误日志。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 增加风纪任务的可配置项，参考观点时默认屏蔽 [放弃投票]。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 清除默认配置中过期的活动链接。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 【非云函数】，默认日志也会清空 15 日前的记录。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 漫画每日阅读无需额外配置，开启即可使用。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 优化自定义推送 API 的替换逻辑。

## 0.6.221014

<Badge type="warning" text="修复" vertical="middle" /> 【非云函数】，转盘抽奖错误的判断为今日已运行。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 为亲密度增加运行后检查运行情况，默认不开启，因为 b 站数据延迟可能会出现检查后从头运行。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 【仅云函数】，风纪委员在没有新案件需要休眠时，采用新建 Trigger 等待的方式（通过调用次数换取资源时间）。默认开启 [jury.newTrigger]。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 【非云函数】，避免出现某些人所说的莫名奇妙的 cookie 失效（当然只是尝试，本人并遇到过），配置 createCookieDay，运行通过当前 cookie 创建出新的 cookie，（非刷新，cookie 可以共存）。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 为亲密度减少某些情况下的 api 调用。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 漫画每日首次分享。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 【合作视频】精准匹配用户，视频上传者必须是目标用户。这是曾经有过的功能，后来因为逻辑的变动和 api 的更改就废弃了。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 获取指定类型稿件的方式由成功获取后进行判断，修改为只查找指定类型。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 稿件来源可自定优先顺序和去掉来源。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 多账号中错误的配置不再加载时直接跳过，改为运行时跳过。
<br/>

## 0.6.220930

<Badge type="tip" text="优化" vertical="middle" /> 增加消息推送仅错误时推送。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 未登录时打印 id，方便为多账号检查。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 删除风纪委员的 mode 配置，仅支持原 mode=1。
<br/>
<Badge type="warning" text="修复" vertical="middle" /> 更新依赖。
<br/>
<Badge type="warning" text="修复" vertical="middle" /> 漫画领取奖励出现赛季错误的问题。
<br/>
<Badge type="warning" text="修复" vertical="middle" /> 充电/兑换电池若干问题。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 去除投币功能部分废弃的配置。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 转盘抽奖的在线链接支持自定义/代理前缀。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 调整部分日志，增加错误标题。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 增加取关的配置。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 增加赠送直播间礼物 all 选项。
<br/>
<Badge type="warning" text="删除" vertical="middle" /> 去除自动更新。
<br/>

## 0.5.220823

<Badge type="tip" text="新增" vertical="middle" /> 取消 charging，使用 useCouponBp 替代，并增加 b 币兑换电池（群友需求）。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> mangaTask 增加漫画自动领取奖励（阅读奖励，签到奖励，不过前提是这些已经做过了），暂时不需要开启，也不能关闭。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> 转盘的爬虫增加追番选项，如有需要可以配置 [activityLottery.bangumi]，当然是否有用存在随机性。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> addCoins 投币不再是固定 1 颗。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> bigPoint 重试可配置等待时间。
<br/>
<Badge type="tip" text="新增" vertical="middle" /> npm 增加 --createCookie -cck 参数，可以使用 cookie 生成新 cookie，用处懂的都懂。
<br/>
<Badge type="warning" text="修复" vertical="middle" /> 某些情况下替换 cookie 导致配置文件格式错误（群友反馈）。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 完善 delay 参数。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 调整 matchGame 默认值（更加保守），防止有人不懂直接开启但不改配置，导致丢失大量硬币（冤大头群友）。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 部分情况的日志输出优化，增加中奖标题提示（例如：xxxxx-【转盘】）（Issue 92）。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> getPrivilege 的日志增加 73319 的解释（Issue 109）。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> 优化输出的版本。
<br/>
<Badge type="tip" text="优化" vertical="middle" /> tsconfig strictNullChecks 仅改变开发体验，增加稳定性，与程序最后运行结果无关。
<br/>

## 0.5.220801

- <Badge type="warning" text="修复" vertical="middle" /> 企业微信推送失败的问题。
- <Badge type="tip" text="新增" vertical="middle" /> 部分日志配置。
- <Badge type="tip" text="新增" vertical="middle" /> 部分限制解除。
- <Badge type="tip" text="新增" vertical="middle" /> 增加内置 cron，参数 cron，详见命令行参数。
- <Badge type="tip" text="新增" vertical="middle" /> 增加启动随机延迟 delay 参数，详见命令行参数或青龙面板。
- <Badge type="tip" text="优化" vertical="middle" /> 大积分观看视频间隔增加至 40s （如若不行，请自行增加，这是可配置的）。
- <Badge type="tip" text="优化" vertical="middle" /> 风纪委员中参考观点是否选择【不会观看】纳入选择时的权重计算。
- <Badge type="tip" text="优化" vertical="middle" /> 部分情况的日志输出优化。
- <Badge type="tip" text="优化" vertical="middle" /> 新增了转盘抽奖的列表管理方式。

链接跳转：

[转盘抽奖](../config/func.md#转盘抽奖)  
[风纪委员](../config/func.md#风纪委员)  
[大积分](../config/func.md#大积分)  
[解除限制](../config/account.md#解除限制)  
[日志](../config/logger.md)

## 0.5.220724

- <Badge type="warning" text="修复" vertical="middle" /> 通过压缩的代码出现了 gc 这样的全局变量/保留字，暂时不压缩。vm gz 包从 40 变为 60kb。
- <Badge type="warning" text="修复" vertical="middle" /> 观看和分享视频获取到 404。
- <Badge type="tip" text="新增" vertical="middle" /> exchangeCoupon 兑换漫读券（请用自己的方式定时到大约 12:00:02 左右）。
- <Badge type="tip" text="新增" vertical="middle" /> 增加 log 配置，暂时只开放了是否使用 Emoji，推送日志等级。
- <Badge type="tip" text="新增" vertical="middle" /> npm 全局命令增加 task 和 item 参数。
- <Badge type="tip" text="新增" vertical="middle" /> npm 青龙面板增加 task、item 和 config（自定义 config 路径） 参数。
- <Badge type="tip" text="新增" vertical="middle" /> 腾讯云函数/阿里云函数增加可配置附加信息 task。
- <Badge type="tip" text="新增" vertical="middle" /> 自动投喂可配置礼物。
- <Badge type="tip" text="优化" vertical="middle" /> bigPoint 观看视频增加间隔 20 s（可配置）。
- <Badge type="tip" text="优化" vertical="middle" /> judgement 休眠时间减少至 20 min （可配置）。
- <Badge type="tip" text="优化" vertical="middle" /> vm 增加运行 trycatch 失败后正常运行。

## 0.5.220716

- <Badge type="warning" text="修改" vertical="middle" /> b 站修改亲密度获取方式，liveIntimacy 方式发生改变。
- <Badge type="tip" text="优化" vertical="middle" /> bigPoint 增加重试、取消观看视频和自定义视频（正片，非 up 投稿）的配置。
- <Badge type="tip" text="优化" vertical="middle" /> judgement mode2。

liveIntimacy 的直播心跳可能需要消耗比实际需要时间长很多的时间，这是因为目前对**刚**获取到的亲密度判断不准确，甚至已经发送弹幕和点赞了，但是依然会通过直播心跳去获取这多出来的 200 亲密度，浪费 10 分钟，（虽然这部分是异步操作的，你的粉丝牌越多，浪费的时间越接近于 0）。

## 0.5.220711

- <Badge type="tip" text="新增" vertical="middle" /> 新增风纪委员，函数名 <code>judgement</code>。慎用，如有不良后果，概不负责。
- <Badge type="warning" text="修复" vertical="middle" /> Cookie URL 编码问题（部分接口对编码有要求），Cookie 格式兼容性问题（内容空格间隔，后置分号等）。
- <Badge type="warning" text="修复" vertical="middle" /> 投币时获取稿件出错的问题，以及部分用户关注列表稿件太少导致多次投币失败的问题。
- <Badge type="tip" text="优化" vertical="middle" /> SetCookie 获取。

风纪委员（迁移，测试中），来自 [dd178/BILI_judgement](https://github.com/dd178/BILI_judgement/blob/master/judgement.py)，hash：[b74ebc81fb47d98b7008ccd662ab0c5c9e94707c](https://github.com/dd178/BILI_judgement/commit/b74ebc81fb47d98b7008ccd662ab0c5c9e94707c)（我们不生产代码，我们只是代码的搬运工）

## 0.5.220628

- <Badge type="tip" text="新增" vertical="middle" />新增大会员领取大积分，函数名 <code>bigPoint</code>。故每日可领取签到 5/10、观看视频（ 20 x 2 ）、浏览界面（ 10 x 3 ），共计 75+ 积分。
