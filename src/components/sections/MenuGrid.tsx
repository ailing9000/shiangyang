"use client";

import { useState } from "react";
import Image from "next/image";
import { menuItems, menuCategories } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export default function MenuGrid() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <>
      {/* Category filter */}
      <div className="flex justify-center py-5 px-4">
        <div className="flex bg-white border border-gray-100 rounded-full p-1 gap-1">
          {menuCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
                active === cat.key
                  ? "bg-brand text-white"
                  : "text-gray-500 hover:text-brand"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto px-4 pb-10">
        {filtered.map((item) => (
          <div key={item.id} className="card overflow-hidden">
            {/* Image */}
            <div className="relative h-36 bg-brand-light">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {item.badge && (
                <div className="absolute top-2 left-2">
                  <Badge
                    variant={item.badge === "可選素食" ? "green" : "amber"}
                  >
                    {item.badge}
                  </Badge>
                </div>
              )}
            </div>

            {/* Body */}
            <div className="p-3.5">
              <h3 className="text-sm font-medium text-brand mb-1">
                {item.name}
              </h3>
              <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2">
                {item.desc}
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-lg font-medium text-brand">
                  ${item.price}
                </span>
                <button
                  className="w-7 h-7 rounded-full bg-brand text-white flex items-center justify-center text-base leading-none"
                  aria-label={`加入 ${item.name}`}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* VIP box */}
      <div className="max-w-5xl mx-auto px-4 pb-10">
        <div className="bg-[#0f3a1a] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-medium text-lg">VIP 海陸大餐</h3>
            <p className="text-white/60 text-xs mt-1">
              雙主菜組合而成的海陸大餐，是你會員訂餐的好選擇
            </p>
          </div>
          <div className="text-right">
            <div className="text-[#f5c842] text-3xl font-medium">$300</div>
            <div className="text-white/40 text-xs">雙主菜 · 四樣配菜</div>
          </div>
        </div>
      </div>

      {/* Five grain note */}
      <div className="max-w-5xl mx-auto px-4 pb-12">
        <div className="bg-amber-light border border-amber-brand/20 rounded-xl px-4 py-3 text-xs text-amber-900 leading-relaxed">
          ℹ️ 全五穀便當升級僅需加收 $5，增加膳食纖維攝取，點餐時告知門市人員即可。
        </div>
      </div>
    </>
  );
}
