"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function ImageReveal({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);

    const container = containerRef.current;
    if (!container) return;

    // Espera un tick para que React termine de renderizar el nuevo children
    const rafId = requestAnimationFrame(() => {
      const images = Array.from(container.querySelectorAll("img"));

      if (images.length === 0) {
        setReady(true);
        return;
      }

      let loaded = 0;

      const onLoad = () => {
        loaded += 1;
        if (loaded >= images.length) setReady(true);
      };

      images.forEach((img) => {
        if (img.complete && img.naturalWidth > 0) {
          onLoad();
        } else {
          img.addEventListener("load", onLoad, { once: true });
          img.addEventListener("error", onLoad, { once: true });
        }
      });

      return () => {
        images.forEach((img) => {
          img.removeEventListener("load", onLoad);
          img.removeEventListener("error", onLoad);
        });
      };
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      className="transition-opacity duration-500 ease-in-out"
      style={{ opacity: ready ? 1 : 0 }}
    >
      {children}
    </div>
  );
}
