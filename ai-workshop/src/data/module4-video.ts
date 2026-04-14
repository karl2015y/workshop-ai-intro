import type { Slide } from '../types/slides'

export const module4Slides: Slide[] = [
  // Break
  {
    theme: 'break',
    blocks: [
      { type: 'paragraph', props: { html: '☕', style: { fontSize: '80px' } } },
      { type: 'heading', props: { level: 1, text: '休息 10 分鐘' } },
      { type: 'paragraph', props: { html: '拿起手機試試剛學的東西也不錯', class: 'sub' } },
    ],
  },
  // M4 Cover
  {
    theme: 'm4',
    moduleNumber: '04',
    blocks: [
      { type: 'paragraph', props: { html: 'MODULE 4', style: { fontSize: '18px', letterSpacing: '3px', opacity: '0.6' } } },
      { type: 'heading', props: { level: 1, text: '影片生成' } },
      { type: 'paragraph', props: { html: 'Seedance 2.0 — AI 影片一句話就能生', class: 'sub' } },
    ],
  },
  // Seedance 2.0 Introduction
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Module 4 — 影片生成', variant: 't4' } },
      { type: 'heading', props: { level: 2, text: 'Seedance 2.0 是什麼？' } },
      { type: 'paragraph', props: { html: '字節跳動旗下<strong>即夢平台</strong>推出的 AI 影片生成模型，輸入文字或圖片就能產出高品質影片。', style: { fontSize: '20px', marginBottom: '20px' } } },
      { type: 'grid', props: {
        cards: [
          {
            title: '核心能力',
            body: '<ul style="font-size:15px;"><li><strong>文字生影片</strong> — 打一段描述就產出影片</li><li><strong>圖片生影片</strong> — 上傳產品圖讓它動起來</li><li><strong>角色一致性</strong> — 同一人物跨鏡頭不會變臉</li><li><strong>精準對嘴</strong> — 上傳語音自動對嘴型</li><li><strong>物理模擬</strong> — 碰撞、光影自然不穿幫</li></ul>',
          },
          {
            title: '輸出規格',
            body: '<ul style="font-size:15px;"><li><strong>解析度</strong> — 原生 1080p（付費可 2K）</li><li><strong>比例</strong> — 16:9 / 9:16 / 1:1</li><li><strong>長度</strong> — 5-12 秒</li><li><strong>多素材輸入</strong> — 最多 9 張圖 + 3 段影片 + 3 段音檔</li><li><strong>免費使用</strong> — 有免費額度可先試</li></ul>',
          },
        ],
      }},
    ],
  },
  // Five-Element Prompt Framework
  {
    theme: 'dark',
    blocks: [
      { type: 'tag', props: { text: 'Module 4 — 影片 Prompt', variant: 't4' } },
      { type: 'heading', props: { level: 2, text: '五要素 Prompt 公式' } },
      { type: 'paragraph', props: { html: '跟圖片一樣，影片 Prompt 越具體，產出越好。', style: { fontSize: '18px', marginBottom: '16px', opacity: '0.7' } } },
      { type: 'table', props: {
        headers: ['要素', '說明', '範例'],
        rows: [
          ['<strong style="color:var(--m4);">場景</strong>', '環境與時間', '「雨天的城市街道，霓虹燈閃爍」'],
          ['<strong style="color:var(--m4);">主體</strong>', '人物或產品特徵', '「一位穿西裝的男子手持咖啡杯」'],
          ['<strong style="color:var(--m4);">動作</strong>', '主體的具體行為', '「拿起產品喝了一口，露出滿意微笑」'],
          ['<strong style="color:var(--m4);">鏡頭</strong>', '攝影機運動', '「從遠景推到近景特寫、低角度拍攝」'],
          ['<strong style="color:var(--m4);">氛圍</strong>', '光影與色調', '「電影質感、暖色調、柔和背景虛化」'],
        ],
      }},
    ],
  },
  // How to Use + @ Reference
  {
    theme: 'dark',
    blocks: [
      { type: 'tag', props: { text: 'Module 4 — 操作步驟', variant: 't4' } },
      { type: 'heading', props: { level: 3, text: '即夢平台操作步驟' } },
      { type: 'grid', props: {
        cards: [
          {
            title: '操作流程',
            body: '<ul style="font-size:15px;list-style:none;padding-left:0;"><li><strong>1.</strong> 打開 <strong>jimeng.jianying.com</strong></li><li><strong>2.</strong> 註冊登入（免費）</li><li><strong>3.</strong> 選擇「AI 影片」功能</li><li><strong>4.</strong> 上傳產品圖片（可多張）</li><li><strong>5.</strong> 用五要素公式寫 Prompt</li><li><strong>6.</strong> 選比例（9:16 手機直式 / 16:9 橫式）</li><li><strong>7.</strong> 點擊生成 → 等待 → 下載</li></ul>',
          },
          {
            title: '@ 引用技巧',
            body: '<p style="font-size:15px;margin-bottom:8px;">上傳圖片後，用 <strong>@圖片</strong> 引用素材，AI 就會照著你的圖來生成：</p><div class="code" style="font-size:13px;padding:12px;">@圖片1 的產品放在木桌上，<br>鏡頭從遠景慢慢推進到特寫，<br>暖色調光線灑落，<br>電影質感，背景柔和虛化</div><p style="font-size:14px;margin-top:10px;opacity:.7;">多張圖可以分別 @圖片1 @圖片2 指定不同畫面</p>',
          },
        ],
      }},
    ],
  },
  // Prompt Example + Use Cases
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Module 4 — 應用場景', variant: 't4' } },
      { type: 'heading', props: { level: 3, text: '產品宣傳影片 Prompt 範例' } },
      { type: 'code', props: {
        content: `<span class="hl">場景：</span>明亮的現代辦公室，陽光透過大片落地窗灑入
<span class="hl">主體：</span>@圖片1 的產品放在白色桌面上，旁邊有一杯咖啡和筆記本
<span class="hl">動作：</span>一隻手從畫面右側伸入拿起產品，鏡頭跟隨手部動作
<span class="hl">鏡頭：</span>從俯拍慢慢轉為側面平視，最後推到產品特寫
<span class="hl">氛圍：</span>自然光、暖色調、清新專業感、淺景深`,
        style: { fontSize: '15px', maxWidth: '900px' },
      }},
      { type: 'table', props: {
        headers: ['應用場景', 'Prompt 重點'],
        rows: [
          ['<strong>產品開箱</strong>', '特寫鏡頭、手部動作、從包裝到產品的過程'],
          ['<strong>餐廳美食</strong>', '食物冒煙、筷子夾起、暖色燈光、俯拍'],
          ['<strong>服務介紹</strong>', '人物走進畫面、展示使用過程、微笑特寫'],
          ['<strong>活動預告</strong>', '場地全景、快節奏剪接感、文字彈出效果'],
        ],
      }},
    ],
  },
  // Real Cases from DotAI
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Module 4 — 實測案例', variant: 't4' } },
      { type: 'heading', props: { level: 2, text: '實測案例：上傳素材 → AI 成片' } },
      { type: 'showcase', props: {
        title: '案例 1：史詩古裝戰場',
        images: ['/cases/case1/person.png', '/cases/case1/product.png'],
        prompt: '史詩級古裝戰場，塵土飛揚，冷色調電影級光影。讓【@人物圖片】化身為身穿厚重破甲的亞洲將軍，正在千軍萬馬中衝鋒。突然舉起手，從盔甲中掏出【@產品圖片】一飲而盡。喝完後全身爆發出耀眼的金光。畫面彈出金色文字：「瞬間回血，戰力爆錶！」',
        video: '/cases/case1/output.mp4',
      }},
    ],
  },
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Module 4 — 實測案例', variant: 't4' } },
      { type: 'showcase', props: {
        title: '案例 2：武俠竹林對決',
        images: ['/cases/case2/person1.png', '/cases/case2/person2.png'],
        prompt: '幽暗翠綠的竹林，霧氣彌漫，武俠電影風格。讓【@人物圖片1】和【@人物圖片2】化身為古裝劍客（一位白衣、一位黑衣），在竹林間飛簷走壁。即將交鋒之際，兩人突然同時停手，從袖口掏出【@產品圖片】瘋狂噴灑。彈出螢光綠色文字：「高手過招，最怕蚊咬！一噴退散！」',
        video: '/cases/case2/output.mp4',
      }},
    ],
  },
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Module 4 — 實測案例', variant: 't4' } },
      { type: 'showcase', props: {
        title: '案例 3：法庭精英律師',
        images: ['/cases/case3/person.png', '/cases/case3/product.png'],
        prompt: '莊嚴肅穆的現代法庭，木質裝潢，暖色調頂光。讓【@人物圖片】化身為穿著筆挺西裝的精英律師，正在激動地展示關鍵證據。突然舉起【@產品圖片】對著鏡頭咧嘴一笑，牙齒爆發出耀眼十字星白光，光芒讓對面檢控官摀住眼睛。彈出文字：「極致亮白，贏得漂亮！」',
        video: '/cases/case3/output.mp4',
      }},
    ],
  },
  // Practice 5
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Module 4 — 實作時間', variant: 't4' } },
      { type: 'heading', props: { level: 2, text: '✏️ 練習 5：用 Seedance 2.0 生成產品影片' } },
      { type: 'practice', props: {
        title: '用五要素公式寫一段影片 Prompt',
        body: '<ol style="font-size:17px;margin-top:8px;"><li><strong>準備</strong> — 用 Gemini 生成的產品圖（或手機拍的照片）</li><li><strong>場景</strong> — 你的產品通常在什麼環境被使用？</li><li><strong>動作</strong> — 客戶怎麼使用你的產品？</li><li><strong>鏡頭</strong> — 遠景→近景？俯拍→平視？</li><li><strong>氛圍</strong> — 專業？溫馨？活潑？</li></ol><p style="font-size:16px;margin-top:12px;opacity:.7;">到 jimeng.jianying.com 試試看！選 9:16 直式適合 LINE / IG 傳送</p>',
      }},
    ],
  },
]
