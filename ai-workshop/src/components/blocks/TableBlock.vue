<template>
  <table class="t" :style="style">
    <thead><tr><th v-for="h in headers" :key="h" v-html="h" /></tr></thead>
    <tbody><tr v-for="(row, i) in rows" :key="i"><td v-for="(cell, j) in row" :key="j" v-html="cell" /></tr></tbody>
  </table>
</template>
<script setup lang="ts">
defineProps<{ headers: string[]; rows: string[][]; style?: Record<string, string> }>()
</script>
