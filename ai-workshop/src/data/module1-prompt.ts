import type { Slide } from '../types/slides'

export const module1Slides: Slide[] = [
  // 3: M1 Cover
  {
    theme: 'm1',
    moduleNumber: '01',
    blocks: [
      { type: 'paragraph', props: { html: 'MODULE 1', style: { fontSize: '18px', letterSpacing: '3px', opacity: '0.6' } } },
      { type: 'heading', props: { level: 1, text: 'Prompt 心法' } },
      { type: 'paragraph', props: { html: 'RICE 框架 + 文字生成', class: 'sub' } },
    ],
  },
  // 4: Why Generic
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Module 1 — Prompt 心法', variant: 't1' } },
      { type: 'heading', props: { level: 2, text: '為什麼你用 AI 寫出來的東西「很普通」？' } },
      { type: 'paragraph', props: { html: '因為你給的指令太模糊了。', style: { fontSize: '22px', marginBottom: '20px' } } },
      { type: 'comparison', props: {
        bad: { label: '❌ 模糊指令', body: '<p>「幫我寫一段訊息」</p><p class="dm" style="font-size:15px;margin-top:6px;">→ AI 不知道寫給誰、什麼目的<br>→ 產出四不像的通用內容</p>' },
        good: { label: '✅ 精準指令', body: '<p>「幫我寫一段 LINE 開發訊息給中小企業老闆，推薦背景模式的 AI 流程導入顧問，強調兩週內看到成效」</p><p class="dm" style="font-size:15px;margin-top:6px;">→ 清楚對象、產品、賣點<br>→ 直接傳出去的訊息</p>' },
      }},
    ],
  },
  // 5: RICE Framework
  {
    theme: 'dark',
    blocks: [
      { type: 'tag', props: { text: 'Module 1 — Prompt 心法', variant: 't1' } },
      { type: 'heading', props: { level: 2, text: 'RICE 框架 — 四個要素讓 AI 變成你的業務助理' } },
      { type: 'rice', props: {
        items: [
          { letter: 'R', color: '#a8c7a3', word: 'Role 角色', body: '告訴 AI 它是誰，它會用那個角色的專業回答你<br><span style="opacity:.7;">寫開發訊息 →「你是一位有 10 年經驗的業務經理」</span><br><span style="opacity:.7;">寫社群文案 →「你是一位社群行銷文案專家」</span>' },
          { letter: 'I', color: '#e8dfc4', word: 'Instruction 指令', body: '明確說出你要什麼，<strong>一次一件事</strong><br><span style="color:#ff8a7a;">❌ 幫我寫訊息還有做一張圖</span><br><span style="color:#8fd49a;">✅ 請幫我撰寫一段客戶開發訊息</span>' },
          { letter: 'C', color: '#d4a574', word: 'Context 背景', body: '資訊越多，產出越精準<br><span style="opacity:.7;">公司名 / 賣什麼 / 客戶是誰<br>客戶痛點 / 你的獨特賣點</span>' },
          { letter: 'E', color: '#c9a961', word: 'Example 範例', body: '給 AI 一個參考，它就會模仿<br><span style="opacity:.7;">語氣：親切專業，像朋友推薦<br>格式：問候→痛點→方案→行動呼籲<br>長度：150 字以內</span>' },
        ],
      }},
    ],
  },
  // 6: RICE Example
  {
    theme: 'dark',
    blocks: [
      { type: 'tag', props: { text: 'RICE 框架', variant: 't1' } },
      { type: 'heading', props: { level: 2, text: '完整範例' } },
      { type: 'code', props: {
        content: '<span class="hl">【R】</span>你是一位有 10 年經驗的業務經理，擅長用溫暖但專業的語氣開發新客戶。\n\n<span class="hl">【I】</span>請幫我撰寫一段 LINE 客戶開發訊息。\n\n<span class="hl">【C】</span>\n<span class="dm">-</span> 我的公司：背景模式股份有限公司（BGMotion）\n<span class="dm">-</span> 服務：AI 流程導入顧問 + 企業網站建置，把 Gemini / Claude 整合進既有工作流\n<span class="dm">-</span> 目標客戶：30-100 人中小企業，行政 / 業務 / 行銷主管\n<span class="dm">-</span> 客戶痛點：行政工作吃掉主管一半時間、找不到懂 AI 又懂業務的顧問\n<span class="dm">-</span> 優勢：兩週內上線、按流程模組收費不綁長約、結案後教到會\n\n<span class="hl">【E】</span>\n<span class="dm">-</span> 語氣：親切專業，像朋友推薦好東西\n<span class="dm">-</span> 格式：問候 → 痛點 → 方案 → 行動呼籲\n<span class="dm">-</span> 長度：150 字以內（適合 LINE 閱讀）',
        style: { fontSize: '15px', maxWidth: '900px' },
      }},
    ],
  },
  // 7: Advanced Tips
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Module 1 — Prompt 心法', variant: 't1' } },
      { type: 'heading', props: { level: 2, text: '進階技巧' } },
      { type: 'table', props: {
        headers: ['技巧', '怎麼用', '範例'],
        rows: [
          ['<strong>迭代修改</strong>', '叫 AI 調整不滿意的地方', '「語氣再親切一點，少一點推銷感」'],
          ['<strong>格式指定</strong>', '指定輸出格式', '「用表格整理」「分成三個版本讓我選」'],
          ['<strong>批量處理</strong>', '一次處理多筆', '「以下五位客戶，分別寫客製化開發訊息」'],
          ['<strong>翻譯改寫</strong>', '跨語言處理', '「把這段訊息翻成英文，語氣保持一樣」'],
        ],
      }},
      { type: 'paragraph', props: { html: '💡 <span class="em">記住：不滿意就繼續跟 AI 說，它不會累。</span>', style: { marginTop: '20px', fontSize: '19px' } } },
    ],
  },
  // 8: Sales Template
  {
    theme: 'dark',
    blocks: [
      { type: 'tag', props: { text: '文字生成實戰', variant: 't1' } },
      { type: 'heading', props: { level: 3, text: 'Prompt 模板：LINE 客戶開發訊息' } },
      { type: 'code', props: {
        content: '你是一位有 10 年經驗的業務經理，擅長用溫暖但專業的語氣開發新客戶。\n\n請幫我撰寫一段 LINE 客戶開發訊息。\n\n背景資訊：\n- 我的公司：<span class="hl">[你的公司名，例：背景模式 BGMotion]</span>\n- 我們的產品/服務：<span class="hl">[你賣什麼，例：AI 流程導入顧問]</span>\n- 目標客戶：<span class="hl">[客戶是誰，什麼產業]</span>\n- 客戶常見痛點：<span class="hl">[他們遇到什麼問題]</span>\n- 我們的優勢：<span class="hl">[為什麼選你]</span>\n\n要求：\n- 語氣親切專業，不要有推銷感\n- 格式：問候 → 點出痛點 → 介紹方案 → 行動呼籲\n- 長度 150 字以內（適合 LINE 閱讀）',
        style: { fontSize: '15px' },
      }},
    ],
  },
  // 9: Reply Template
  {
    theme: 'dark',
    blocks: [
      { type: 'tag', props: { text: '文字生成實戰', variant: 't1' } },
      { type: 'heading', props: { level: 3, text: 'Prompt 模板：回覆客戶疑慮' } },
      { type: 'code', props: {
        content: '你是一位資深的客戶關係經理，擅長用同理心回覆客戶的疑慮。\n\n以下是客戶的 LINE 訊息，請幫我寫一段專業回覆：\n\n客戶訊息：\n「<span class="hl">[貼上客戶的訊息]</span>」\n\n回覆要求：\n- 先<span class="gn">同理</span>客戶的顧慮（不要否定他）\n- 用<span class="gn">具體數據或案例</span>說明我們的價值\n- 提出<span class="gn">低風險的嘗試方案</span>（免費試用、小量訂購）\n- 語氣溫暖、不施壓\n- 150 字以內\n\n我們的優勢：<span class="hl">[你的賣點]</span>',
        style: { fontSize: '15px' },
      }},
    ],
  },
  // 10: Practice 1
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Module 1 — 實作時間', variant: 't1' } },
      { type: 'heading', props: { level: 2, text: '✏️ 練習 1：寫 LINE 客戶開發訊息' } },
      { type: 'practice', props: {
        title: '用 RICE 框架，填入你自己的產品/服務',
        body: '<ol style="font-size:17px;margin-top:8px;"><li>填好你的公司、產品、客戶、痛點、優勢</li><li>套進「LINE 客戶開發訊息」Prompt 模板</li><li>貼進 ChatGPT 或 Gemini</li><li>不滿意就迭代修改！</li></ol>',
      }},
    ],
  },
  // 11: Practice 2
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Module 1 — 實作時間', variant: 't1' } },
      { type: 'heading', props: { level: 2, text: '✏️ 練習 2：回覆客戶疑慮' } },
      { type: 'quote', props: { html: '「謝謝你的介紹，你們的服務聽起來不錯。不過我現在用的方案也還可以，而且我擔心換新的會有銜接問題，萬一出了狀況怎麼辦？可以再想想嗎？」', style: { fontSize: '18px' } } },
      { type: 'paragraph', props: { html: '用「回覆客戶疑慮」Prompt 模板 + 你的產品優勢資訊，產出一段 LINE 回覆。', style: { marginTop: '16px' } } },
    ],
  },
  // 12: AI Exporter
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Chrome 外掛 — 搭配文字生成', variant: 'tp' } },
      { type: 'heading', props: { level: 2, text: 'AI Exporter — 把 AI 內容完美匯出' } },
      { type: 'paragraph', props: { html: '將 ChatGPT、Gemini、Claude 的對話一鍵儲存為 PDF / Word / Markdown，同步到 Notion。<br><strong>4.7 ★（705 評分）· 70,000 使用者</strong>', style: { marginBottom: '12px' } } },
      { type: 'html', props: { content: '<div class="ext-imgs"><img src="/extensions/ai-exporter-1.jpg" /><img src="/extensions/ai-exporter-2.jpg" /></div>' } },
      { type: 'grid', props: {
        cards: [
          { title: '核心功能', body: '<ul style="font-size:15px;"><li><strong>多格式匯出</strong> — PDF、Word、Markdown、JSON、TXT</li><li><strong>精選段落</strong> — 勾選你要的對話段落，不用全部下載</li><li><strong>跨平台聚合</strong> — ChatGPT + Gemini + Claude 合併匯出</li><li><strong>一鍵同步 Notion</strong> — 標題、日期、標籤自動搬好</li></ul>' },
          { title: '你可以這樣用', body: '<ul style="font-size:15px;"><li>把今天練習寫的開發訊息匯出 PDF 保存</li><li>累積成你自己的「Prompt 模板庫」</li><li>以後同類型的訊息，直接拿模板改就好</li><li>不用每次都從零開始寫 Prompt</li></ul>', url: 'chromewebstore.google.com/detail/kagjkiiecagemklhmhkabbalfpbianbe' },
        ],
      }},
    ],
  },
]
