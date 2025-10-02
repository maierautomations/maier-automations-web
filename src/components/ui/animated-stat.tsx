import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
  decimals?: number;
}

export function AnimatedStat({
  value,
  suffix = "",
  prefix = "",
  label,
  icon: Icon,
  className = "",
  decimals = 0
}: AnimatedStatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`text-center group ${className}`}>
      {Icon && (
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-cyan-500/20 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-emerald-500/25 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-8 h-8 text-emerald-500" />
        </div>
      )}
      <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent mb-2">
        {prefix}
        {isInView && (
          <CountUp
            end={value}
            duration={2.5}
            separator=","
            suffix={suffix}
            decimals={decimals}
          />
        )}
      </div>
      <div className="text-slate-400 text-sm lg:text-base">{label}</div>
    </div>
  );
}
