import { defineStore } from 'pinia';
import { useFetch } from '@vueuse/core';
import { ref } from 'vue';

export const useReleasesStore = defineStore('releases', () => {
  const tagName = ref('v0.5.7');
  const isRefreshed = ref(false);

  useFetch<string>('https://btdocs.vercel.app/api/releases').then(
    ({ data }) => {
      tagName.value =
        JSON.parse(data.value as any).data.tag_name || tagName.value;
      isRefreshed.value = true;
    }
  );

  return { tagName, isRefreshed };
});
