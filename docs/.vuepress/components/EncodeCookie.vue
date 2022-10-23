<template>
  <el-space>
    <el-input v-model="cookie" placeholder="请输入 Cookie"></el-input>
    <el-button @click="encodeCookieClick">点击编码</el-button>
  </el-space>

  <div style="margin-top: 1em" v-if="newCookie">
    Cookie是否满足脚本要求（bili_jct， SESSDATA， DedeUserID，长度大于90）：{{
      isOkCookie ? '是' : '否'
    }}
  </div>

  <div style="margin-top: 1em" v-if="newCookie">
    <code>{{ newCookie }}</code>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { encodeCookie, isBiliCookie } from '@utils/cookie';

const cookie = ref('');
const newCookie = ref('');
const isOkCookie = ref(false);

function encodeCookieClick() {
  newCookie.value = encodeCookie(cookie.value);
  isOkCookie.value = isBiliCookie(newCookie.value);
}
</script>
