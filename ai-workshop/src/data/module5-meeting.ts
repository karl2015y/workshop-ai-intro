import type { Slide } from '../types/slides'

export const module5Slides: Slide[] = [
  // M5 Cover
  {
    theme: 'm5',
    moduleNumber: '05',
    blocks: [
      { type: 'paragraph', props: { html: 'MODULE 5', style: { fontSize: '18px', letterSpacing: '3px', opacity: '0.6' } } },
      { type: 'heading', props: { level: 1, text: '會議記錄' } },
      { type: 'paragraph', props: { html: '開完會5分鐘搞定紀錄+跟進訊息', class: 'sub' } },
    ],
  },
  // Meeting Pain + Flow
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Module 5 — 會議記錄', variant: 't5' } },
      { type: 'heading', props: { level: 2, text: '你開完客戶會議後...' } },
      { type: 'comparison', props: {
        bad: { label: '😫 現在的做法', body: '<p>憑記憶整理→漏東漏西</p><p>拖到隔天→細節忘了</p><p>客戶等follow-up→你還在整理</p>' },
        good: { label: '✨ 新做法', body: '<p>開會時按錄音</p><p>手機自動轉文字</p><p>貼進AI→5分鐘產出紀錄+跟進訊息</p>' },
      }},
      { type: 'flow', props: {
        items: [
          { text: '按錄音' },
          { text: '自動轉文字' },
          { text: '貼進AI整理' },
          { text: '5分鐘LINE跟進', highlight: true },
        ],
      }},
    ],
  },
  // Meeting Template
  {
    theme: 'dark',
    blocks: [
      { type: 'tag', props: { text: 'Module 5 — 會議記錄', variant: 't5' } },
      { type: 'heading', props: { level: 3, text: 'Prompt模板：客戶會議紀錄' } },
      { type: 'code', props: {
        content: `你是一位專業的業務助理，擅長整理會議紀錄。請根據以下逐字稿，產出結構化的會議紀錄：

<span class="gn">1.</span> 會議基本資訊（日期/客戶名稱/與會人員）
<span class="gn">2.</span> 客戶需求摘要（條列式）
<span class="gn">3.</span> 客戶的疑慮或待回覆問題
<span class="gn">4.</span> 我方承諾事項
<span class="gn">5.</span> 後續待辦（表格）
<span class="gn">6.</span> 建議的LINE跟進訊息草稿（150字以內）

逐字稿如下：<span class="hl">[貼上逐字稿]</span>`,
        style: { fontSize: '15px' },
      }},
      { type: 'paragraph', props: { html: '🔑 殺手功能：第6項直接產出follow-up訊息！', style: { marginTop: '16px', fontSize: '17px' } } },
    ],
  },
  // Practice 6
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Module 5 — 實作時間', variant: 't5' } },
      { type: 'heading', props: { level: 2, text: '✏️ 練習6：整理模擬客戶會議' } },
      { type: 'quote', props: {
        html: '「王老闆你好，上次在商會碰到你有提到餐廳食材品質不太穩定？」<br>「對，供應商有時菜不新鮮，客人有反應過，但換供應商又怕麻煩。」<br>「你可以先小量試試，不滿意免費換，我們隔日到貨。」<br>「隔日就到？不錯。那價格呢？」<br>「我寄報價單給你，滿三千免運，量大可以再談。」<br>「好，先寄報價單，我跟太太商量。對了，你們有做海鮮嗎？」<br>「有，海鮮是強項，一起放在報價單裡，今天下班前LINE你。」',
        style: { fontSize: '17px' },
      }},
      { type: 'paragraph', props: { html: '把逐字稿 + Prompt模板貼進 ChatGPT / Gemini', style: { marginTop: '16px', fontSize: '18px' } } },
    ],
  },
]
