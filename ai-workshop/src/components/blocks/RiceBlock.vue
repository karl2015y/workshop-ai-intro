<template>
  <div class="rice">
    <div v-for="(item, i) in items" :key="i" class="rc">
      <div class="rc-l" :style="{ color: item.color }">{{ item.letter }}</div>
      <div class="rc-w">{{ item.word }}</div>
      <p v-html="item.body" />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { RiceItem } from '../../types/slides'
defineProps<{ items: RiceItem[] }>()
</script>
