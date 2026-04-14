import type { Slide } from '../types/slides'
import { introSlides } from './00-intro'
import { module1Slides } from './module1-prompt'
import { module2Slides } from './module2-image'
import { module3Slides } from './module3-slides'
import { module4Slides } from './module4-video'
import { module5Slides } from './module5-meeting'
import { closingSlides } from './closing'

export const slides: Slide[] = [
  ...introSlides,
  ...module1Slides,
  ...module2Slides,
  ...module3Slides,
  ...module4Slides,
  ...module5Slides,
  ...closingSlides,
]
