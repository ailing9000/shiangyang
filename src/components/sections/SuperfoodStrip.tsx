import Link from "next/link";

const tags = ["豆類","藍莓","青花椰菜","燕麥","南瓜","柳橙","鮭魚","黃豆","菠菜","茶","番茄","雞肉","堅果","優格"];

export default function SuperfoodStrip() {
  return (
    <section className="bg-brand py-12 px-4 text-center">
      <h2 className="text-xl font-medium text-white mb-2">
        改變一生的 14 種超級食物
      </h2>
      <p className="text-white/70 text-sm mb-6">
        菜單設計融入超級食物概念，讓每一口都對身體有益
      </p>
      <div className="flex flex-wrap gap-2 justify-center mb-7 max-w-2xl mx-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-white/12 border border-white/20 text-white/90 text-xs px-3.5 py-1.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href="/superfood"
        className="inline-block bg-white text-brand text-sm font-medium px-6 py-2.5 rounded-full hover:bg-brand-light transition-colors"
      >
        了解每種食物的健康功效 →
      </Link>
    </section>
  );
}
