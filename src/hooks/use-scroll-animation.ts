import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  once?: boolean;
}

/**
 * Custom hook for GSAP scroll animations
 * @param animationFn - Function that receives gsap instance to create animations
 * @param options - ScrollTrigger options
 */
export function useScrollAnimation(
  animationFn: (gsap: typeof import('gsap').gsap) => void,
  options: ScrollAnimationOptions = {}
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      animationFn(gsap);
    }, ref.current);

    return () => ctx.revert();
  }, [animationFn]);

  return ref;
}

/**
 * Pre-built animation: Fade in from bottom
 */
export function useFadeInUp(selector: string, options: ScrollAnimationOptions = {}) {
  return useScrollAnimation(() => {
    gsap.from(selector, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector,
        start: options.start || 'top 80%',
        once: options.once !== false,
        ...options,
      },
    });
  }, options);
}

/**
 * Pre-built animation: Staggered fade in
 */
export function useStaggerFadeIn(
  selector: string,
  stagger = 0.15,
  options: ScrollAnimationOptions = {}
) {
  return useScrollAnimation(() => {
    gsap.from(selector, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector,
        start: options.start || 'top 80%',
        once: options.once !== false,
        ...options,
      },
    });
  }, options);
}

/**
 * Pre-built animation: Scale in
 */
export function useScaleIn(selector: string, options: ScrollAnimationOptions = {}) {
  return useScrollAnimation(() => {
    gsap.from(selector, {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: selector,
        start: options.start || 'top 80%',
        once: options.once !== false,
        ...options,
      },
    });
  }, options);
}
