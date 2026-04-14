<template>
  <component :is="'h' + level" :style="style" v-html="text" />
</template>
<script setup lang="ts">
defineProps<{ level: 1 | 2 | 3; text: string; style?: Record<string, string> }>()
</script>
