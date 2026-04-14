<template>
  <div class="steps" :class="{ vertical: direction === 'vertical' }">
    <div v-for="(s, i) in items" :key="i" class="step" :class="{ inline: direction === 'vertical' }">
      <div class="sn" :style="color ? { background: color } : undefined">{{ s.number }}</div>
      <h4 v-html="s.title" />
      <p v-html="s.desc" />
      <div v-if="arrows && i < items.length - 1" class="sa">→</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { StepItem } from '../../types/slides'
defineProps<{ items: StepItem[]; color?: string; direction?: string; arrows?: boolean }>()
</script>
