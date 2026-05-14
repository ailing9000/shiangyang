import type { Metadata } from "next";
import MenuGrid from "@/components/sections/MenuGrid";

export const metadata: Metadata = {
  title: "菜單 | 向陽冬瓜肉飯",
  description: "向陽冬瓜肉飯完整菜單，少油低鹽，健康原味。",
};

export default function MenuPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-brand-light py-10 px-4 text-center">
        <p className="section-label">便當菜單</p>
        <h1 className="text-2xl font-medium text-brand mt-1">
          SHIANG YANG MENU
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          少油 · 低鹽 · 天然原味 · 全五穀加 $5
        </p>
      </div>

      <MenuGrid />
    </>
  );
}
