import { defineStore } from 'pinia';
import { useFetch } from '@vueuse/core';
import { ref } from 'vue';

export const useReleasesStore = defineStore('releases', () => {
  const tagName = ref('v0.6.221018');
  const isRefreshed = ref(false);

  useFetch<string>('/api/releases').then(({ data }) => {
    tagName.value =
      JSON.parse(data.value as any).data.tag_name || tagName.value;
    isRefreshed.value = true;
  });

  return { tagName, isRefreshed };
});
