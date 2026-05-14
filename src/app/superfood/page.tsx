import type { Metadata } from "next";
import Link from "next/link";
import { superfoods } from "@/lib/data";

export const metadata: Metadata = {
  title: "14種超級食物 | 向陽冬瓜肉飯",
  description: "改變一生的 14 種超級食物，向陽冬瓜肉飯融入每道料理中。",
};

export default function SuperfoodPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-brand py-14 px-4 text-center">
        <p className="text-[11px] text-white/60 tracking-widest uppercase mb-3">
          健康知識
        </p>
        <h1 className="text-2xl md:text-3xl font-medium text-white leading-snug">
          改變一生的<br />14 種超級食物
        </h1>
        <p className="text-white/70 text-sm mt-3">
          向陽的每一道料理，都融入這些食材對你身體的好處
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {superfoods.map((sf) => (
          <div key={sf.id} className="card p-5 flex items-start gap-4">
            {/* Number */}
            <div className="w-8 h-8 rounded-full bg-brand text-white text-sm font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
              {sf.id}
            </div>
            <div>
              <span className="inline-block text-[10px] bg-brand-light text-brand-mid px-2 py-0.5 rounded-full mb-2">
                {sf.tag}
              </span>
              <h3 className="text-sm font-medium text-brand mb-1.5">
                {sf.name}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">{sf.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 pb-14">
        <div className="bg-brand-light rounded-2xl p-8 text-center">
          <h2 className="text-lg font-medium text-brand mb-2">
            向陽的料理，就是這 14 種食材精神的體現
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto mb-6">
            少油、低鹽、天然原味，不過度烹調，讓食材的營養完整保留在你的每一餐之中。
          </p>
          <Link href="/menu" className="btn-primary inline-block">
            查看菜單，找到你的超級食物 →
          </Link>
        </div>
      </div>
    </>
  );
}
