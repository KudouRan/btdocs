<template>
  <Badge :type="badgeType" :text="testedVersion" vertical="top" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useReleasesStore } from '@stores/releases';

const { isRefreshed, tagName } = storeToRefs(useReleasesStore());

const badgeType = ref('warning');

const props = defineProps<{
  type: keyof typeof testedMap;
}>();

const testedMap = {
  scf: '0.5.0',
  fc: '0.5.0',
  cfc: '0.4.0',
  agc: '0.4.0',
  fg: '0.4.0',
  npm: '0.5.0',
  docker: '0.5.0',
  ql: '0.5.0',
  action: '',
  'local-index': '0.4.0',
};

const testedVeriosn = testedMap[props.type];
const testedVersion = testedVeriosn ? `已测试v${testedVeriosn}` : '未测试';
badgeType.value = getBadgeType();
onMounted(() => {
  if (isRefreshed.value) {
    badgeType.value = getBadgeType();
  }
});

function getVerDiff(nowVersion: string[], testedVeriosn: string[]) {
  const verDiff: string[] = [];
  if (nowVersion[0] !== testedVeriosn[0]) {
    return verDiff;
  }
  verDiff.push('major');
  if (nowVersion[1] !== testedVeriosn[1]) {
    return verDiff;
  }
  verDiff.push('minor');
  if (nowVersion[2] !== testedVeriosn[2]) {
    return verDiff;
  }
  verDiff.push('patch');
  return verDiff;
}

function getBadgeType() {
  const nowVersionList = tagName.value.substring(1).split('.');
  const testedVeriosnList = testedVeriosn.split('.');
  // 比对版本
  const verDiff = getVerDiff(nowVersionList, testedVeriosnList);

  if (verDiff.length === 3) {
    return 'tip';
  }
  if (verDiff.length === 2) {
    return 'warning';
  }
  return 'danger';
}
</script>

<style lang="scss" scoped></style>
