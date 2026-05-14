import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/menu", label: "菜單" },
  { href: "/superfood", label: "超級食物" },
  { href: "/story", label: "品牌故事" },
  { href: "/stores", label: "門市資訊" },
  { href: "/order", label: "訂餐" },
];

export default function Footer() {
  return (
    <footer className="bg-brand text-white py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          {/* Logo */}
          <div className="relative h-9 w-24 opacity-90">
            <Image
              src="/images/logo.jpg"
              alt="向陽冬瓜肉飯"
              fill
              className="object-contain brightness-0 invert"
            />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="text-xs text-white/60 text-center sm:text-right space-y-0.5">
            <p>Facebook｜向陽冬瓜肉飯</p>
            <p>Instagram｜shiangyangtw</p>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-white/10 text-center text-[11px] text-white/40">
          © 2025 向陽冬瓜肉飯 · 桃園 · 新北 · 全台展店中
        </div>
      </div>
    </footer>
  );
}
