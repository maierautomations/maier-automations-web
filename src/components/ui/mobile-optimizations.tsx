import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Touch-friendly button wrapper
interface TouchButtonProps {
  children: React.ReactNode;
  className?: string;
  onTap?: () => void;
  disabled?: boolean;
}

export function TouchButton({ children, className, onTap, disabled }: TouchButtonProps) {
  return (
    <motion.div
      className={cn(
        "min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer select-none",
        disabled && "opacity-50 pointer-events-none",
        className
      )}
      whileTap={{ scale: 0.95 }}
      onTap={onTap}
      style={{ touchAction: 'manipulation' }}
    >
      {children}
    </motion.div>
  );
}

// Optimized image with lazy loading
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  placeholder?: string;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className, 
  priority = false, 
  width, 
  height,
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzllYTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+"
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    const imgElement = document.getElementById(`img-${src}`);
    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => observer.disconnect();
  }, [src, priority]);

  return (
    <div 
      id={`img-${src}`}
      className={cn("relative overflow-hidden", className)}
      style={{ width, height }}
    >
      {/* Placeholder */}
      <img
        src={placeholder}
        alt=""
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
      />
      
      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? "eager" : "lazy"}
        />
      )}
    </div>
  );
}

// Mobile-friendly carousel with touch gestures
interface MobileCarouselProps {
  children: React.ReactNode[];
  className?: string;
  showDots?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

export function MobileCarousel({ 
  children, 
  className, 
  showDots = true, 
  autoPlay = false,
  interval = 5000 
}: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % children.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, children.length]);

  useEffect(() => {
    const containerWidth = window.innerWidth;
    const totalWidth = containerWidth * children.length;
    setDragConstraints({
      left: -(totalWidth - containerWidth),
      right: 0
    });
  }, [children.length]);

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 100;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (Math.abs(velocity) > 500 || Math.abs(offset) > threshold) {
      if (offset > 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      } else if (offset < 0 && currentIndex < children.length - 1) {
        setCurrentIndex(prev => prev + 1);
      }
    }
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="flex"
        style={{ width: `${children.length * 100}%` }}
        animate={{ x: `-${currentIndex * (100 / children.length)}%` }}
        drag="x"
        dragConstraints={dragConstraints}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {children.map((child, index) => (
          <div key={index} style={{ width: `${100 / children.length}%` }}>
            {child}
          </div>
        ))}
      </motion.div>

      {/* Dots indicator */}
      {showDots && children.length > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {children.map((_, index) => (
            <TouchButton
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200",
                currentIndex === index 
                  ? "bg-primary scale-125" 
                  : "bg-gray-300"
              )}
              onTap={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Performance monitor component
export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  useEffect(() => {
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') {
      return;
    }

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      setMetrics(prev => ({ ...prev, lcp: Math.round(lastEntry.startTime) }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((entryList) => {
      let clsValue = 0;
      entryList.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      setMetrics(prev => ({ ...prev, cls: Math.round(clsValue * 1000) / 1000 }));
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    return () => {
      lcpObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white text-xs p-2 rounded z-50">
      <div>LCP: {metrics.lcp}ms</div>
      <div>CLS: {metrics.cls}</div>
    </div>
  );
}

// Viewport height fix for mobile
export function useViewportHeight() {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);
}

// Reduced motion hook for accessibility
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}