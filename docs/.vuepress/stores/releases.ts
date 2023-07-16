import { defineStore } from 'pinia';
import { useFetch } from '@vueuse/core';
import { ref } from 'vue';

export const useReleasesStore = defineStore('releases', () => {
  const tagName = ref(import.meta.env.VITE_TAG_NAME || '0.23.126');
  const isRefreshed = ref(true);

  useFetch<string>('https://registry.npmjs.org/bilioutils/latest').then(
    ({ data }) => {
      tagName.value =
        JSON.parse(data.value as any).data.version || tagName.value;
      isRefreshed.value = true;
    }
  );

  return { tagName, isRefreshed };
});
