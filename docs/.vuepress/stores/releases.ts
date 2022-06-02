import { defineStore } from 'pinia';
import { useFetch } from '@vueuse/core';
import { ref } from 'vue';

export const useReleasesStore = defineStore('releases', () => {
  const count = ref(0);
  const tagName = ref('v0.5.0');

  useFetch<string>('https://btdocs.vercel.app/api/releases').then(
    ({ data }) => {
      tagName.value = JSON.parse(data.value).tag_name || tagName.value;
    }
  );

  function increment() {
    count.value++;
  }

  return { count, tagName, increment };
});
