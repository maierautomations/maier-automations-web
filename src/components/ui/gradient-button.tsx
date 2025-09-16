import { forwardRef } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonProps {
  gradient?: "primary" | "success" | "warning" | "purple";
  glow?: boolean;
  animate?: boolean;
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, gradient = "primary", glow = false, animate = true, ...props }, ref) => {
    const gradients = {
      primary: "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700",
      success: "bg-gradient-to-r from-green-500 via-emerald-600 to-green-700",
      warning: "bg-gradient-to-r from-amber-500 via-orange-600 to-amber-700",
      purple: "bg-gradient-to-r from-purple-500 via-violet-600 to-purple-700"
    };

    const glowEffects = {
      primary: "shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40",
      success: "shadow-lg shadow-green-500/25 hover:shadow-green-500/40", 
      warning: "shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40",
      purple: "shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
    };

    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden border-0 text-white font-semibold",
          gradients[gradient],
          glow && glowEffects[gradient],
          animate && "transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1",
          "hover:shadow-2xl",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
          className
        )}
        {...props}
      >
        {props.children}
      </Button>
    );
  }
);

GradientButton.displayName = "GradientButton";

export { GradientButton };