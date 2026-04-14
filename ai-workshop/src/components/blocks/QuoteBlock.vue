<template>
  <div class="qb" :style="style" v-html="html" />
</template>
<script setup lang="ts">
defineProps<{ html: string; style?: Record<string, string> }>()
</script>
