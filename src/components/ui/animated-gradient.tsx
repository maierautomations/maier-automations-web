import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  children: React.ReactNode;
  className?: string;
  variant?: "subtle" | "bold" | "mesh";
}

export function AnimatedGradient({ 
  children, 
  className,
  variant = "subtle" 
}: AnimatedGradientProps) {
  const variants = {
    subtle: "bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50",
    bold: "bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10", 
    mesh: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-purple-600/20 to-pink-600/20"
  };

  return (
    <div className={cn(
      "relative overflow-hidden",
      variants[variant],
      className
    )}>
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl animate-[drift_20s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl animate-[drift_15s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-pink-400/25 to-blue-500/25 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 backdrop-blur-[0.5px]"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}