import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "solid" | "intense";
  hover?: boolean;
}

export function GlassCard({ 
  children, 
  className,
  variant = "default",
  hover = true
}: GlassCardProps) {
  const variants = {
    default: "bg-white/10 backdrop-blur-md border border-white/20",
    solid: "bg-white/80 backdrop-blur-lg border border-white/30",
    intense: "bg-white/5 backdrop-blur-xl border border-white/10"
  };

  const hoverEffects = hover ? "hover:scale-[1.02] hover:shadow-xl hover:shadow-black/5 hover:bg-white/15" : "";

  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl transition-all duration-300 ease-out",
      variants[variant],
      hoverEffects,
      "shadow-lg shadow-black/5",
      className
    )}>
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-white/5 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
}