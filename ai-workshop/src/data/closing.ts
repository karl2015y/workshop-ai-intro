import type { Slide } from '../types/slides'

export const closingSlides: Slide[] = [
  // Tool Summary
  {
    theme: 'dark',
    blocks: [
      { type: 'heading', props: { level: 2, text: '工具總整理' } },
      { type: 'table', props: {
        headers: ['你要做的事', '推薦工具', '搭配外掛'],
        rows: [
          ['<strong>寫訊息/文案</strong>', 'ChatGPT / Gemini', 'AI Exporter（匯出保存）'],
          ['<strong>做宣傳圖</strong>', 'Gemini Nano Banana Pro', 'Voyager（去浮水印+整理）'],
          ['<strong>做提案簡報</strong>', 'Gamma / NotebookLM', 'Kortex（蒐集資料）'],
          ['<strong>做短片</strong>', 'Seedance 2.0（即夢）', '—'],
          ['<strong>整理會議記錄</strong>', '語音備忘錄 → AI', '—'],
          ['<strong>持續學習</strong>', 'YouTube + NotebookLM', 'YouTube to NotebookLM'],
        ],
      }},
    ],
  },
  // YouTube to NotebookLM
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Chrome 外掛 — 持續學習', variant: 'tp' } },
      { type: 'heading', props: { level: 2, text: 'YouTube to NotebookLM — 影片變筆記' } },
      { type: 'paragraph', props: { html: '把 YouTube 影片、播放清單、整個頻道一鍵匯入 NotebookLM，用 AI 提問複習、產出摘要。<br><strong>4.9 ★（536 評分）· 300,000 使用者</strong>', style: { marginBottom: '12px' } } },
      { type: 'html', props: { content: '<div class="ext-imgs"><img src="/extensions/yt-notebooklm-1.jpg" /><img src="/extensions/yt-notebooklm-2.jpg" /></div>' } },
      { type: 'grid', props: {
        cards: [
          {
            title: '核心功能',
            body: '<ul style="font-size:15px;"><li><strong>一鍵匯入</strong> — YouTube 影片下方按鈕直接匯入</li><li><strong>批次匯入</strong> — 播放清單、頻道、搜尋結果整批送入</li><li><strong>AI 摘要</strong> — NotebookLM 自動產出影片重點</li><li><strong>指定筆記本</strong> — 選擇要匯入哪個筆記本</li></ul>',
            url: 'chromewebstore.google.com/detail/kobncfkmjelbefaoohoblamnbackjggk',
          },
          {
            title: '你可以這樣用',
            body: '<ul style="font-size:15px;"><li>看完教學影片一鍵匯入，問重點快速複習</li><li>多支影片匯入同一筆記本做主題學習</li><li>追蹤講師頻道，新影片自動收集</li><li>不用再看完就忘</li></ul>',
          },
        ],
      }},
    ],
  },
  // Action Plan
  {
    theme: 'light',
    blocks: [
      { type: 'heading', props: { level: 2, text: '你的AI導入行動計畫' } },
      { type: 'table', props: {
        headers: ['時間', '行動', '目標'],
        rows: [
          ['<strong style="color:var(--danger);">今天</strong>', '寫那段拖著沒傳的開發訊息然後傳出去', '踏出第一步'],
          ['<strong style="color:var(--m5);">這週</strong>', '挑一個客戶跑完整流程', '完整跑一次'],
          ['<strong style="color:var(--m3);">這個月</strong>', '建立Prompt模板庫', '建立系統'],
          ['<strong style="color:var(--primary);">持續</strong>', '每次重複性文書先想AI能不能做', '養成習慣'],
        ],
      }},
      { type: 'html', props: { content: '<div style="margin-top:24px;padding:20px 28px;background:var(--slide-dark);color:#fff;border-radius:12px;font-size:20px;text-align:center;line-height:1.6;">省下來的時間，拿去見客戶、談生意——這才是你最該花時間的地方。</div>' } },
    ],
  },
  // End
  {
    theme: 'end',
    blocks: [
      { type: 'html', props: { content: '<div style="margin-bottom:24px;"><img src="/bgmotion-logo.svg" alt="背景模式 BGMotion" style="width:110px;height:110px;border-radius:22px;box-shadow:0 12px 40px rgba(0,0,0,0.4);" /></div>' } },
      { type: 'heading', props: { level: 1, text: '感謝你今天的參與！', style: { fontSize: '52px' } } },
      { type: 'paragraph', props: { html: 'AI 是你的助理，不是你的替代。讓它處理瑣事，你去做最有價值的事。', class: 'sub', style: { fontSize: '26px' } } },
      { type: 'html', props: { content: '<div style="margin-top:20px;font-size:17px;opacity:.7;">講師 · 林裕凱 Karl Lin　｜　背景模式股份有限公司 BGMotion</div>' } },
    ],
  },
]
