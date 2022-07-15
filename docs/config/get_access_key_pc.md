# 通过浏览器 cookie 获取 access_key

## link.acg.tv 方法

缺点是无法获取 refresh_token，导致无法刷新 access_key。

### 自动操作

复制以下代码到控制台，然后就能自动获取 access_key 了。

```javascript
fetch(
  'https://passport.bilibili.com/login/app/third?appkey=27eb53fc9058f8c3&api=http://link.acg.tv/forum.php&sign=67ec798004373253d60114caaad89a8c',
  {
    credentials: 'include',
  }
)
  .then((res) => res.json())
  .then((body) => {
    const {
      data: { confirm_uri },
    } = body;
    if (!confirm_uri) {
      console.error(
        '%c不存在 confirm_uri，请检查登录状态',
        'background: red; color: #fff; font-size: 20px'
      );
      return;
    }
    window.open(confirm_uri);
    console.log(
      `%c如果没有自动打开新窗口，请复制后在浏览器打开（不要直接点击）`,
      'background: #00f; color: #fff; font-size: 20px'
    );
    console.log(
      `请复制后在浏览器打开（不要直接点击）%c${confirm_uri}`,
      'color: #000; font-size: 1.2em;'
    );
  })
  .catch((err) => console.error(err));
```

#### 图片示例

打开主站，打开控制台。

![ck2token_dev](/images/ck2token_dev.png)

获取值

![ck2token_copy](/images/ck2token_copy.png)

### 手动操作

直接访问链接 <https://passport.bilibili.com/login/app/third?appkey=27eb53fc9058f8c3&api=http://link.acg.tv/forum.php&sign=67ec798004373253d60114caaad89a8c>

访问返回的 confirm_uri 链接

![ck2token_cf](/images/ck2token_cf.png)

获取值

![ck2token_copy](/images/ck2token_copy.png)
