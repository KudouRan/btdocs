import { defineUserConfig, defaultTheme } from 'vuepress';
import { copyCodePlugin } from 'vuepress-plugin-copy-code2';
import { viteBundler } from '@vuepress/bundler-vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import * as path from 'path';
import { path as vuepressPath } from '@vuepress/utils';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';

const isProd = process.env.NODE_ENV === 'production';
const basePath = process.env.BASE_PATH as '/' | `/${string}/`;

export default defineUserConfig({
  lang: 'zh-CN',
  base: isProd ? basePath : '/',
  title: '你好， BiliTools ！',
  description: '这是 BiliTools 文档站点',
  theme: defaultTheme({
    editLink: true,
    repo: 'kudouran/btdocs',
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
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
        text: '仓库',
        children: [
          {
            text: 'Github',
            link: 'https://github.com/catlair/BiliTools',
            target: '_blank',
          },
          {
            text: 'Gitee（国内）',
            link: 'https://gitee.com/catlair/BiliTools',
            target: '_blank',
          },
          {
            text: 'Dockerhub',
            link: 'https://hub.docker.com/repository/docker/catlair/bilitools',
            target: '_blank',
          },
          {
            text: 'npm package',
            link: 'https://www.npmjs.com/package/@catlair/bilitools',
            target: '_blank',
          },
        ],
      },
      {
        text: '工具',
        children: [
          {
            text: 'JSON5 校验',
            link: 'https://www.lddgo.net/string/json5',
            target: '_blank',
          },
          {
            text: 'Gzip 压缩',
            link: 'https://www.baidufe.com/fehelper/en-decode/',
            target: '_blank',
          },
          {
            text: 'CORN 在线工具',
            link: 'http://cron.ciding.cc/',
            target: '_blank',
          },
        ],
      },
      {
        text: '问题反馈',
        children: [
          {
            text: 'Github',
            link: 'https://github.com/catlair/BiliTools/issues',
            target: '_blank',
          },
          {
            text: 'Gitee（国内）',
            link: 'https://gitee.com/catlair/BiliTools/issues',
            target: '_blank',
          },
          {
            text: 'QQ 群等其他方式',
            link: '/about/',
          },
        ],
      },
      {
        text: '官网指路',
        children: [
          {
            text: '阿里云函数 FC',
            link: 'https://www.aliyun.com/product/fc/',
            target: '_blank',
          },
          {
            text: '腾讯云函数 SCF',
            link: 'https://cloud.tencent.com/product/scf',
            target: '_blank',
          },
          {
            text: '百度云函数 CFC',
            link: 'https://cloud.baidu.com/product/cfc.html',
            target: '_blank',
          },
          {
            text: '华为 AppGallery Connect',
            link: 'https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/',
            target: '_blank',
          },
          {
            text: '华为 FunctionGraph',
            link: 'https://www.huaweicloud.com/product/functiongraph.html',
            target: '_blank',
          },
          {
            text: 'Github Actions',
            link: 'https://docs.github.com/cn/actions',
            target: '_blank',
          },
        ],
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
  plugins: [
    copyCodePlugin({}),
    registerComponentsPlugin({
      componentsDir: vuepressPath.resolve(
        __dirname,
        './docs/.vuepress/components'
      ),
    }),
    googleAnalyticsPlugin({
      id: 'G-B2XSE83VR6',
    }),
  ],
  bundler: viteBundler({
    viteOptions: {
      plugins: [
        AutoImport({
          resolvers: [ElementPlusResolver({ importStyle: 'css' })],
        }),
        Components({
          resolvers: [ElementPlusResolver({ importStyle: 'css' })],
        }),
      ],
      // @ts-ignore
      ssr: {
        noExternal: ['element-plus'],
      },
    },
    vuePluginOptions: {},
  }),
  alias: {
    '@imgs': path.resolve(__dirname, './docs/.vuepress/public/images'),
    '@stores': path.resolve(__dirname, './docs/.vuepress/stores'),
  },
  define: {
    __GLOBAL_GHPROXY__: 'ghproxy.com',
  },
});
