<template>
  <div class="code" :style="style" v-html="content" />
</template>
<script setup lang="ts">
defineProps<{ content: string; style?: Record<string, string> }>()
</script>
