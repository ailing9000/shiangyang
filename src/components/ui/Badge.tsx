import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "amber" | "green";
  className?: string;
}

export default function Badge({
  children,
  variant = "amber",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block text-[10px] px-2.5 py-0.5 rounded-full font-medium",
        variant === "amber" && "bg-amber-light text-amber-brand",
        variant === "green" && "bg-brand-light text-brand",
        className
      )}
    >
      {children}
    </span>
  );
}
