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
  <div>
    <code-diff
      :old-string="oldJSON"
      :new-string="newJSON"
      file-name="test.txt"
      :context="5"
      output-format="side-by-side"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { useFetch } from '@vueuse/core';
import { CodeDiff } from 'v-code-diff';

const { data: versionOptions } = useFetch(`/data/version/version.json`).json();

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
  urlRef.value = `/data/version/${name}.json5`;
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
.config-version-page .page > div {
  max-width: 90%;
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
