import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <>
      {/* Brand image banner */}
      <div className="relative w-full overflow-hidden bg-brand-light">
        <Image
          src="/images/brand-banner.jpg"
          alt="向陽冬瓜肉飯 — 經營顧客健康"
          width={1200}
          height={400}
          className="w-full object-cover max-h-80"
          priority
        />
        {/* CTA overlay */}
        <div className="absolute inset-0 flex items-end justify-center pb-10 px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/menu" className="btn-primary shadow-sm">
              查看今日菜單 →
            </Link>
            <Link
              href="/story"
              className="bg-white/90 text-brand border border-brand px-7 py-3 rounded-full text-sm font-medium hover:bg-white transition-colors"
            >
              了解我們的故事
            </Link>
          </div>
        </div>
      </div>

      {/* Tagline strip */}
      <div className="bg-white border-b border-gray-100 py-8 px-4 text-center">
        <p className="text-sm md:text-base text-gray-600 leading-loose max-w-lg mx-auto">
          少油、低鹽、天然原味。<br className="sm:hidden" />
          擺脫傳統便當重油偏鹹的刻板印象，<br />
          用家庭料理的溫度，照顧你每一餐。
        </p>
        <div className="mt-5 flex flex-wrap gap-2 justify-center">
          {["無過多添加物", "少油低鹽", "14 種超級食物", "天然原味", "全五穀選項"].map(
            (tag) => (
              <span
                key={tag}
                className="bg-brand-light text-brand text-xs px-3.5 py-1.5 rounded-full border border-brand/10"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </>
  );
}
