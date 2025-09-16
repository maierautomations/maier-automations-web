import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface WizardStep {
  id: number;
  label: string;
  icon?: React.ReactNode;
  isOptional?: boolean;
}

interface WizardProgressProps {
  steps: WizardStep[];
  currentStep: number;
  className?: string;
}

export function WizardProgress({ steps, currentStep, className }: WizardProgressProps) {
  const totalSteps = steps.length;
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className={cn("w-full", className)}>
      {/* Circular Progress Indicator */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          {/* Background circle */}
          <div className="w-20 h-20 rounded-full border-4 border-gray-200">
            {/* Progress circle */}
            <svg className="absolute inset-0 w-20 h-20 -rotate-90" viewBox="0 0 80 80">
              <motion.circle
                cx="40"
                cy="40"
                r="36"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray={226.2} // 2π * 36
                initial={{ strokeDashoffset: 226.2 }}
                animate={{ strokeDashoffset: 226.2 - (226.2 * progressPercentage) / 100 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="drop-shadow-sm"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--primary-hover))" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xl font-bold text-primary">
                {currentStep + 1}
              </div>
              <div className="text-xs text-muted-foreground">
                von {totalSteps}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="relative">
        {/* Progress line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
        <motion.div 
          className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-hover -translate-y-1/2 z-10"
          initial={{ width: "0%" }}
          animate={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        {/* Step nodes */}
        <div className="relative flex justify-between z-20">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            const isUpcoming = index > currentStep;
            
            return (
              <motion.div
                key={step.id}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {/* Step circle */}
                <motion.div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    isCompleted && "bg-primary border-primary text-white shadow-lg shadow-primary/20",
                    isCurrent && "bg-white border-primary text-primary ring-4 ring-primary/10 shadow-lg",
                    isUpcoming && "bg-gray-50 border-gray-300 text-gray-400"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isCompleted ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                    >
                      <Check className="w-5 h-5" />
                    </motion.div>
                  ) : step.icon ? (
                    <motion.div
                      animate={{ 
                        scale: isCurrent ? [1, 1.1, 1] : 1,
                        rotate: isCurrent ? [0, 5, -5, 0] : 0 
                      }}
                      transition={{ 
                        duration: isCurrent ? 2 : 0,
                        repeat: isCurrent ? Infinity : 0,
                        repeatType: "reverse"
                      }}
                    >
                      {step.icon}
                    </motion.div>
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </motion.div>
                
                {/* Step label */}
                <div className="mt-2 text-center max-w-20">
                  <div className={cn(
                    "text-xs font-medium transition-colors duration-300",
                    (isCompleted || isCurrent) ? "text-foreground" : "text-muted-foreground"
                  )}>
                    {step.label}
                  </div>
                  {step.isOptional && (
                    <div className="text-xs text-muted-foreground mt-1">
                      (optional)
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Current step info */}
      <motion.div 
        className="text-center mt-6"
        key={currentStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-lg font-semibold text-foreground mb-1">
          {steps[currentStep]?.label}
        </div>
        <div className="text-sm text-muted-foreground">
          Schritt {currentStep + 1} von {totalSteps}
          {steps[currentStep]?.isOptional && " (optional)"}
        </div>
      </motion.div>
    </div>
  );
}