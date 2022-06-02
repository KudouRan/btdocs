import { defineStore } from 'pinia';
import { useFetch } from '@vueuse/core';
import { ref } from 'vue';

export const useReleasesStore = defineStore('releases', () => {
  const tagName = ref('v0.5.0');

  useFetch<string>('https://btdocs.vercel.app/api/releases').then(
    ({ data }) => {
      console.log(data.value);
      console.log(typeof data.value);
      tagName.value = JSON.parse(data.value).data.tag_name || tagName.value;
    }
  );

  return { tagName };
});
