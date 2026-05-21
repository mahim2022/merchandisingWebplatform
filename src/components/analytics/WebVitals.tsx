"use client";

import { useEffect } from "react";

function sendToGtag(name: string, value: number, delta?: number) {
  if (typeof window === "undefined") return;
  // @ts-ignore
  if (window.gtag) {
    // @ts-ignore
    window.gtag("event", name, {
      event_category: "Web Vitals",
      value: Math.round(name === "CLS" ? value * 1000 : value),
      event_label: name,
      // nonInteraction to avoid affecting bounce rate in some analytics setups
      non_interaction: true,
    });
  }
}

export default function WebVitals() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // LCP
    try {
      const po = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          // @ts-ignore
          if (entry.startTime) sendToGtag("LCP", entry.startTime);
        }
      });
      po.observe({ type: "largest-contentful-paint", buffered: true });
    } catch (e) {
      // ignore
    }

    // CLS
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries() as any) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        sendToGtag("CLS", clsValue);
      });
      clsObserver.observe({ type: "layout-shift", buffered: true });
    } catch (e) {
      // ignore
    }

    // FID / INP via event timing if available
    try {
      const po2 = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any) {
          if (entry.interactionId === undefined) continue;
        }
      });
      po2.observe({ type: "event", buffered: true });
    } catch (e) {
      // ignore
    }

    return () => {
      // noop
    };
  }, []);

  return null;
}
