<template>
  <el-drawer v-model="drawer" size="100%" title="输入你的配置" direction="ttb">
    <div>
      <el-input
        v-model="textarea"
        :rows="2"
        :autosize="{ minRows: 2 }"
        type="textarea"
        placeholder="简单测试一下，不搞那么复杂了"
      />
      <div style="margin-top: 10px">
        <el-button @click="drawer = false">取消</el-button>
        <el-button type="primary" @click="clickInputJSON">确定</el-button>
      </div>
    </div>
  </el-drawer>
  <div style="display: flex; flex-direction: column">
    <div style="display: flex">
      <div class="example-block">
        <span class="example-demonstration">比较版本：</span>
        <el-cascader
          placeholder="选择版本"
          v-model="oldValue"
          :options="versionOptions"
          filterable
        />
      </div>
      <div class="example-block">
        <span class="example-demonstration">当前版本：</span>
        <el-cascader
          placeholder="选择版本"
          v-model="newValue"
          :options="versionOptions"
          filterable
        />
      </div>
    </div>
  </div>
  <div class="change-format">
    <div>
      <el-button size="small" @click="drawer = true"> 输入内容对比 </el-button>
      <a :href="newUrl" style="margin-left: 0.4em"
        ><el-button size="small"> 下载当前选择版本 </el-button></a
      >
    </div>
    <el-radio-group v-model="outputFormatRadio" size="small">
      <el-radio-button label="Split" name="outputFormat" />
      <el-radio-button label="Unified" />
    </el-radio-group>
  </div>
  <div>
    <code-diff
      :old-string="oldJSON"
      :new-string="newJSON"
      file-name="test.txt"
      :context="5"
      :output-format="outputFormat"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useFetch, useLocalStorage } from '@vueuse/core';
import { CodeDiff } from 'v-code-diff';

const drawer = ref(false),
  textarea = ref('');

// const outputFormatRadio = ref('Split');
const outputFormatRadio = useLocalStorage('outputFormatRadio', 'Split');

// 当 outputFormatRadio 为 Split 时 outputFormat 为 side-by-side，反之 line-by-line
const outputFormat = computed(() =>
  outputFormatRadio.value === 'Split' ? 'side-by-side' : 'line-by-line'
);

const baseURL = ref(''),
  versionUrl = ref();

onMounted(() => {
  // 处理baseURL
  if (window.location.hostname === 'localhost') {
    baseURL.value = '';
  } else {
    baseURL.value = location.href?.includes('BiliOutils') ? '/BiliOutils' : '';
  }
  versionUrl.value = `${baseURL.value}/data/version/version.json`;
  // 小屏幕时强制为 line-by-line
  if (window.innerWidth < 768) {
    outputFormatRadio.value = 'Unified';
  }
});

const { data: versionOptions } = useFetch(versionUrl).json();

const newValue = ref(),
  oldValue = ref(),
  newUrl = ref(),
  oldUrl = ref();

const { data: newJSON } = useFetch(newUrl, {
  refetch: true,
  beforeFetch: cancelEmptyFetch,
});
const { data: oldJSON } = useFetch(oldUrl, {
  refetch: true,
  beforeFetch: cancelEmptyFetch,
});

watch(versionOptions, () => {
  updateValue(newValue, 'new');
  updateValue(oldValue, 'old');
});
watch(newValue, () => {
  updateUrl(newUrl, newValue);
  // 切换到预览时自动切换最新
  if (Array.isArray(newValue.value) && newValue.value[1] === 'all_all') {
    updateValue(oldValue, 'new');
  }
});
watch(oldValue, () => updateUrl(oldUrl, oldValue));

function updateUrl(urlRef, valueRef) {
  const name = Array.isArray(valueRef.value)
    ? valueRef.value[1]
    : valueRef.value;
  urlRef.value = `${baseURL.value}/data/version/${name}.json5`;
}

function updateValue(value, type) {
  versionOptions.value.some((el) => {
    const active = el.children.find((el) => el.isActive === type);
    if (active) {
      value.value = active.value;
      return true;
    }
  });
}

function cancelEmptyFetch({ url, cancel }) {
  url || cancel();
}

function clickInputJSON() {
  oldJSON.value = textarea.value;
  drawer.value = false;
}
</script>

<style lang="scss">
@media screen and (max-width: 768px) {
  .config-version-page {
    .theme-default-content {
      padding: 0;
    }

    .change-format {
      padding: 0 1em;
    }

    .d2h-code-linenumber {
      width: 5em;
    }

    .d2h-code-line {
      padding-left: 5.5em;
    }

    .line-num1 {
      text-align: left;
    }
  }
}

.change-format {
  margin: -0.5em 0 5px;
  display: flex;
  justify-content: space-between;
}

*,
::after,
::before {
  box-sizing: border-box;
}
.config-version-page {
  .page > div {
    max-width: 100%;
    background: #fff;
    color: #2c3e50;
  }

  table {
    margin: 0 auto;
    display: table;
    border-collapse: collapse;
    box-sizing: border-box;
    text-indent: initial;
    border-spacing: 2px;
    border-color: grey;
  }

  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }

  th,
  td {
    box-sizing: border-box;
    padding: 1px;
    border: 1px solid #fff;

    &.d2h-cntx {
      border-right: 1px solid #eee;
    }
  }

  tr:nth-child(2n) {
    background-color: inherit;
  }
}
</style>

<style scoped>
.example-block {
  margin: 1rem;
}
.example-demonstration {
  margin: 1rem;
}
</style>
