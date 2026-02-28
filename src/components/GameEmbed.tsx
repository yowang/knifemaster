"use client";
import { useState, useRef, useEffect } from "react";

// Primary: self-hosted game (no domain restrictions)
// Fallback: GD source (when approved)
const GAME_SOURCES = [
  "/game/",
  "https://html5.gamedistribution.com/8dcf873e22b141a3963be2e5e58487ca/",
];

export default function GameEmbed() {
  const [srcIndex, setSrcIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleFullscreen = () => {
    const el = wrapperRef.current ?? iframeRef.current;
    el?.requestFullscreen?.();
  };

  const retry = () => {
    setSrcIndex(0);
    setError(false);
    setLoading(true);
  };

  return (
    <div ref={wrapperRef} className="relative w-full bg-[#0d0d0d]" style={{ paddingBottom: "66%", minHeight: 340 }}>
      {loading && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1a1a1a] z-10">
          <div className="w-12 h-12 border-4 border-[#dc2626] border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-gray-400 text-sm">Loading Knife Master...</p>
        </div>
      )}
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1a1a1a] z-10">
          <p className="text-red-400 mb-4 text-center px-4">Game failed to load. Please try again.</p>
          <button onClick={retry} className="bg-[#dc2626] hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Try Again
          </button>
        </div>
      ) : (
        <iframe
          ref={iframeRef}
          src={GAME_SOURCES[srcIndex]}
          className="absolute inset-0 w-full h-full border-0"
          allow="fullscreen; autoplay; pointer-lock"
          allowFullScreen
          onLoad={handleLoad}
          title="Knife Master Game"
          scrolling="no"
        />
      )}
      <button
        onClick={handleFullscreen}
        className="absolute bottom-3 right-3 z-20 bg-black/70 hover:bg-black/90 text-white rounded-md px-3 py-1.5 flex items-center gap-1.5 text-xs transition-colors"
        title="Fullscreen"
        aria-label="Open fullscreen"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
          <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
        </svg>
        Fullscreen
      </button>
    </div>
  );
}
