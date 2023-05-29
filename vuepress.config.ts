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
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { pwaPlugin } from '@vuepress/plugin-pwa';
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup';

const isProd = process.env.NODE_ENV === 'production';
const basePath = process.env.BASE_PATH as '/';

export default defineUserConfig({
  lang: 'zh-CN',
  base: isProd ? basePath : '/',
  title: 'BiliOutils 使用说明',
  description: '这是 BiliOutils 使用说明文档站点',
  theme: defaultTheme({
    editLink: true,
    repo: 'catlair/BiliOutils',
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    backToHome: '返回首页',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    openInNewWindow: '在新窗口打开',
    toggleSidebar: '切换侧边栏',
    toggleColorMode: '切换主题',
    notFound: ['抱歉，您要查找的页面不存在。'],
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
            link: 'https://github.com/catlair/BiliOutils',
            target: '_blank',
          },
          {
            text: 'Gitee（国内）',
            link: 'https://gitee.com/catlair/BiliOutils',
            target: '_blank',
          },
          {
            text: 'Dockerhub',
            link: 'https://hub.docker.com/repository/docker/catlair/bilitools',
            target: '_blank',
          },
          {
            text: 'npm package',
            link: 'https://www.npmjs.com/package/@catlair/bilioutils',
            target: '_blank',
          },
        ],
      },
      {
        text: '工具',
        children: [
          {
            text: 'JSON5 校验',
            link: 'https://verytoolz.com/json5-validator.html',
            target: '_blank',
          },
          {
            text: 'Cookie 校验和编码',
            link: '/config/encode_cookie/',
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
          {
            text: '获取安卓 APK 登录',
            link: 'https://github.com/catlair/blogin/',
            target: '_blank',
          },
          {
            text: '简易 CORN 定时任务工具',
            link: 'https://github.com/catlair/cron/',
            target: '_blank',
          },
        ],
      },
      {
        text: '关于和反馈',
        children: [
          {
            text: 'Github',
            link: 'https://github.com/catlair/BiliOutils/issues',
            target: '_blank',
          },
          {
            text: 'Gitee（国内）',
            link: 'https://gitee.com/catlair/BiliOutils/issues',
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
            '/guide/qa.md',
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
            '/guide/update.md',
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
            '/config/func.md',
            '/config/message.md',
            '/config/logger.md',
            '/config/github_secrets.md',
            '/config/env.md',
            '/config/version.md',
          ],
        },
      ],
      '/pro/': [
        {
          text: '使用',
          children: [
            '/pro/README.md',
            '/pro/liveWeekTask.md',
            '/pro/watchLink.md',
          ],
        },
      ],
    },
  }),
  plugins: [
    copyCodePlugin({}),
    // @ts-ignore
    docsearchPlugin({
      appId: '4HX8QKEWIN',
      apiKey: '753d7939116dbb6824909b0b0345864b',
      indexName: 'btvercel',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索...',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: vuepressPath.resolve(
        __dirname,
        './docs/.vuepress/components'
      ),
    }),
    googleAnalyticsPlugin({
      id: 'G-B2XSE83VR6',
    }),
    // @ts-ignore
    pwaPlugin({}),
    // @ts-ignore
    pwaPopupPlugin({
      locales: {
        '/': {
          message: '发现有更新',
          buttonText: '刷新',
        },
      },
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
        noExternal: ['element-plus', 'v-code-diff', 'diff2html'],
      },
    },
    vuePluginOptions: {},
  }),
  alias: {
    '@imgs': path.resolve(__dirname, './docs/.vuepress/public/images'),
    '@stores': path.resolve(__dirname, './docs/.vuepress/stores'),
    '@utils': path.resolve(__dirname, './docs/.vuepress/utils'),
  },
  define: {
    __GLOBAL_GHPROXY__: 'ghproxy.com',
  },
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
});
