import Link from "next/link";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";

const featured = [
  { name: "挪威鮭魚飯", sub: "高蛋白・EPA&DHA", price: 220, badge: "人氣招牌", badgeVariant: "amber" as const },
  { name: "招牌雞腿排飯", sub: "去骨・秘製醃料", price: 120, badge: "人氣招牌", badgeVariant: "amber" as const },
  { name: "健康菜飯", sub: "六樣配菜・均衡", price: 95, badge: "可選素食", badgeVariant: "green" as const },
];

export default function FeaturedDishes() {
  return (
    <section className="py-14 px-4 max-w-5xl mx-auto text-center">
      <SectionHeader label="人氣選擇" title="今日推薦" center />
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {featured.map((dish) => (
          <div key={dish.name} className="card p-5 w-44 text-left">
            <Badge variant={dish.badgeVariant} className="mb-3">
              {dish.badge}
            </Badge>
            <h3 className="text-sm font-medium text-brand">{dish.name}</h3>
            <p className="text-xs text-gray-400 mt-1">{dish.sub}</p>
            <p className="text-xl font-medium text-brand mt-3">
              ${dish.price}
            </p>
          </div>
        ))}
      </div>
      <Link href="/menu" className="btn-primary inline-block mt-8">
        查看完整菜單 →
      </Link>
    </section>
  );
}
