<template>
  <div class="grid">
    <div v-for="(card, i) in cards" :key="i" class="card">
      <h4 v-if="card.title" :style="card.titleColor ? { color: card.titleColor } : undefined" v-html="card.title" />
      <div v-html="card.body" />
      <p v-if="card.url" class="url"><a :href="'https://' + card.url" target="_blank" rel="noopener">點擊下載</a></p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { CardData } from '../../types/slides'
defineProps<{ cards: CardData[] }>()
</script>
