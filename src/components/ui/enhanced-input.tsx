import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Eye, EyeOff, Check, AlertCircle } from "lucide-react";

interface EnhancedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
  icon?: React.ReactNode;
  showValidation?: boolean;
  variant?: "default" | "floating";
}

interface EnhancedTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  success?: string;
  showValidation?: boolean;
  variant?: "default" | "floating";
}

export const EnhancedInput = React.forwardRef<HTMLInputElement, EnhancedInputProps>(
  ({ className, label, error, success, icon, showValidation = true, variant = "default", type, ...props }, ref) => {
    const [focused, setFocused] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(!!props.value || !!props.defaultValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(!!e.target.value);
      props.onChange?.(e);
    };

    const isPasswordType = type === "password";
    const inputType = isPasswordType && showPassword ? "text" : type;

    if (variant === "floating") {
      return (
        <div className="relative">
          <motion.div
            className="relative"
            whileTap={{ scale: 0.995 }}
          >
            <Input
              ref={ref}
              type={inputType}
              className={cn(
                "peer pt-6 pb-2 px-3 transition-all duration-200",
                "focus:ring-2 focus:ring-primary/20 focus:border-primary",
                "placeholder-transparent",
                error && "border-red-300 focus:border-red-500 focus:ring-red-500/20",
                success && "border-green-300 focus:border-green-500 focus:ring-green-500/20",
                icon && "pl-10",
                isPasswordType && "pr-10",
                className
              )}
              placeholder={label}
              onFocus={(e) => {
                setFocused(true);
                props.onFocus?.(e);
              }}
              onBlur={(e) => {
                setFocused(false);
                props.onBlur?.(e);
              }}
              onChange={handleChange}
              {...props}
            />
            
            {/* Floating label */}
            <motion.label
              className={cn(
                "absolute left-3 transition-all duration-200 pointer-events-none",
                "text-muted-foreground",
                focused || hasValue
                  ? "top-1.5 text-xs text-primary"
                  : "top-1/2 -translate-y-1/2 text-sm",
                icon && (focused || hasValue ? "left-3" : "left-10"),
                error && "text-red-500",
                success && "text-green-500"
              )}
              animate={{
                scale: focused || hasValue ? 0.85 : 1,
                y: focused || hasValue ? -8 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              {label}
            </motion.label>

            {/* Left icon */}
            {icon && (
              <motion.div
                className={cn(
                  "absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-200",
                  focused ? "text-primary" : "text-muted-foreground",
                  error && "text-red-500",
                  success && "text-green-500"
                )}
                animate={{ scale: focused ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {icon}
              </motion.div>
            )}

            {/* Password toggle */}
            {isPasswordType && (
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setShowPassword(!showPassword)}
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  animate={{ rotate: showPassword ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </motion.div>
              </button>
            )}

            {/* Validation icons */}
            {showValidation && (error || success) && !isPasswordType && (
              <motion.div
                className="absolute right-3 top-1/2 -translate-y-1/2"
                initial={{ scale: 0, rotate: 90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {error && <AlertCircle className="h-4 w-4 text-red-500" />}
                {success && <Check className="h-4 w-4 text-green-500" />}
              </motion.div>
            )}
          </motion.div>

          {/* Error/Success messages */}
          <AnimatePresence>
            {(error || success) && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-1"
              >
                {error && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {error}
                  </p>
                )}
                {success && (
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <Check className="h-3 w-3" />
                    {success}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    // Default variant
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        
        <motion.div
          className="relative"
          whileTap={{ scale: 0.995 }}
        >
          <Input
            ref={ref}
            type={inputType}
            className={cn(
              "transition-all duration-200",
              "focus:ring-2 focus:ring-primary/20 focus:border-primary",
              error && "border-red-300 focus:border-red-500 focus:ring-red-500/20",
              success && "border-green-300 focus:border-green-500 focus:ring-green-500/20",
              icon && "pl-10",
              isPasswordType && "pr-10",
              className
            )}
            onFocus={(e) => {
              setFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              props.onBlur?.(e);
            }}
            onChange={handleChange}
            {...props}
          />
          
          {/* Left icon */}
          {icon && (
            <motion.div
              className={cn(
                "absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-200",
                focused ? "text-primary" : "text-muted-foreground",
                error && "text-red-500",
                success && "text-green-500"
              )}
              animate={{ scale: focused ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {icon}
            </motion.div>
          )}

          {/* Password toggle */}
          {isPasswordType && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors duration-200"
              onClick={() => setShowPassword(!showPassword)}
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: showPassword ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </motion.div>
            </button>
          )}

          {/* Validation icons */}
          {showValidation && (error || success) && !isPasswordType && (
            <motion.div
              className="absolute right-3 top-1/2 -translate-y-1/2"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {error && <AlertCircle className="h-4 w-4 text-red-500" />}
              {success && <Check className="h-4 w-4 text-green-500" />}
            </motion.div>
          )}
        </motion.div>

        {/* Error/Success messages */}
        <AnimatePresence>
          {(error || success) && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {error && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {error}
                </p>
              )}
              {success && (
                <p className="text-xs text-green-500 flex items-center gap-1">
                  <Check className="h-3 w-3" />
                  {success}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

EnhancedInput.displayName = "EnhancedInput";

export const EnhancedTextarea = React.forwardRef<HTMLTextAreaElement, EnhancedTextareaProps>(
  ({ className, label, error, success, showValidation = true, variant = "default", ...props }, ref) => {
    const [focused, setFocused] = React.useState(false);

    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        
        <motion.div
          className="relative"
          whileTap={{ scale: 0.995 }}
        >
          <Textarea
            ref={ref}
            className={cn(
              "transition-all duration-200 resize-none",
              "focus:ring-2 focus:ring-primary/20 focus:border-primary",
              error && "border-red-300 focus:border-red-500 focus:ring-red-500/20",
              success && "border-green-300 focus:border-green-500 focus:ring-green-500/20",
              className
            )}
            onFocus={(e) => {
              setFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              props.onBlur?.(e);
            }}
            {...props}
          />

          {/* Validation icons */}
          {showValidation && (error || success) && (
            <motion.div
              className="absolute right-3 top-3"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {error && <AlertCircle className="h-4 w-4 text-red-500" />}
              {success && <Check className="h-4 w-4 text-green-500" />}
            </motion.div>
          )}
        </motion.div>

        {/* Error/Success messages */}
        <AnimatePresence>
          {(error || success) && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {error && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {error}
                </p>
              )}
              {success && (
                <p className="text-xs text-green-500 flex items-center gap-1">
                  <Check className="h-3 w-3" />
                  {success}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

EnhancedTextarea.displayName = "EnhancedTextarea";