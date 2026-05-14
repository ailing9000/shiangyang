import type { Metadata } from "next";
import StoresGrid from "@/components/sections/StoresGrid";

export const metadata: Metadata = {
  title: "門市資訊 | 向陽冬瓜肉飯",
  description: "向陽冬瓜肉飯全台 23 間門市資訊，桃園・新北。",
};

export default function StoresPage() {
  return (
    <>
      <div className="bg-brand-light py-10 px-4 text-center">
        <p className="section-label">全台門市</p>
        <h1 className="text-2xl font-medium text-brand mt-1">
          找到你附近的向陽
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          23 間門市，在桃園與新北持續展店中
        </p>
      </div>

      <StoresGrid />
    </>
  );
}
