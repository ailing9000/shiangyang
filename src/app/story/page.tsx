import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "品牌故事 | 向陽冬瓜肉飯",
  description: "向陽冬瓜肉飯的品牌故事，以經營顧客健康為目標。",
};

const pills = ["天然食材", "少油低鹽", "保留營養", "家庭溫度", "無過多烹煮"];

export default function StoryPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 pb-16">
      {/* Brand image */}
      <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-8">
        <Image
          src="/images/brand-banner.jpg"
          alt="向陽冬瓜肉飯品牌形象"
          fill
          className="object-cover object-center"
        />
      </div>

      <p className="section-label">關於我們</p>
      <h1 className="text-2xl md:text-3xl font-medium text-brand leading-snug mt-2 mb-5">
        一碗飯的初心，<br />一段關於健康的故事
      </h1>
      <p className="text-base text-gray-500 leading-loose mb-8">
        我們相信，好的食物不需要過多加工。<br />
        每一個向陽便當，都是對天然原味的一份堅持。
      </p>

      <hr className="border-gray-100 mb-8" />

      <h2 className="text-xl font-medium mb-3">為什麼是「向陽」？</h2>
      <p className="text-sm text-gray-500 leading-loose mb-6">
        向陽，是面向陽光的意思。就像植物需要陽光才能生長，人的身體也需要乾淨、天然的食物才能真正健康。我們創立向陽冬瓜肉飯，正是想為每一個忙碌的上班族、認真訓練的健身族、注重飲食的現代人，提供一個值得信賴的選擇。
      </p>

      <h2 className="text-xl font-medium mb-3">冬瓜肉飯的故事</h2>
      <p className="text-sm text-gray-500 leading-loose mb-6">
        冬瓜，是台灣傳統廚房裡最常見的食材之一。它清甜、低卡、含水量高，與肉燥一起慢燉，便成了懷念阿嬤味道的靈魂料理。我們以「冬瓜肉飯」為名，不只是一道菜，更是一份對家常味道的致敬。
      </p>

      <h2 className="text-xl font-medium mb-4">我們的承諾</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {pills.map((p) => (
          <span
            key={p}
            className="bg-brand-light text-brand text-sm px-4 py-2 rounded-full border border-brand/15"
          >
            {p}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-500 leading-loose mb-8">
        我們力求少油、低鹽，沒有過多烹煮的家庭料理，保持天然原味與營養。讓每一餐都是對身體的投資，而非負擔。
      </p>

      {/* Stats */}
      <div className="bg-brand-light rounded-2xl p-7 text-center mb-10">
        <div className="text-4xl font-medium text-brand">23+</div>
        <div className="text-xs text-gray-500 mt-1 mb-5">桃園 · 新北展店中</div>
        <div className="border-t border-brand/10 pt-5 flex justify-center gap-10">
          {[
            { num: "14", label: "種超級食物" },
            { num: "5", label: "大核心訴求" },
            { num: "9", label: "款招牌便當" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-medium text-brand">{s.num}</div>
              <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link href="/menu" className="btn-primary inline-block">
          探索我們的菜單 →
        </Link>
      </div>
    </div>
  );
}
