import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export function AnimatedCounter({ 
  end, 
  duration = 2.5,
  suffix = "",
  prefix = "",
  className,
  title,
  description,
  icon,
  size = "md"
}: AnimatedCounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const sizeClasses = {
    sm: "text-2xl",
    md: "text-3xl lg:text-4xl",
    lg: "text-4xl lg:text-6xl"
  };

  return (
    <div ref={ref} className={cn("text-center", className)}>
      {icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 mb-3 mx-auto">
          {icon}
        </div>
      )}
      
      <div className={cn(
        "font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent",
        sizeClasses[size]
      )}>
        {hasAnimated ? (
          <CountUp
            start={0}
            end={end}
            duration={duration}
            separator="."
            prefix={prefix}
            suffix={suffix}
            useEasing={true}
            easingFn={(t, b, c, d) => {
              // Custom easing function for more natural feel
              return c * ((t = t / d - 1) * t * t + 1) + b;
            }}
          />
        ) : (
          `${prefix}0${suffix}`
        )}
      </div>
      
      {title && (
        <h3 className="font-semibold text-foreground mb-1 text-lg">
          {title}
        </h3>
      )}
      
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}