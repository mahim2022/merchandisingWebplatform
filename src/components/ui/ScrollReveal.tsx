"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  yOffset?: number;
  threshold?: number;
};

export default function ScrollReveal({
  children,
  className,
  delayMs = 0,
  durationMs = 700,
  yOffset = 24,
  threshold = 0.16,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={
        prefersReducedMotion
          ? undefined
          : {
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : `translateY(${yOffset}px)`,
              transitionDuration: `${durationMs}ms`,
              transitionDelay: `${delayMs}ms`,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              transitionProperty: "opacity, transform",
            }
      }
    >
      {children}
    </div>
  );
}