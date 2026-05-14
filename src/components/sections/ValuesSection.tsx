import SectionHeader from "@/components/ui/SectionHeader";

const values = [
  { icon: "🌿", title: "天然", desc: "堅持選用天然食材，保留食物最純粹的滋味。" },
  { icon: "💚", title: "健康", desc: "少油、低鹽，結合 14 種超級食物對人體的好處。" },
  { icon: "🍱", title: "美味", desc: "家庭料理的溫度，讓健康吃起來也令人滿足。" },
  { icon: "✨", title: "乾淨", desc: "嚴格把關廚房衛生，每一個細節都清潔透明。" },
  { icon: "🏠", title: "舒適", desc: "讓每一餐都是放鬆的享受，而非匆忙的填飽。" },
];

export default function ValuesSection() {
  return (
    <section className="py-14 px-4 max-w-5xl mx-auto">
      <SectionHeader
        label="我們的承諾"
        title="五大核心訴求"
        subtitle="每一個便當，都是我們對你健康的承諾。天然、健康、美味、乾淨、舒適，缺一不可。"
      />
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {values.map((v) => (
          <div key={v.title} className="card p-5">
            <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center mb-3 text-lg">
              {v.icon}
            </div>
            <h3 className="text-sm font-medium mb-1.5">{v.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
