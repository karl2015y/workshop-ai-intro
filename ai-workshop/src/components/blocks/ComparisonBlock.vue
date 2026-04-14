<template>
  <div class="cmp">
    <div class="cmp-b"><div class="cmp-l" v-html="bad.label" /><div v-html="bad.body" /></div>
    <div class="cmp-g"><div class="cmp-l" v-html="good.label" /><div v-html="good.body" /></div>
  </div>
</template>
<script setup lang="ts">
import type { ComparisonSide } from '../../types/slides'
defineProps<{ bad: ComparisonSide; good: ComparisonSide }>()
</script>
