import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  glowColor?: "blue" | "purple" | "green" | "orange";
  interactive?: boolean;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6",
      "auto-rows-[minmax(200px,auto)]",
      className
    )}>
      {children}
    </div>
  );
}

export function BentoCard({ 
  children, 
  className,
  size = "md",
  glowColor = "blue",
  interactive = true
}: BentoCardProps) {
  const sizeClasses = {
    sm: "lg:col-span-1 lg:row-span-1",
    md: "lg:col-span-2 lg:row-span-1", 
    lg: "lg:col-span-2 lg:row-span-2",
    xl: "lg:col-span-3 lg:row-span-2"
  };

  const glowColors = {
    blue: "hover:shadow-blue-500/20",
    purple: "hover:shadow-purple-500/20",
    green: "hover:shadow-green-500/20",
    orange: "hover:shadow-orange-500/20"
  };

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-white/80 via-white/60 to-white/40",
        "backdrop-blur-sm border border-white/30",
        "shadow-lg shadow-black/5",
        sizeClasses[size],
        interactive && [
          "transition-all duration-300 ease-out hover:scale-[1.02]",
          "hover:shadow-xl hover:shadow-black/10",
          glowColors[glowColor]
        ],
        className
      )}
      whileHover={interactive ? { y: -4 } : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-white/5 pointer-events-none"></div>
      
      {/* Hover glow */}
      {interactive && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}