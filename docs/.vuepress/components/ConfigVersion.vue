<template>
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
  <div style="margin-bottom: 5px; position: relative">
    <el-radio-group
      v-model="outputFormatRadio"
      size="small"
      style="position: absolute; bottom: 0; right: 0"
    >
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
import { useFetch } from '@vueuse/core';
import { CodeDiff } from 'v-code-diff';

const outputFormatRadio = ref('Split');
// 当 outputFormatRadio 为 Split 时 outputFormat 为 side-by-side，反之 line-by-line
const outputFormat = computed(() =>
  outputFormatRadio.value === 'Split' ? 'side-by-side' : 'line-by-line'
);

const baseURL = ref(),
  versionUrl = ref();

// 处理baseURL
onMounted(() => {
  if (window.location.hostname === 'localhost') {
    baseURL.value = '';
  } else {
    baseURL.value = location.href?.includes('vercel') ? '' : '/BiliOutils';
  }
  versionUrl.value = `${baseURL.value}/data/version/version.json`;
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
watch(newValue, () => updateUrl(newUrl, newValue));
watch(oldValue, () => updateUrl(oldUrl, oldValue));

function updateUrl(urlRef, valueRef) {
  const name = Array.isArray(valueRef.value)
    ? valueRef.value[1]
    : valueRef.value;
  urlRef.value = `${baseURL.value}/data/version/${name}.json5`;
}

function updateValue(value, type) {
  value.value = versionOptions.value[0].children.find(
    (el) => el.isActive === type
  ).value;
}

function cancelEmptyFetch({ url, cancel }) {
  url || cancel();
}
</script>

<style lang="scss">
*,
::after,
::before {
  box-sizing: border-box;
}
.config-version-page {
  .page > div {
    max-width: 100%;
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
