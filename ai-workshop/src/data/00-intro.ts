import type { Slide } from '../types/slides'

export const introSlides: Slide[] = [
  // 0: Cover
  {
    theme: 'cover',
    blocks: [
      { type: 'paragraph', props: { html: 'WORKSHOP', style: { fontSize: '18px', letterSpacing: '3px', opacity: '0.5', marginBottom: '20px' } } },
      { type: 'heading', props: { level: 1, text: 'AI 教你賣', style: { fontSize: '72px' } } },
      { type: 'paragraph', props: { html: '讓 AI 處理行政，你專心做生意', class: 'sub', style: { marginTop: '12px' } } },
      { type: 'html', props: { content: '<div style="margin-top:48px;display:flex;gap:32px;opacity:.5;font-size:16px;"><span>3 小時實戰工作坊</span><span>|</span><span>商會專屬版</span></div>' } },
    ],
  },
  // 1: Agenda
  {
    theme: 'dark',
    blocks: [
      { type: 'heading', props: { level: 2, text: '今天你會帶走什麼？' } },
      { type: 'paragraph', props: { html: '用你自己的產品，三小時做出一整套行銷物料', class: 'sub', style: { marginBottom: '24px' } } },
      { type: 'table', props: {
        headers: ['時間', '內容', '你的產出'],
        rows: [
          ['60 min', 'Prompt 心法 + 文字生成', 'LINE 開發訊息 + 回覆訊息'],
          ['25 min', '圖片生成', '產品社群宣傳圖'],
          ['25 min', '簡報生成', '客戶提案簡報'],
          ['10 min', '<span style="opacity:.5;">☕ 休息</span>', ''],
          ['20 min', '影片生成', '產品短片腳本'],
          ['20 min', '會議記錄生成', '會議紀錄 + LINE 跟進訊息'],
          ['20 min', '總整理 + Q&A', '工具對照表 + 行動計畫'],
        ],
      }},
    ],
  },
  // 2: Prep
  {
    theme: 'light',
    blocks: [
      { type: 'heading', props: { level: 2, text: '課前準備' } },
      { type: 'paragraph', props: { html: '等等每個練習都會用到，先想好：', style: { marginBottom: '20px', opacity: '0.6' } } },
      { type: 'grid', props: {
        cards: [
          { title: '我的產品 / 服務是？', body: '<p style="opacity:.5;">例：餐廳食材配送、企業訓練課程、手工皂...</p>' },
          { title: '我的目標客戶是？', body: '<p style="opacity:.5;">例：中型餐廳老闆、人資主管、注重天然的媽媽...</p>' },
          { title: '客戶最常遇到的問題？', body: '<p style="opacity:.5;">例：供應商品質不穩定、找不到好講師、皮膚敏感...</p>' },
          { title: '我的產品如何解決？', body: '<p style="opacity:.5;">例：隔日到貨品質保證、客製化課程、天然有機成分...</p>' },
        ],
      }},
    ],
  },
]
