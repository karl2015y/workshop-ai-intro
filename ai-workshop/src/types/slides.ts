export type SlideTheme =
  | 'cover' | 'dark' | 'light'
  | 'm1' | 'm2' | 'm3' | 'm4' | 'm5'
  | 'break' | 'end'

export type BlockType =
  | 'tag' | 'heading' | 'paragraph'
  | 'grid' | 'table' | 'code'
  | 'comparison' | 'rice' | 'steps'
  | 'quote' | 'practice' | 'flow'
  | 'html' | 'showcase'

export interface Block {
  type: BlockType
  props: Record<string, unknown>
}

export interface Slide {
  theme: SlideTheme
  blocks: Block[]
  moduleNumber?: string
}

export interface TagProps { text: string; variant: string }
export interface HeadingProps { level: 1 | 2 | 3; text: string; style?: Record<string, string> }
export interface ParagraphProps { html: string; class?: string; style?: Record<string, string> }
export interface CardData { title?: string; titleColor?: string; body: string; url?: string }
export interface GridProps { cards: CardData[] }
export interface TableProps { headers: string[]; rows: string[][]; style?: Record<string, string> }
export interface CodeProps { content: string; style?: Record<string, string> }
export interface ComparisonSide { label: string; body: string }
export interface ComparisonProps { bad: ComparisonSide; good: ComparisonSide }
export interface RiceItem { letter: string; color: string; word: string; body: string }
export interface RiceProps { items: RiceItem[] }
export interface StepItem { number: number; title: string; desc: string }
export interface StepsProps { items: StepItem[]; color?: string; direction?: 'horizontal' | 'vertical'; arrows?: boolean }
export interface QuoteProps { html: string; style?: Record<string, string> }
export interface PracticeProps { title: string; body: string }
export interface FlowItem { text: string; highlight?: boolean; color?: string }
export interface FlowProps { items: FlowItem[] }
export interface HtmlProps { content: string }
export interface ShowcaseProps { title: string; images: string[]; prompt: string; video: string }
