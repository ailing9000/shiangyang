import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "訂餐 | 向陽冬瓜肉飯",
  description: "線上訂餐、外送到府，或直接電話預訂向陽冬瓜肉飯。",
};

const options = [
  {
    icon: "🛵",
    title: "外送到府",
    desc: "透過外送平台訂餐，送到你的辦公室或家門口",
    cta: "UberEats 訂餐 →",
    href: "https://www.ubereats.com",
    external: true,
  },
  {
    icon: "🛍️",
    title: "門市自取",
    desc: "電話預訂，指定時間到就近門市取餐，省時方便",
    cta: "查看門市電話 →",
    href: "/stores",
    external: false,
  },
  {
    icon: "👥",
    title: "企業訂餐",
    desc: "團體訂餐、員工福利、會議餐盒，歡迎洽詢合作",
    cta: "聯絡我們 →",
    href: "mailto:info@xiangyang.com.tw",
    external: true,
  },
];

export default function OrderPage() {
  return (
    <>
      <div className="bg-brand-light py-10 px-4 text-center">
        <p className="section-label">線上訂餐</p>
        <h1 className="text-2xl font-medium text-brand mt-1">
          選擇你的訂餐方式
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          外送到府、自取方便，或直接電話預訂
        </p>
      </div>

      {/* Options */}
      <div className="max-w-3xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {options.map((opt) => (
          <div key={opt.title} className="card p-6 text-center flex flex-col">
            <div className="text-3xl mb-4">{opt.icon}</div>
            <h3 className="text-sm font-medium mb-2">{opt.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed flex-1">
              {opt.desc}
            </p>
            {opt.external ? (
              <a
                href={opt.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary block mt-5 text-center"
              >
                {opt.cta}
              </a>
            ) : (
              <Link href={opt.href} className="btn-primary block mt-5 text-center">
                {opt.cta}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="max-w-3xl mx-auto px-4 pb-8">
        <div className="bg-amber-light border border-amber-brand/20 rounded-xl px-4 py-3 text-xs text-amber-900 leading-relaxed">
          ℹ️ 全五穀便當升級僅需加收 $5，增加膳食纖維攝取，點餐時告知門市人員即可。
        </div>
      </div>

      <div className="text-center pb-14">
        <Link href="/stores" className="btn-outline inline-block">
          📍 查看所有門市
        </Link>
      </div>
    </>
  );
}
