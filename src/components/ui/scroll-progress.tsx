import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary-hover origin-left z-50 ${className}`}
      style={{ scaleX }}
    />
  );
}

// Reading progress for blog posts
interface ReadingProgressProps {
  target?: React.RefObject<HTMLElement>;
  className?: string;
}

export function ReadingProgress({ target, className }: ReadingProgressProps) {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const calculateReadingProgress = () => {
      const element = target?.current || document.documentElement;
      const totalHeight = element.scrollHeight - element.clientHeight;
      const windowScrollTop = window.scrollY;
      
      if (totalHeight > 0) {
        const progress = (windowScrollTop / totalHeight) * 100;
        setReadingProgress(Math.min(Math.max(progress, 0), 100));
      }
    };

    window.addEventListener('scroll', calculateReadingProgress);
    calculateReadingProgress(); // Calculate initial progress

    return () => window.removeEventListener('scroll', calculateReadingProgress);
  }, [target]);

  return (
    <div className={`fixed top-16 left-4 right-4 h-1 bg-gray-200 rounded-full overflow-hidden z-40 ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-primary to-primary-hover rounded-full"
        style={{ width: `${readingProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

// Circular scroll progress indicator
export function CircularScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsVisible(latest > 0.1);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      className={`fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.2 }}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg 
        className="w-6 h-6 mx-auto transform -rotate-90" 
        viewBox="0 0 36 36"
      >
        <path
          className="text-gray-300"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <motion.path
          className="text-white"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          style={{
            pathLength: scrollYProgress,
            strokeDasharray: "100, 100"
          }}
        />
      </svg>
      
      {/* Arrow up icon */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ y: 2 }}
        whileHover={{ y: 0 }}
      >
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </motion.div>
    </motion.button>
  );
}