import type { Slide } from '../types/slides'

export const module3Slides: Slide[] = [
  // 19: M3 Cover
  {
    theme: 'm3',
    moduleNumber: '03',
    blocks: [
      { type: 'paragraph', props: { html: 'MODULE 3', style: { fontSize: '18px', letterSpacing: '3px', opacity: '0.6' } } },
      { type: 'heading', props: { level: 1, text: '簡報生成' } },
      { type: 'paragraph', props: { html: '10 分鐘做完客戶提案簡報', class: 'sub' } },
    ],
  },
  // 20: Gamma Steps
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Module 3 — 簡報生成', variant: 't3' } },
      { type: 'heading', props: { level: 2, text: 'Gamma — 文字進去，簡報出來' } },
      { type: 'steps', props: {
        items: [
          { number: 1, title: '免費註冊', desc: 'gamma.app 免費註冊' },
          { number: 2, title: 'Paste in text', desc: '貼上 3-5 句話' },
          { number: 3, title: '選風格', desc: '商務 / 簡約 / 活潑' },
          { number: 4, title: '微調 + 匯出', desc: 'PDF / PPTX' },
        ],
        color: 'var(--m3)',
        direction: 'horizontal',
        arrows: true,
      }},
      { type: 'code', props: {
        content: `[公司名] 提供 [產品/服務]，專門服務 [目標客戶]。
客戶常遇到 [痛點]，我們的解決方案是 [方案]，
優勢在於 [1. xxx  2. xxx  3. xxx]。`,
        style: { fontSize: '15px', maxWidth: '900px' },
      }},
    ],
  },
  // 21: NotebookLM + Practice 4
  {
    theme: 'dark',
    blocks: [
      { type: 'tag', props: { text: 'Module 3 — 簡報生成', variant: 't3' } },
      { type: 'grid', props: {
        cards: [
          {
            title: '兩條路做簡報',
            body: '<p><strong>路線 A — Gamma</strong>（快速客製）</p><p style="opacity:.7;font-size:15px;margin-bottom:12px;">貼上文字 → 選風格 → 匯出</p><p><strong>路線 B — NotebookLM</strong>（精美風格）</p><p style="opacity:.7;font-size:15px;">上傳資料 → 點筆 → 詳細簡報 → 輸入風格指令</p><p style="margin-top:8px;font-size:14px;"><a href="https://notebooklm.google.com/notebook/da64855b-a01d-4291-ba95-679a5bc19402" target="_blank" rel="noopener" style="color:var(--m3);text-decoration:underline;">點擊看 NotebookLM 範例</a></p><p style="margin-top:8px;font-size:14px;font-style:italic;opacity:.7;">「深藍色+金屬金色，磨砂玻璃覆蓋層，現代感，4K」</p><p style="font-size:14px;font-style:italic;opacity:.7;">「深綠色黑板，白色粉筆手寫字，教育風」</p>',
          },
          {
            title: '練習 4',
            body: '<ul style="font-size:15px;"><li><strong>路線 A</strong> — 到 Gamma 貼上你的產品描述，生成一份提案簡報</li><li><strong>路線 B</strong> — 到 <a href="https://notebooklm.google.com/notebook/da64855b-a01d-4291-ba95-679a5bc19402" target="_blank" rel="noopener" style="color:var(--m3);text-decoration:underline;">NotebookLM 範例</a> 上傳資料，用風格 Prompt 生成簡報</li><li>選一條路，10 分鐘完成你的客戶提案簡報</li></ul>',
          },
        ],
      }},
    ],
  },
  // 22: NotebookLM Style Prompts
  {
    theme: 'dark',
    blocks: [
      { type: 'tag', props: { text: 'Module 3 — NotebookLM 簡報風格', variant: 't3' } },
      { type: 'heading', props: { level: 3, text: '五種風格 Prompt — 讓簡報不再無聊' } },
      { type: 'table', props: {
        headers: ['風格', '適合場景', 'Prompt 關鍵字'],
        rows: [
          ['<strong style="color:var(--info);">專業商務</strong>', '客戶提案', '深藍色+金屬金色，磨砂玻璃覆蓋層，幾何紋理，現代感，4K'],
          ['<strong style="color:var(--success);">黑板手寫</strong>', '教育訓練', '深綠色黑板，白/黃/粉色粉筆手寫字，擦拭痕跡，教室氛圍'],
          ['<strong style="color:var(--danger);">日式漫畫</strong>', '年輕受眾', '日本漫畫風，對話泡泡，動感線條，鮮豔色彩，連續故事'],
          ['<strong style="color:var(--warning);">黏土動畫</strong>', '親子 / 活潑', '黏土定格動畫風格，色彩豐富黏土材質，手捏黏土字體，可愛'],
          ['<strong style="color:var(--accent);">像素復古</strong>', '科技 / 遊戲', '8位元像素風，紅藍色方塊，遊戲關卡面板，金幣，懷舊'],
        ],
      }},
      { type: 'paragraph', props: { html: '在 NotebookLM 簡報生成的提示框中，貼上風格關鍵字 → 等 10 分鐘 → 完成！', style: { marginTop: '16px', fontSize: '16px', opacity: '0.7' } } },
    ],
  },
  // 23: Kortex extension
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Chrome 外掛 — 搭配簡報生成', variant: 'tp' } },
      { type: 'heading', props: { level: 2, text: 'Kortex — 任何網頁一鍵存入 NotebookLM' } },
      { type: 'paragraph', props: { html: '瀏覽網頁看到有用資料，一鍵存入 NotebookLM；還能把 ChatGPT / Gemini 的 AI 對話直接收編為來源。', style: { marginBottom: '12px' } } },
      { type: 'html', props: { content: '<div class="ext-imgs"><img src="/extensions/kortex-1.jpg" /><img src="/extensions/kortex-2.jpg" /></div>' } },
      { type: 'grid', props: {
        cards: [
          {
            title: '核心功能',
            body: '<ul style="font-size:15px;"><li><strong>一鍵存入</strong> — 網頁內容直接送進 NotebookLM</li><li><strong>精華選取</strong> — 反白 + 右鍵 + 記住來源</li><li><strong>AI 對話收編</strong> — 把 AI 對話整理存檔</li><li><strong>批次管理</strong> — 多筆資料一次整理</li><li><strong>Prompt 儲存</strong> — 常用 Prompt 隨時取用</li></ul>',
          },
          {
            title: '你可以這樣用',
            body: '<ul style="font-size:15px;"><li>瀏覽產業新聞 → 一鍵存入 NotebookLM</li><li>累積素材 → NotebookLM 整理成簡報</li><li>今天 AI 對話收編，明天變成提案</li><li>蒐集 → 整理 → 簡報一條龍</li></ul>',
            url: 'chromewebstore.google.com/detail/hdapplggdhndkblofffknpmnnnnbncbn',
          },
        ],
      }},
    ],
  },
]
