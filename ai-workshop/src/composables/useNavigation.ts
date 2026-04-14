import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useNavigation(totalSlides: number) {
  const current = ref(0)
  const direction = ref<'next' | 'prev'>('next')

  const progressWidth = computed(() => `${((current.value + 1) / totalSlides) * 100}%`)

  const slideClass = (index: number) => ({
    active: current.value === index,
    exit: direction.value === 'next' ? current.value > index : current.value < index,
  })

  const next = () => {
    if (current.value < totalSlides - 1) {
      direction.value = 'next'
      current.value++
    }
  }

  const prev = () => {
    if (current.value > 0) {
      direction.value = 'prev'
      current.value--
    }
  }

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      next()
    } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
      e.preventDefault()
      prev()
    } else if (e.key === 'Home') {
      direction.value = 'prev'
      current.value = 0
    } else if (e.key === 'End') {
      direction.value = 'next'
      current.value = totalSlides - 1
    }
  }

  let touchStartX = 0
  const handleTouchStart = (e: TouchEvent) => { touchStartX = e.touches[0].clientX }
  const handleTouchEnd = (e: TouchEvent) => {
    const diff = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev() }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKey)
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKey)
    window.removeEventListener('touchstart', handleTouchStart)
    window.removeEventListener('touchend', handleTouchEnd)
  })

  return { current, progressWidth, slideClass }
}
