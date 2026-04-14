<template>
  <span class="tag" :class="variant">{{ text }}</span>
</template>
<script setup lang="ts">
defineProps<{ text: string; variant: string }>()
</script>
