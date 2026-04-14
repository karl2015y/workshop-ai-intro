<template>
  <div class="pb">
    <h4 v-html="title" />
    <div v-html="body" />
  </div>
</template>
<script setup lang="ts">
defineProps<{ title: string; body: string }>()
</script>
