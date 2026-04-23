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
          ['<strong>FB 貼文</strong>', '「一張正方形的背景模式 AI 顧問服務宣傳圖，專業科技感，深綠配金色調，主視覺是筆電畫面自動跑出 AI 對話框，搭配細緻木質桌面，畫質細緻」'],
          ['<strong>活動海報</strong>', '「一張 16:9 的背景模式免費 AI 體驗日海報，深綠金色配色，簡約商務風格，大標題「讓 AI 接手行政，你專心做生意」，底部留白放活動日期」'],
          ['<strong>LINE 推播</strong>', '「一張直式的背景模式 AI 導入方案推廣圖，森林綠漸層，極簡風格，中間放方案名稱與兩週上線，適合手機閱讀」'],
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
        body: '<p style="font-size:17px;margin-bottom:10px;">Prompt 範例（以背景模式為例）：</p><div class="code" style="font-size:14px;padding:16px;margin:0 0 12px 0;">幫我設計一張專業名片的正反面，風格簡約專業：<br>\n- 公司名：<span class="hl">背景模式股份有限公司 BG Motion</span><br>\n- 姓名：<span class="hl">林裕凱 Karl Lin</span><br>\n- 職稱：<span class="hl">技術研發長</span><br>\n- 電話 / LINE ID / 地址<br>\n- 放上公司 LOGO（深綠底白字 BG MOTION）<br>\n- 色調：<span class="hl">深森林綠 + 燙金點綴</span></div><p style="font-size:16px;opacity:.6;">💡 不喜歡可以說「換成燙金風格」「改成深色底」「加入 QR Code」繼續調整</p>',
      }},
    ],
  },
  // Hot Off the Press: ChatGPT Images 2.0 (2026/04/22)
  {
    theme: 'm2',
    blocks: [
      { type: 'paragraph', props: { html: 'HOT OFF THE PRESS · 2026 / 04 / 22', style: { fontSize: '15px', letterSpacing: '4px', opacity: '0.7', marginBottom: '16px' } } },
      { type: 'heading', props: { level: 1, text: 'ChatGPT Images 2.0 來了', style: { fontSize: '62px' } } },
      { type: 'paragraph', props: { html: '自從 OpenAI 關閉 Sora、上週推出 Codex 之後，今天 Images 2.0 正式發布——<br>超越 Images 1.5，直接與 Nano Banana 2 分庭抗禮', class: 'sub', style: { marginTop: '14px' } } },
      { type: 'html', props: { content: '<div style="margin-top:28px;display:flex;gap:24px;opacity:.6;font-size:15px;justify-content:center;"><span>🧠 思考模式</span><span>|</span><span>🌏 多語系文字</span><span>|</span><span>🎨 設計品味</span><span>|</span><span>📐 3:1–1:3 比例</span></div>' } },
    ],
  },
  // Four Pillars
  {
    theme: 'dark',
    blocks: [
      { type: 'tag', props: { text: 'Module 2 — 最新動態', variant: 't2' } },
      { type: 'heading', props: { level: 2, text: 'Images 2.0 四大亮點' } },
      { type: 'grid', props: {
        cards: [
          { title: '🧠 會思考的畫筆', body: '<p style="opacity:.8;font-size:15px;line-height:1.6;">進入 Thinking Mode 後，模型會先搜尋即時網頁、推理構圖、輸出後自動雙重檢查。<br><strong style="color:#e8dfc4;">一次生成 8 張具角色一致性</strong>的連載漫畫、空間多角度、或整套社群廣告。</p>' },
          { title: '🌏 多語系文字控制', body: '<p style="opacity:.8;font-size:15px;line-height:1.6;">繁體中文、日韓文已搞定，這次連 <strong style="color:#e8dfc4;">印地文、孟加拉文</strong>都能排版優美。<br>密集資訊（終端機、ASCII、便利貼）都能精準控制——跨國行銷海報直接產出。</p>' },
          { title: '🎨 有品味的設計意圖', body: '<p style="opacity:.8;font-size:15px;line-height:1.6;">35mm 底片顆粒、漫畫排線、不完美構圖都能重現。<br>Canva 設計策略師實測：要求做青少年化妝品廣告，模型<strong style="color:#e8dfc4;">自主加上「viral on TikTok」標籤</strong>——開始有受眾心理判讀能力。</p>' },
          { title: '📐 3:1 到 1:3 任意比例', body: '<p style="opacity:.8;font-size:15px;line-height:1.6;">同一品牌指令，<strong style="color:#e8dfc4;">一次產出 Twitter 橫幅 + IG Stories 長圖 + LinkedIn 貼文 + IG feed</strong>——視覺識別全通路一致。<br>複雜科學圖表、步行地圖也處理得很乾淨。</p>' },
        ],
      }},
    ],
  },
  // Before / After Case 1: 便當
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Images 2.0 實測 · 餐飲海報', variant: 't2' } },
      { type: 'heading', props: { level: 3, text: '實測 1：把便當照片變成海報' } },
      { type: 'html', props: { content: `
        <div class="ba">
          <div class="ba-col">
            <img src="/cases/gpt/原本便當＋題詞.jpg" alt="便當原圖" />
            <div class="ba-cap">原始：便當照片 + 一句題詞</div>
          </div>
          <div class="ba-arrow">→</div>
          <div class="ba-col">
            <img src="/cases/gpt/便當海報.jpg" alt="便當海報" />
            <div class="ba-cap">成品：可直接貼 IG / LINE 的完整海報</div>
          </div>
        </div>
        <p class="ba-note">中文字排版、留白、色彩層次全在一次指令完成。</p>
      `}},
    ],
  },
  // Before / After Case 2: 咖喱
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Images 2.0 實測 · 餐飲海報', variant: 't2' } },
      { type: 'heading', props: { level: 3, text: '實測 2：把咖喱照片變成海報' } },
      { type: 'html', props: { content: `
        <div class="ba">
          <div class="ba-col">
            <img src="/cases/gpt/原本的咖喱.jpg" alt="咖喱原圖" />
            <div class="ba-cap">原始：手機隨拍的咖喱</div>
          </div>
          <div class="ba-arrow">→</div>
          <div class="ba-col">
            <img src="/cases/gpt/咖喱海報.jpg" alt="咖喱海報" />
            <div class="ba-cap">成品：有主標、副標、價格的完整海報</div>
          </div>
        </div>
        <p class="ba-note">食材質感保留、標題字位排得恰到好處——這在一年前是設計師才做得到的事。</p>
      `}},
    ],
  },
  // Before / After Case 3: 蛋餅
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Images 2.0 實測 · 餐飲海報', variant: 't2' } },
      { type: 'heading', props: { level: 3, text: '實測 3：把蛋餅照片變成海報' } },
      { type: 'html', props: { content: `
        <div class="ba">
          <div class="ba-col">
            <img src="/cases/gpt/原本蛋餅＋題詞.jpg" alt="蛋餅原圖" />
            <div class="ba-cap">原始：蛋餅照片 + 題詞文字</div>
          </div>
          <div class="ba-arrow">→</div>
          <div class="ba-col">
            <img src="/cases/gpt/蛋餅海報.jpg" alt="蛋餅海報" />
            <div class="ba-cap">成品：社群直出的早午餐海報</div>
          </div>
        </div>
        <p class="ba-note">同一張照片、同一組指令，AI 連文案版位、色塊層次、留白一次搞定。</p>
      `}},
    ],
  },
  // Takeaway
  {
    theme: 'dark',
    blocks: [
      { type: 'tag', props: { text: 'Module 2 — 對你的意義', variant: 't2' } },
      { type: 'heading', props: { level: 2, text: '所以，這對背景模式的客戶代表什麼？' } },
      { type: 'grid', props: {
        cards: [
          { title: '行銷素材週產量 ×10', body: '<p style="opacity:.8;font-size:15px;">以前請設計師做一張海報要 1-2 天、幾千塊。現在一位行政人員用 Images 2.0 一小時可以產 10 張，<strong style="color:#e8dfc4;">品質還過得去客戶</strong>。</p>' },
          { title: '多語系在地化不再卡關', body: '<p style="opacity:.8;font-size:15px;">要做日、韓、東南亞市場的海報？直接讓 AI 排好版面、打好文字——省掉翻譯員 + 設計師兩道工序。</p>' },
          { title: '全通路視覺一致性', body: '<p style="opacity:.8;font-size:15px;">一次產出 FB 橫幅、IG 方圖、LINE 長圖、LinkedIn 貼文——<strong style="color:#e8dfc4;">不用一張一張改尺寸</strong>，品牌識別自動統一。</p>' },
          { title: '但你仍然需要 Prompt 心法', body: '<p style="opacity:.8;font-size:15px;">AI 越聰明，<strong style="color:#e8dfc4;">指令越精準的人優勢越大</strong>。這就是為什麼我們第一堂課要先上 RICE 框架——工具會換，心法不會。</p>' },
        ],
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
