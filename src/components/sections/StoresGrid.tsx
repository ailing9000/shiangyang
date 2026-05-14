"use client";

import { useState } from "react";
import { stores, storeRegions } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function StoresGrid() {
  const [region, setRegion] = useState("all");

  const filtered =
    region === "all"
      ? stores
      : stores.filter((s) => s.region === region);

  return (
    <>
      {/* Region tabs */}
      <div className="flex flex-wrap gap-2 justify-center px-4 py-5">
        {storeRegions.map((r) => (
          <button
            key={r.key}
            onClick={() => setRegion(r.key)}
            className={cn(
              "px-5 py-2 rounded-full text-sm border transition-colors",
              region === r.key
                ? "bg-brand text-white border-brand"
                : "bg-white text-gray-500 border-gray-200 hover:border-brand hover:text-brand"
            )}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* Store cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto px-4 pb-14">
        {filtered.map((store) => (
          <div key={store.name} className="card p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-brand-mid flex-shrink-0" />
              <h3 className="text-sm font-medium flex-1">{store.name}</h3>
              <span className="text-[10px] bg-brand-light text-brand px-2 py-0.5 rounded-full">
                {store.region === "taoyuan" ? "桃園" : "新北"}
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              {store.address}
            </p>
            <a
              href={`tel:${store.phone.replace(/-/g, "")}`}
              className="text-xs text-brand mt-1 block hover:underline"
            >
              {store.phone}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
