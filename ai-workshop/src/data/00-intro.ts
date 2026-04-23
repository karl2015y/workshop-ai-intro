import type { Slide } from '../types/slides'

export const introSlides: Slide[] = [
  // 0: Cover
  {
    theme: 'cover',
    blocks: [
      { type: 'html', props: { content: '<div style="margin-bottom:28px;"><img src="/bgmotion-logo.svg" alt="背景模式 BG Motion" style="width:120px;height:120px;border-radius:24px;box-shadow:0 12px 40px rgba(0,0,0,0.35);" /></div>' } },
      { type: 'paragraph', props: { html: 'BG MOTION · WORKSHOP', style: { fontSize: '16px', letterSpacing: '4px', opacity: '0.55', marginBottom: '18px' } } },
      { type: 'heading', props: { level: 1, text: 'AI 教你賣', style: { fontSize: '72px' } } },
      { type: 'paragraph', props: { html: '讓 AI 處理行政，你專心做生意', class: 'sub', style: { marginTop: '12px' } } },
      { type: 'html', props: { content: '<div style="margin-top:44px;display:flex;gap:28px;opacity:.55;font-size:15px;"><span>3 小時實戰工作坊</span><span>|</span><span>背景模式 × 商會專屬版</span></div>' } },
    ],
  },
  // 1: Speaker — 自我介紹
  {
    theme: 'dark',
    blocks: [
      { type: 'tag', props: { text: 'SPEAKER · 講者介紹', variant: 't1' } },
      { type: 'html', props: { content: `
        <div style="display:grid;grid-template-columns:240px 1fr;gap:40px;align-items:center;margin-top:12px;">
          <div style="display:flex;flex-direction:column;align-items:center;gap:14px;">
            <img src="/bgmotion-logo.svg" alt="背景模式" style="width:200px;height:200px;border-radius:32px;box-shadow:0 18px 48px rgba(0,0,0,0.45);" />
            <div style="font-size:13px;letter-spacing:3px;opacity:.55;">BACKGROUND MODE</div>
          </div>
          <div>
            <div style="font-size:42px;font-weight:800;line-height:1.15;">林裕凱 <span style="opacity:.55;font-size:24px;font-weight:500;">Karl Lin</span></div>
            <div style="margin-top:10px;font-size:19px;color:var(--accent);">背景模式股份有限公司 · 技術研發長</div>
            <p style="margin-top:18px;font-size:17px;line-height:1.7;opacity:.85;">深耕軟體工程與技術管理約 10 年，專精技術架構設計、自動化流程優化與 AI 應用整合。結合<strong style="color:#fff;">開發者的邏輯</strong>與<strong style="color:#fff;">創業者的思維</strong>，透過 AI 與自動化技術為企業創造實質價值。</p>
            <div style="margin-top:18px;display:flex;flex-wrap:wrap;gap:10px;">
              <span style="padding:6px 12px;background:rgba(201,169,97,0.15);border:1px solid rgba(201,169,97,0.35);border-radius:20px;font-size:13px;">AI 自動化</span>
              <span style="padding:6px 12px;background:rgba(201,169,97,0.15);border:1px solid rgba(201,169,97,0.35);border-radius:20px;font-size:13px;">Prompt Engineering</span>
              <span style="padding:6px 12px;background:rgba(201,169,97,0.15);border:1px solid rgba(201,169,97,0.35);border-radius:20px;font-size:13px;">Vue / Nuxt / TypeScript</span>
              <span style="padding:6px 12px;background:rgba(201,169,97,0.15);border:1px solid rgba(201,169,97,0.35);border-radius:20px;font-size:13px;">GCP · Docker</span>
              <span style="padding:6px 12px;background:rgba(201,169,97,0.15);border:1px solid rgba(201,169,97,0.35);border-radius:20px;font-size:13px;">Directus Headless CMS</span>
            </div>
          </div>
        </div>
      `}},
    ],
  },
  // 2: Speaker — 經歷亮點
  {
    theme: 'light',
    blocks: [
      { type: 'tag', props: { text: 'Karl Lin · 經歷亮點', variant: 't1' } },
      { type: 'heading', props: { level: 2, text: '為什麼我能教你用 AI 賣東西？' } },
      { type: 'grid', props: {
        cards: [
          { title: '技術研發長 @ 背景模式', body: '<p style="opacity:.75;font-size:15px;">帶領團隊把 LLM（Gemini / Claude）整合進開發工作流，實際做到程式碼生成、文件自動化與業務流程優化。</p>' },
          { title: '逢甲資工 · 10 年實戰', body: '<p style="opacity:.75;font-size:15px;">從前端（Vue 3 / Nuxt）到雲端（GCP / Docker / Cloud Run），完整端到端的產品開發與維運經驗。</p>' },
          { title: '專業講座講師', body: '<p style="opacity:.75;font-size:15px;">頻繁受邀至各大專院校與產業論壇，主講 <strong>CI/CD、AI 驅動產業創新、DevOps</strong>，把第一線實戰拆給聽眾帶走。</p>' },
          { title: '基礎教育紮根', body: '<p style="opacity:.75;font-size:15px;">曾擔任 <strong>國中電腦老師</strong>，習慣把複雜的邏輯概念拆成易懂的步驟——這也是今天課程不會講術語的原因。</p>' },
        ],
      }},
      { type: 'html', props: { content: '<div style="margin-top:22px;padding:18px 24px;background:rgba(47,61,48,0.06);border-left:4px solid var(--brand);border-radius:8px;font-size:17px;line-height:1.6;"><strong style="color:var(--brand);">今天的課程</strong>，是我在「背景模式」把 AI 落地到真實業務流程的實戰濃縮——每個範例、每個 Prompt，都是我公司正在用的工具。</div>' } },
    ],
  },
  // 3: Agenda
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
  // 4: Prep
  {
    theme: 'light',
    blocks: [
      { type: 'heading', props: { level: 2, text: '課前準備' } },
      { type: 'paragraph', props: { html: '等等每個練習都會用到，先想好：', style: { marginBottom: '20px', opacity: '0.6' } } },
      { type: 'grid', props: {
        cards: [
          { title: '我的產品 / 服務是？', body: '<p style="opacity:.5;">例：背景模式提供的 AI 導入顧問、企業網站建置、Headless CMS 架構服務...</p>' },
          { title: '我的目標客戶是？', body: '<p style="opacity:.5;">例：中小企業主、行銷主管、想導入 AI 的行政團隊...</p>' },
          { title: '客戶最常遇到的問題？', body: '<p style="opacity:.5;">例：行政工作吃掉太多時間、找不懂 AI 的顧問、技術人才太貴...</p>' },
          { title: '我的產品如何解決？', body: '<p style="opacity:.5;">例：AI 流程自動化、模組化開發降低成本、陪跑式導入...</p>' },
        ],
      }},
    ],
  },
]
