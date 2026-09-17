"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site-config";
import { useLenis } from "./SmoothScrollProvider";

// How much scroll distance (in viewport heights) the video scrubs across.
// Larger = slower, more deliberate scrub; smaller = faster.
const SCRUB_VH = 300;

// Scroll-driven "vibration" tuning: faster scroll velocity -> stronger shake.
const SHAKE_GAIN = 0.6;
const SHAKE_MAX = 12; // px
const SHAKE_SMOOTHING = 0.3; // how quickly shake eases toward its target
const VIBRATE_THRESHOLD = 1.5; // px of shake before triggering a haptic pulse
const VIBRATE_COOLDOWN_MS = 150;

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lenis = useLenis();
  const velocityRef = useRef(0);
  const lastVibrateRef = useRef(0);

  // iOS/Safari won't let you scrub a video's currentTime until it has
  // actually started playing once, so we play-then-immediately-pause it
  // as soon as it has a frame to show.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function unlock() {
      if (!video) return;
      video
        .play()
        .then(() => video.pause())
        .catch(() => {});
    }

    if (video.readyState >= 2) {
      unlock();
    } else {
      video.addEventListener("loadeddata", unlock, { once: true });
      return () => video.removeEventListener("loadeddata", unlock);
    }
  }, []);

  // Map scroll progress through the pinned section to the video's timeline.
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    function update() {
      if (!video || !section || !video.duration) return;
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress =
        scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
      const time = progress * video.duration;
      if (Number.isFinite(time)) {
        video.currentTime = time;
      }
      if (lenis) {
        velocityRef.current = Math.abs(lenis.velocity);
      }
    }

    update();

    if (lenis) {
      return lenis.on("scroll", update);
    }
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [lenis]);

  // Independent render loop for the shake/"vibration" effect so it keeps
  // easing back to rest even between scroll events.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;
    let shake = 0;

    function loop() {
      const target = Math.min(SHAKE_MAX, velocityRef.current * SHAKE_GAIN);
      shake += (target - shake) * SHAKE_SMOOTHING;

      if (shake > 0.05) {
        const x = (Math.random() - 0.5) * shake;
        const y = (Math.random() - 0.5) * shake;
        video!.style.transform = `scale(1.025) translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;

        if (
          shake > VIBRATE_THRESHOLD &&
          typeof navigator !== "undefined" &&
          "vibrate" in navigator
        ) {
          const now = performance.now();
          if (now - lastVibrateRef.current > VIBRATE_COOLDOWN_MS) {
            navigator.vibrate?.(12);
            lastVibrateRef.current = now;
          }
        }
      } else {
        video!.style.transform = "scale(1.025)";
      }

      rafId = requestAnimationFrame(loop);
    }

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      style={{ height: `${SCRUB_VH}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src="/video/hero-scrub.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full origin-center object-cover [filter:brightness(1.2)_contrast(1.03)_saturate(1.08)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/35" />

        <div className="relative z-10 flex h-full flex-col justify-center px-6 [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
          <div className="mx-auto w-full max-w-6xl">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
              {siteConfig.role}
            </p>
            <h1 className="mt-6 text-[15vw] font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
              {siteConfig.name}
            </h1>
            <p className="mt-8 max-w-xl text-lg text-foreground/90">
              {siteConfig.tagline}
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-foreground/60">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <span className="block h-8 w-px bg-current" />
        </div>
      </div>
    </section>
  );
}
