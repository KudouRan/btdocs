<template>
  <div>
    <p>
      最好也是最简单的支持就是为
      <a
        href="https://github.com/KudouRan/BiliOutils"
        target="_blank"
        rel="noopener noreferrer"
        >https://github.com/KudouRan/BiliOutils<ExternalLinkIcon
      /></a>
      点个 star，关注才能不迷路。非常感谢！
    </p>

    <p>当然你也可以请作者喝杯奶茶。</p>

    <p>
      也没人备注昵称啊，那就不弄了。<del>备注昵称，将出现在感谢列表中。</del>
    </p>

    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      @click="changeZZUrl(button)"
      >{{ button.text }}</el-button
    >

    <img :class="zzClass" :src="zzUrl" alt="zz_three" />

    <!-- <p>感谢：</p>
    <ul>
      <li>
        <span>匿名用户的冰可乐。</span>
      </li>
      <li>
        <span>Rie 的冰可乐。</span>
      </li>
      <li>
        <span>匿名用户的微信赞助。</span>
      </li>
    </ul> -->
    <!-- <el-divider border-style="dashed" /> -->
    <!-- <span>The language of eternal question.</span> -->
  </div>
</template>

<script setup lang="ts">
import zz_three from '@imgs/zz_three.png';
import zz_alipay from '@imgs/zz_alipay.png';
import zz_weixin from '@imgs/zz_weixin.png';
import zz_qq from '@imgs/zz_qq.png';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useReleasesStore } from '@stores/releases';

const { tagName, isRefreshed } = storeToRefs(useReleasesStore());

const zzUrls = {
  all: zz_three,
  alipay: zz_alipay,
  weixin: zz_weixin,
  qq: zz_qq,
};
const zzUrl = ref(zz_three);
const zzClass = ref('');

const buttons = [
  { type: 'primary', text: '全部', url: 'all' },
  { type: 'primary', text: '支付宝', url: 'alipay' },
  { type: 'primary', text: '微信', url: 'weixin' },
  { type: 'primary', text: 'QQ', url: 'qq' },
] as const;

function changeZZUrl(button) {
  zzUrl.value = zzUrls[button.url];
  if (button.url === 'all') {
    zzClass.value = '';
  } else {
    zzClass.value = 'zz';
  }
}
</script>

<style>
img.zz {
  display: block;
  width: 400px;
}
</style>
