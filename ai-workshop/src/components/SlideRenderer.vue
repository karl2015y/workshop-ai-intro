<template>
  <div class="slide" :class="[themeClass, transitionClass]">
    <div v-if="slide.moduleNumber" class="mcn">{{ slide.moduleNumber }}</div>
    <component
      v-for="(block, i) in slide.blocks"
      :key="i"
      :is="blockMap[block.type]"
      v-bind="block.props"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue'
import type { Slide, BlockType } from '../types/slides'

import TagBlock from './blocks/TagBlock.vue'
import HeadingBlock from './blocks/HeadingBlock.vue'
import ParagraphBlock from './blocks/ParagraphBlock.vue'
import GridBlock from './blocks/GridBlock.vue'
import TableBlock from './blocks/TableBlock.vue'
import CodeBlock from './blocks/CodeBlock.vue'
import ComparisonBlock from './blocks/ComparisonBlock.vue'
import RiceBlock from './blocks/RiceBlock.vue'
import StepsBlock from './blocks/StepsBlock.vue'
import QuoteBlock from './blocks/QuoteBlock.vue'
import PracticeBlock from './blocks/PracticeBlock.vue'
import FlowBlock from './blocks/FlowBlock.vue'
import HtmlBlock from './blocks/HtmlBlock.vue'
import ShowcaseBlock from './blocks/ShowcaseBlock.vue'

const props = defineProps<{
  slide: Slide
  transitionClass: Record<string, boolean>
}>()

const themeClass = computed(() => `s-${props.slide.theme}`)

const blockMap: Record<BlockType, Component> = {
  tag: TagBlock,
  heading: HeadingBlock,
  paragraph: ParagraphBlock,
  grid: GridBlock,
  table: TableBlock,
  code: CodeBlock,
  comparison: ComparisonBlock,
  rice: RiceBlock,
  steps: StepsBlock,
  quote: QuoteBlock,
  practice: PracticeBlock,
  flow: FlowBlock,
  html: HtmlBlock,
  showcase: ShowcaseBlock,
}
</script>
