<template>
  <div class="showcase">
    <h4 v-html="title" />
    <div class="sc-body">
      <div class="sc-left">
        <p class="sc-label">上傳素材</p>
        <div class="sc-imgs">
          <img v-for="(src, i) in images" :key="i" :src="src" />
        </div>
        <p class="sc-label" style="margin-top:12px;">提示詞</p>
        <div class="sc-prompt">{{ prompt }}</div>
      </div>
      <div class="sc-right">
        <p class="sc-label">成品</p>
        <video :src="video" controls playsinline muted loop />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ title: string; images: string[]; prompt: string; video: string }>()
</script>
