<template>
  <p>
    满足以下的目录结构的
    <code>{{ configName }}.json{5}</code>
    都是符合要求的配置文件路径。
  </p>
  <div class="language-bash ext-sh line-numbers-mode">
    <pre
      class="language-bash"
    ><code><span class="token builtin class-name">.</span>
├── config
│  ├── {{configName}}.json
│  └── {{configName}}.json5
└── src
   ├── {{configName}}
   │  ├── {{configName}}.json
   │  └── {{configName}}.json5
   ├── {{configName}}.json
   ├── {{configName}}.json5
   └── {{indexName}}.js
</code></pre>
    <div class="highlight-lines">
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div class="highlight-line">&nbsp;</div>
    </div>
    <div class="line-numbers" aria-hidden="true">
      <div class="line-number"></div>
      <div class="line-number"></div>
      <div class="line-number"></div>
      <div class="line-number"></div>
      <div class="line-number"></div>
      <div class="line-number"></div>
      <div class="line-number"></div>
      <div class="line-number"></div>
      <div class="line-number"></div>
      <div class="line-number"></div>
      <div class="line-number"></div>
    </div>
  </div>
  <div class="custom-container tip">
    <p class="custom-container-title">目录树</p>
    <p>或者这样更加生动</p>
    <el-tree :data="data" :props="defaultProps" />
  </div>
  <ul>
    <li>
      如果还不知道怎么配置，可以<a
        href="/config/#用户配置参考"
        rel="noopener noreferrer"
        >点击查看配置参考</a
      >
    </li>
    <li>
      你可以不用文件配置，而是使用环境变量
      <code v-pre>BILITOOLS_CONFIG</code>（同样的配置，但需要
      <a
        href="https://www.baidufe.com/fehelper/en-decode/"
        target="_blank"
        rel="noopener noreferrer"
        >gzip 压缩<ExternalLinkIcon /></a
      >）
    </li>
  </ul>
</template>

<script setup lang="ts">
const customNodeClass = (data, node) => {
  if (data.isPenultimate) {
    return 'is-penultimate';
  }
  return null;
};

const props = withDefaults(
  defineProps<{ configName: string; indexName: string }>(),
  {
    configName: 'config',
    indexName: 'index',
  }
);

const { configName, indexName } = props;

const defaultProps = {
  children: 'children',
  label: 'label',
  class: customNodeClass,
};

const data = [
  {
    label: 'config',
    children: [
      {
        label: `${configName}.json`,
      },
      {
        label: `${configName}.json5`,
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
            label: `${configName}.json`,
          },
          {
            label: `${configName}.json5`,
          },
        ],
      },
      {
        isPenultimate: true,
        label: `${indexName}.js`,
      },
      {
        label: `${configName}.json`,
      },
      {
        label: `${configName}.json5`,
      },
    ],
  },
];
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
