<template>
  <div class="c-2980b9">
    设置环境变量<code>USE_NETWORK_CODE</code>为任意值即可，如果成功，你能在运行日志中看到"请求网络代码"。<span
      class="c-8e44ad"
      >（主要用于避免修复小bug后需要手动拉取代码）</span
    >
  </div>
  注意：第三方依赖不包含在代码中，所以代码会从<code>0.0.1</code>至<code>0.0.2</code>但是不会请求<code>0.1.0</code>，此时仍然需要手动更新代码。
</template>

<script setup lang="ts"></script>

<style>
.c-2980b9 {
  color: #2980b9;
}
.c-8e44ad {
  color: #8e44ad;
}
</style>
