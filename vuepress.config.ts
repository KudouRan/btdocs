import { defineUserConfig, defaultTheme } from 'vuepress';
import { copyCodePlugin } from 'vuepress-plugin-copy-code2';

const isProd = process.env.NODE_ENV === 'production';

export default defineUserConfig({
  lang: 'zh-CN',
  base: isProd ? '/BiliTools/' : '/',
  title: '你好， BiliTools ！',
  description: '这是 BiliTools 文档站点',
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '配置',
        link: '/config/',
      },
      {
        text: 'Github',
        link: 'https://github.com/catlair/BiliTools',
        target: '_blank',
      },
      {
        text: 'Gitee',
        link: 'https://gitee.com/catlair/BiliTools',
        target: '_blank',
      },
      {
        text: '反馈问题',
        link: 'https://gitee.com/catlair/BiliTools/issues',
        target: '_blank',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            '/guide/README.md',
            '/guide/local.md',
            '/guide/server.md',
            '/guide/qinglong.md',
            '/guide/docker.md',
            '/guide/tencent_scf.md',
            '/guide/ali_fc.md',
            '/guide/baidu_cfc.md',
            '/guide/huawei_agc.md',
            '/guide/huawei_fg.md',
            '/guide/github_action.md',
            '/guide/action_scf.md',
            '/guide/video.md',
          ],
        },
      ],
      '/config/': [
        {
          text: '配置',
          children: [
            '/config/README.md',
            '/config/get_value.md',
            '/config/account.md',
            '/config/functions.md',
            '/config/message.md',
            '/config/github_secrets.md',
            '/config/env.md',
          ],
        },
      ],
    },
  }),
  plugins: [copyCodePlugin({})],
});
