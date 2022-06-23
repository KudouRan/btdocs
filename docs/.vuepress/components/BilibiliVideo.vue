<template>
  <div>
    <iframe
      class="bilibili-video"
      :src="url"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allowfullscreen="true"
    >
    </iframe>
  </div>
</template>

<script setup lang="ts">
// 获取 props 参数
const props = defineProps<{
  bv: string;
  page?: string | number;
}>();
const url = `//player.bilibili.com/player.html?bvid=${props.bv}&page=${
  props.page || 1
}`;
</script>

<style scoped>
.bilibili-video {
  width: 100%;
  height: 500px;
  max-width: 100%;
  align: center;
  padding: 20px 0;
}
</style>
