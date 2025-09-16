import { motion, AnimatePresence } from "framer-motion";
import React, { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

// Hover lift animation wrapper
interface HoverLiftProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  lift?: number;
}

export function HoverLift({ children, className, scale = 1.02, lift = -4 }: HoverLiftProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale,
        y: lift,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}

// Magnetic attraction effect
interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * strength;
    const offsetY = (e.clientY - centerY) * strength;
    setPosition({ x: offsetX, y: offsetY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}

// Pulse animation on hover
interface PulseHoverProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export function PulseHover({ children, className, color = "rgba(59, 130, 246, 0.3)" }: PulseHoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: color }}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 1.5, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}

// Rotate on hover
interface RotateHoverProps {
  children: ReactNode;
  className?: string;
  rotation?: number;
}

export function RotateHover({ children, className, rotation = 5 }: RotateHoverProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        rotate: rotation,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
    >
      {children}
    </motion.div>
  );
}

// Bounce animation
interface BounceProps {
  children: ReactNode;
  className?: string;
  trigger?: boolean;
}

export function Bounce({ children, className, trigger }: BounceProps) {
  return (
    <motion.div
      className={className}
      animate={trigger ? { y: [0, -10, 0] } : {}}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

// Shake animation for errors
interface ShakeProps {
  children: ReactNode;
  className?: string;
  trigger?: boolean;
}

export function Shake({ children, className, trigger }: ShakeProps) {
  return (
    <motion.div
      className={className}
      animate={trigger ? { x: [-10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

// Typewriter effect
interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function Typewriter({ text, className, delay = 0, speed = 50 }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeNextCharacter, speed);
      }
    };

    timeoutId = setTimeout(typeNextCharacter, delay);

    return () => clearTimeout(timeoutId);
  }, [text, delay, speed]);

  return <span className={className}>{displayText}</span>;
}

// Glitch effect
interface GlitchProps {
  children: ReactNode;
  className?: string;
  trigger?: boolean;
}

export function Glitch({ children, className, trigger }: GlitchProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      animate={trigger ? {
        x: [0, -2, 2, 0],
        filter: [
          "hue-rotate(0deg)",
          "hue-rotate(90deg)",
          "hue-rotate(180deg)",
          "hue-rotate(0deg)"
        ]
      } : {}}
      transition={{ duration: 0.3, repeat: trigger ? 2 : 0 }}
    >
      {children}
    </motion.div>
  );
}

// Stagger children animation
interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Stagger({ children, className, delay = 0.1 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: delay
          }
        }
      }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

// Morph shape animation
interface MorphShapeProps {
  className?: string;
  isActive?: boolean;
  fromPath: string;
  toPath: string;
}

export function MorphShape({ className, isActive, fromPath, toPath }: MorphShapeProps) {
  return (
    <svg className={className} viewBox="0 0 100 100">
      <motion.path
        d={isActive ? toPath : fromPath}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        fill="currentColor"
      />
    </svg>
  );
}