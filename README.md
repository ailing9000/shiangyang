# 向陽冬瓜肉飯 — 官方網站

Next.js 14 + React + Tailwind CSS + App Router

---

## 🚀 安裝與啟動

```bash
# 1. 安裝依賴
npm install

# 2. 本地開發
npm run dev
# 開啟 http://localhost:3000

# 3. 建置
npm run build

# 4. 正式啟動
npm start
```

---

## 📁 專案結構

```
xiangyang/
├── public/
│   └── images/           ← 放品牌圖片（見下方說明）
├── src/
│   ├── app/              ← App Router 頁面
│   │   ├── page.tsx          首頁
│   │   ├── menu/page.tsx     菜單頁
│   │   ├── superfood/page.tsx  超級食物
│   │   ├── story/page.tsx    品牌故事
│   │   ├── stores/page.tsx   門市資訊
│   │   ├── order/page.tsx    訂餐入口
│   │   ├── layout.tsx        Root Layout
│   │   └── globals.css       全域樣式
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    ← 導覽列（含手機選單）
│   │   │   └── Footer.tsx    ← 頁尾
│   │   ├── sections/
│   │   │   ├── HeroBanner.tsx
│   │   │   ├── ValuesSection.tsx
│   │   │   ├── SuperfoodStrip.tsx
│   │   │   ├── FeaturedDishes.tsx
│   │   │   ├── MenuGrid.tsx      ← 含篩選功能（Client Component）
│   │   │   └── StoresGrid.tsx    ← 含地區篩選（Client Component）
│   │   └── ui/
│   │       ├── Badge.tsx
│   │       └── SectionHeader.tsx
│   └── lib/
│       ├── data.ts       ← 所有內容資料（菜單、門市、超級食物）
│       └── utils.ts      ← cn() helper
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## 🖼 圖片說明

請將以下圖片放入 `public/images/` 資料夾：

| 檔名 | 用途 |
|------|------|
| `logo.jpg` | 導覽列 Logo（向陽-片尾商標.jpg）|
| `brand-banner.jpg` | 首頁 Hero & 品牌故事（向陽-片尾商標.jpg）|
| `menu-salmon.jpg` | 挪威鮭魚飯 |
| `menu-chicken.jpg` | 招牌雞腿排飯 |
| `menu-spicy-chicken.jpg` | 煎辣味雞腿排飯 |
| `menu-dongua.jpg` | 冬瓜肉飯盒 |
| `menu-veg.jpg` | 健康菜飯 |
| `menu-pork.jpg` | 煎豬排飯 |
| `menu-saury.jpg` | 秋刀魚飯 |
| `menu-mackerel.jpg` | 薄鹽鯖魚飯 |
| `menu-halibut.jpg` | 大比目魚飯 |
| `og-image.jpg` | Open Graph 分享圖 |

> 菜單餐點圖片可從菜單海報（向陽菜單.jpg）裁切，或先用佔位圖替代。

---

## 🎨 修改說明

### 更換品牌色
編輯 `tailwind.config.ts`：
```ts
brand: {
  DEFAULT: "#1A5C2A",   // ← 主色
  mid: "#2d7a3a",       // ← 中間色
  light: "#e8f5e1",     // ← 淺色背景
},
```

### 修改菜單內容
編輯 `src/lib/data.ts` 中的 `menuItems` 陣列。

### 新增門市
編輯 `src/lib/data.ts` 中的 `stores` 陣列。

---

## ☁️ 部署到 Vercel

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 部署
vercel

# 或直接連接 GitHub repo 到 Vercel Dashboard
# https://vercel.com/new
```

---

## 🛠 Lovable 編輯支援

此專案使用標準 Next.js + Tailwind 架構，可直接匯入 Lovable：
1. 將專案推送到 GitHub
2. 在 Lovable 中選擇「Import from GitHub」
3. 選擇此 repo 即可開始視覺化編輯
