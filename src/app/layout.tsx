import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const noto = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "向陽冬瓜肉飯 — 經營顧客健康",
  description:
    "少油、低鹽、天然原味。擺脫傳統便當重油偏鹹的刻板印象，用家庭料理的溫度照顧你每一餐。桃園・新北 23 間門市。",
  keywords: "向陽冬瓜肉飯, 健康便當, 桃園便當, 新北便當, 超級食物",
  openGraph: {
    title: "向陽冬瓜肉飯",
    description: "少油・低鹽・天然原味 — 經營顧客健康",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={noto.variable}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
