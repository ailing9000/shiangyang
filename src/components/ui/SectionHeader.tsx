import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  center = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(center && "text-center", className)}>
      {label && <p className="section-label">{label}</p>}
      <h2 className="text-2xl font-medium text-gray-900 mb-2">{title}</h2>
      {subtitle && (
        <p className="text-sm text-gray-500 leading-relaxed max-w-md">
          {subtitle}
        </p>
      )}
    </div>
  );
}
