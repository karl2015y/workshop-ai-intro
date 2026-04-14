<template>
  <p :class="props.class" :style="props.style" v-html="props.html" />
</template>
<script setup lang="ts">
const props = defineProps<{ html: string; class?: string; style?: Record<string, string> }>()
</script>
