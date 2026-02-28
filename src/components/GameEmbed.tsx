"use client";
import { useState, useRef, useEffect } from "react";

const GAME_SOURCES = [
  "https://html5.gamedistribution.com/8dcf873e22b141a3963be2e5e58487ca/",
  "https://www.miniplay.com/embed/knife-master",
];

export default function GameEmbed() {
  const [srcIndex, setSrcIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(false);
    timerRef.current = setTimeout(() => {
      if (loading) {
        if (srcIndex < GAME_SOURCES.length - 1) {
          setSrcIndex((i) => i + 1);
        } else {
          setLoading(false);
          setError(true);
        }
      }
    }, 12000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [srcIndex]);

  const handleLoad = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setLoading(false);
    setError(false);
  };

  const handleFullscreen = () => {
    iframeRef.current?.requestFullscreen?.();
  };

  const retry = () => {
    setSrcIndex(0);
    setError(false);
    setLoading(true);
  };

  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      {loading && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1a1a1a] z-10">
          <div className="w-12 h-12 border-4 border-[#dc2626] border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-gray-400 text-sm">Loading Knife Master...</p>
        </div>
      )}
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1a1a1a] z-10">
          <p className="text-red-400 mb-4 text-center px-4">
            Game failed to load. Please try again.
          </p>
          <button
            onClick={retry}
            className="bg-[#dc2626] hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : (
        <iframe
          ref={iframeRef}
          src={GAME_SOURCES[srcIndex]}
          className="absolute inset-0 w-full h-full border-0"
          allow="fullscreen; autoplay"
          allowFullScreen
          onLoad={handleLoad}
          title="Knife Master Game"
        />
      )}
      <button
        onClick={handleFullscreen}
        className="absolute bottom-2 right-2 z-20 bg-black/60 hover:bg-black/80 text-white text-xs px-3 py-1 rounded transition-colors"
        title="Fullscreen"
      >
        ⛶ Fullscreen
      </button>
    </div>
  );
}
