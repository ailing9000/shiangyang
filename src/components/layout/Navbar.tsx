"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "首頁" },
  { href: "/menu", label: "菜單" },
  { href: "/superfood", label: "超級食物" },
  { href: "/story", label: "品牌故事" },
  { href: "/stores", label: "門市資訊" },
  { href: "/order", label: "訂餐" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-14 w-36 overflow-hidden rounded">
            <Image
              src="/images/logo.png"
              alt="向陽冬瓜肉飯"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm pb-0.5 border-b-2 transition-colors",
                pathname === link.href
                  ? "text-brand border-brand font-medium"
                  : "text-gray-500 border-transparent hover:text-brand"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/order" className="btn-primary hidden sm:inline-block">
            立即訂餐
          </Link>
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setOpen(!open)}
            aria-label="開啟選單"
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block py-2.5 text-sm border-b border-gray-50",
                pathname === link.href
                  ? "text-brand font-medium"
                  : "text-gray-600"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/order"
            onClick={() => setOpen(false)}
            className="btn-primary block text-center mt-3"
          >
            立即訂餐
          </Link>
        </div>
      )}
    </header>
  );
}
