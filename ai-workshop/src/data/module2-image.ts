import type { Slide } from '../types/slides'

export const module2Slides: Slide[] = [
  // 13: M2 Cover
  {
    theme: 'm2',
    moduleNumber: '02',
    blocks: [
      { type: 'paragraph', props: { html: 'MODULE 2', style: { fontSize: '18px', letterSpacing: '3px', opacity: '0.6' } } },
      { type: 'heading', props: { level: 1, text: '圖片生成' } },
      { type: 'paragraph', props: { html: '不會設計也能做宣傳圖', class: 'sub' } },
    ],
  },
  // 14: Image Prompt Formula
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Module 2 — 圖片生成', variant: 't2' } },
      { type: 'heading', props: { level: 2, text: '圖片 Prompt 公式' } },
      { type: 'flow', props: {
        items: [
          { text: '主體' },
          { text: '風格' },
          { text: '色調' },
          { text: '用途' },
          { text: '額外要求' },
        ],
      }},
      { type: 'table', props: {
        headers: ['用途', 'Prompt 範例'],
        rows: [
          ['<strong>FB 貼文</strong>', '「一張正方形的咖啡廳新品宣傳圖，日系清新風格，米白色調，主角是一杯抹茶拿鐵，背景有木質桌面和綠葉，畫質細緻」'],
          ['<strong>活動海報</strong>', '「一張 16:9 的年終特賣活動海報，紅金配色，喜慶風格，大標題寫年終感恩回饋，底部留白放活動資訊」'],
          ['<strong>LINE 推播</strong>', '「一張直式的美容課程推廣圖，粉紫色漸層，簡約風格，中間放課程名稱，適合手機閱讀」'],
        ],
      }},
    ],
  },
  // 15: Gemini Nano Banana Pro Steps
  {
    theme: 'dark',
    blocks: [
      { type: 'tag', props: { text: 'Module 2 — 圖片生成', variant: 't2' } },
      { type: 'heading', props: { level: 3, text: 'Gemini Nano Banana Pro — 操作步驟' } },
      { type: 'grid', props: {
        cards: [
          {
            title: '操作步驟',
            body: '<ul style="font-size:15px;list-style:none;padding-left:0;"><li><strong>1.</strong> 打開 <strong>gemini.google.com</strong></li><li><strong>2.</strong> 選 <strong>2.5 Pro</strong> 思考型模型 🍌</li><li><strong>3.</strong> 輸入圖片描述（中文就可以）</li><li><strong>4.</strong> 不滿意 → 繼續修改</li></ul>',
          },
          {
            title: '修改技巧',
            body: '<table style="width:100%;font-size:15px;border-collapse:collapse;"><tr style="border-bottom:1px solid rgba(255,255,255,0.15);"><th style="text-align:left;padding:6px;">想改什麼</th><th style="text-align:left;padding:6px;">怎麼說</th></tr><tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:6px;">顏色</td><td style="padding:6px;">「背景換成淺藍色」</td></tr><tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:6px;">風格</td><td style="padding:6px;">「改成日系插畫風」</td></tr><tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:6px;">構圖</td><td style="padding:6px;">「主體放大、置中」</td></tr><tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:6px;">比例</td><td style="padding:6px;">「改成 1:1 正方形」</td></tr><tr><td style="padding:6px;">畫質</td><td style="padding:6px;">「畫質再細緻一點」</td></tr></table><p style="font-size:14px;margin-top:12px;opacity:0.7;">還能做：名片設計、產品情境圖、電商橫幅、雜誌風排版</p>',
          },
        ],
      }},
    ],
  },
  // 16: Nano Banana Pro Details
  {
    theme: 'dark',
    blocks: [
      { type: 'tag', props: { text: 'Module 2 — Nano Banana Pro', variant: 't2' } },
      { type: 'heading', props: { level: 3, text: '指定比例 + 更多應用場景' } },
      { type: 'grid', props: {
        cards: [
          {
            title: '圖片比例對照表',
            body: '<table style="width:100%;font-size:15px;border-collapse:collapse;"><tr style="border-bottom:1px solid rgba(255,255,255,0.15);"><th style="text-align:left;padding:6px;">用途</th><th style="text-align:left;padding:6px;">比例</th><th style="text-align:left;padding:6px;">Prompt</th></tr><tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:6px;">FB / IG 貼文</td><td style="padding:6px;">1:1</td><td style="padding:6px;">「正方形」</td></tr><tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:6px;">簡報 / 橫幅</td><td style="padding:6px;">16:9</td><td style="padding:6px;">「寬螢幕橫式」</td></tr><tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:6px;">手機直式</td><td style="padding:6px;">9:16</td><td style="padding:6px;">「手機全螢幕直式」</td></tr><tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:6px;">IG 人像</td><td style="padding:6px;">4:5</td><td style="padding:6px;">「IG 人像比例」</td></tr><tr><td style="padding:6px;">A4 海報</td><td style="padding:6px;">3:4</td><td style="padding:6px;">「A4 直式海報」</td></tr></table>',
          },
          {
            title: 'Nano Banana Pro 還能做',
            body: '<table style="width:100%;font-size:15px;border-collapse:collapse;"><tr style="border-bottom:1px solid rgba(255,255,255,0.15);"><th style="text-align:left;padding:6px;">應用</th><th style="text-align:left;padding:6px;">Prompt 重點</th></tr><tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:6px;">名片設計</td><td style="padding:6px;">「設計一張名片，包含姓名、職稱、電話、Email」</td></tr><tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:6px;">電商產品圖</td><td style="padding:6px;">「白底產品情境圖，旁邊放使用場景」</td></tr><tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><td style="padding:6px;">日式雜誌風</td><td style="padding:6px;">「雜誌風排版，左圖右文，留白多」</td></tr><tr><td style="padding:6px;">一頁式網站</td><td style="padding:6px;">「一頁式網站設計，Hero 區塊 + 特色介紹」</td></tr></table><p style="font-size:14px;margin-top:12px;opacity:0.7;">⚠️ AI 生成的圖片中文字可能有錯字，建議後製時再加上文字</p>',
          },
        ],
      }},
    ],
  },
  // 17: Practice 3
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Module 2 — 實作時間', variant: 't2' } },
      { type: 'heading', props: { level: 2, text: '✏️ 練習 3' } },
      { type: 'practice', props: {
        title: '用 Gemini 生成一張社群宣傳圖',
        body: '<ol style="font-size:17px;margin-top:8px;"><li><strong>宣傳什麼</strong> — 你的產品、活動、課程</li><li><strong>放哪裡</strong> — FB / IG / LINE / 海報</li><li><strong>感覺</strong> — 日系清新？科技感？溫馨？</li><li><strong>顏色</strong> — 品牌色、暖色、冷色？</li><li><strong>比例 + 畫質</strong> — 正方形 1:1？直式 9:16？</li></ol>',
      }},
      { type: 'paragraph', props: { html: '💡 選好 <strong>2.5 Pro</strong> 模型 → 貼進 Gemini → 不滿意就修改！', style: { marginTop: '16px', fontSize: '18px' } } },
    ],
  },
  // Practice 3-2: Business Card
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Module 2 — 實作時間', variant: 't2' } },
      { type: 'heading', props: { level: 2, text: '✏️ 練習 3-2：用 AI 生成你的名片' } },
      { type: 'practice', props: {
        title: '用 Gemini 設計一張專業名片',
        body: '<p style="font-size:17px;margin-bottom:10px;">Prompt 範例：</p><div class="code" style="font-size:14px;padding:16px;margin:0 0 12px 0;">幫我設計一張專業名片的正反面，風格簡約專業：<br>\n- 公司名：<span class="hl">[你的公司名]</span><br>\n- 姓名：<span class="hl">[你的名字]</span><br>\n- 職稱：<span class="hl">[你的職稱]</span><br>\n- 電話 / LINE ID / 地址<br>\n- 請放上公司 LOGO（如果有的話）<br>\n- 色調：<span class="hl">[你的品牌色]</span></div><p style="font-size:16px;opacity:.6;">💡 不喜歡可以說「換成燙金風格」「改成深色底」「加入 QR Code」繼續調整</p>',
      }},
    ],
  },
  // Voyager Extension
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Chrome 外掛 — 搭配圖片生成', variant: 'tp' } },
      { type: 'heading', props: { level: 2, text: 'Voyager — 讓 Gemini 瞬間升級' } },
      { type: 'paragraph', props: { html: 'Gemini 對話資料夾管理 + 圖片去浮水印下載 + Google Drive 備份，一個外掛搞定。<br><strong>5.0 ★（543 評分）· 40,000 使用者</strong>', style: { marginBottom: '12px' } } },
      { type: 'html', props: { content: '<div class="ext-imgs"><img src="/extensions/voyager-1.jpg" /></div>' } },
      { type: 'grid', props: {
        cards: [
          { title: '核心功能', body: '<ul style="font-size:15px;"><li><strong>對話資料夾</strong> — 分類整理不同主題的 Gemini 對話</li><li><strong>時間軸導航</strong> — 快速跳到任意對話段落</li><li><strong>去浮水印下載</strong> — 一鍵下載 AI 生成圖片，無浮水印</li><li><strong>對話備份 Google 雲端</strong> — 自動備份到 Google Drive</li><li><strong>隨時召喚 AI</strong> — 在任何網頁呼叫 Gemini</li></ul>' },
          { title: '你可以這樣用', body: '<ul style="font-size:15px;"><li>去浮水印下載宣傳圖，直接用在社群貼文</li><li>分資料夾整理：客戶開發、活動素材、產品圖</li><li>時間軸跳回之前的對話，找到滿意的版本</li></ul>', url: 'chromewebstore.google.com/detail/iifacdnjakkhjjiengaffnegbndgingi' },
        ],
      }},
    ],
  },
]
