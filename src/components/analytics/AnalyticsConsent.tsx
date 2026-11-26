"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window { dataLayer: (Record<string, unknown> | IArguments)[] }
}

const KEY = "sourceloom_analytics_consent";
const GA_MEASUREMENT_ID = "G-B6TDNS70JZ";

const sendGoogleEvent: (command: "event", name: string, parameters: Record<string, string>) => void =
  function () {
    // eslint-disable-next-line prefer-rest-params -- Google expects its gtag queue to receive an Arguments object.
    window.dataLayer.push(arguments);
  };

function trackContactClick(event: MouseEvent) {
  const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
  if (!(link instanceof HTMLAnchorElement)) return;
  const name = link.protocol === "mailto:" ? "email_click" : link.protocol === "tel:" ? "phone_click" : null;
  if (!name) return;
  const pagePath = window.location.pathname;
  sendGoogleEvent("event", name, {
    send_to: GA_MEASUREMENT_ID,
    page_location: window.location.origin + pagePath,
    page_path: pagePath,
  });
}

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Read browser-only storage after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setChoice(localStorage.getItem(KEY));
    setReady(true);
  }, []);

  useEffect(() => {
    if (choice !== "accepted") return;
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-KNJ7LRJ3";
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    document.head.appendChild(script);
    document.addEventListener("click", trackContactClick, true);
    return () => {
      document.removeEventListener("click", trackContactClick, true);
      script.remove();
    };
  }, [choice]);

  function choose(value: string) {
    localStorage.setItem(KEY, value);
    setChoice(value);
    setShowSettings(false);
    if (value === "rejected") window.location.reload();
  }

  if (!ready) return null;
  return choice === null || showSettings ? (
    <div role="dialog" aria-label="Analytics cookies" className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl rounded-lg border bg-white p-5 text-black shadow-lg">
      <p>May we use analytics to understand how visitors use this website?</p>
      <div className="mt-3 flex gap-3">
        <button className="rounded bg-black px-4 py-2 text-white" onClick={() => choose("accepted")}>Accept analytics</button>
        <button className="rounded border px-4 py-2" onClick={() => choose("rejected")}>Decline</button>
      </div>
    </div>
  ) : (
    <button className="fixed bottom-2 left-2 z-40 rounded border bg-white px-2 py-1 text-xs text-black" onClick={() => setShowSettings(true)}>Analytics settings</button>
  );
}
