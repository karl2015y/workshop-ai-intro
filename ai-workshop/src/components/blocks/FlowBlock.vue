<template>
  <div class="flow">
    <template v-for="(item, i) in items" :key="i">
      <div class="fi" :class="{ highlight: item.highlight }" :style="item.color ? { background: item.color } : undefined">
        <strong v-html="item.text" />
      </div>
      <div v-if="i < items.length - 1" class="fa">→</div>
    </template>
  </div>
</template>
<script setup lang="ts">
import type { FlowItem } from '../../types/slides'
defineProps<{ items: FlowItem[] }>()
</script>
