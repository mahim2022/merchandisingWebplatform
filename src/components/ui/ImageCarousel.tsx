"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselSlide = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  slides: CarouselSlide[];
  width: number;
  height: number;
  className?: string;
  autoPlayIntervalMs?: number;
  priorityFirst?: boolean;
};

export default function ImageCarousel({
  slides,
  width,
  height,
  className,
  autoPlayIntervalMs = 4500,
  priorityFirst = false,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayIntervalMs);

    return () => window.clearInterval(interval);
  }, [slides.length, autoPlayIntervalMs]);

  if (slides.length === 0) {
    return null;
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className={cn(
        "relative mx-auto mt-10 max-w-6xl overflow-hidden rounded-lg border border-border shadow-lg",
        className,
      )}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.src} className="w-full shrink-0">
            <Image
              src={slide.src}
              alt={slide.alt}
              width={width}
              height={height}
              className="h-auto w-full object-cover"
              priority={priorityFirst && index === 0}
            />
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white transition hover:bg-black/60"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white transition hover:bg-black/60"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((slide, index) => (
              <button
                key={`dot-${slide.src}`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition",
                  index === currentIndex ? "bg-white" : "bg-white/45 hover:bg-white/70",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}