<template>
  <div class="progress-bar" :style="{ width: progressWidth }" />
  <SlideRenderer
    v-for="(slide, i) in slides"
    :key="i"
    :slide="slide"
    :transition-class="slideClass(i)"
  />
  <img
    class="brand-mark"
    :class="{ dt: isLight }"
    src="/bgmotion-logo.svg"
    alt="背景模式 BG Motion"
  />
  <div class="slide-counter" :class="{ dt: isLight }">{{ current + 1 }} / {{ slides.length }}</div>
  <div class="nav-hints" :class="{ dt: isLight }"><kbd>&larr;</kbd> <kbd>&rarr;</kbd> 或 <kbd>空白鍵</kbd> 切換</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SlideRenderer from './components/SlideRenderer.vue'
import { useNavigation } from './composables/useNavigation'
import { slides } from './data'

const { current, progressWidth, slideClass } = useNavigation(slides.length)
const isLight = computed(() => slides[current.value].theme === 'light')
</script>
