"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

function getImageUrl(img: any): string {
  const url = img?.url || "";
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}

interface LightboxGalleryProps {
  images: any[];
}

export default function LightboxGallery({ images }: LightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : images.length - 1));
  const next = () => setActiveIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : 0));

  // Keyboard handlers + focus management while dialog is open
  useEffect(() => {
    if (activeIndex === null) return;
    const lastIndex = activeIndex;
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft" && images.length > 1) prev();
      else if (e.key === "ArrowRight" && images.length > 1) next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      triggerRefs.current[lastIndex]?.focus();
    };
  }, [activeIndex, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <button
            key={img.id}
            type="button"
            ref={(el) => { triggerRefs.current[i] = el; }}
            onClick={() => setActiveIndex(i)}
            aria-label={`Open image ${i + 1}${img.caption ? `: ${img.caption}` : ""}`}
            className="rounded-2xl overflow-hidden relative aspect-[4/3] cursor-pointer group text-left"
          >
            <Image
              src={getImageUrl(img)}
              alt={img.alternativeText || img.caption || ""}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              unoptimized
            />
            {img.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm">{img.caption}</p>
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-2xl">⤢</span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox overlay */}
      {activeIndex !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          tabIndex={-1}
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center outline-none"
          onClick={close}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={close}
            aria-label="Close lightbox"
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl z-10 w-12 h-12 flex items-center justify-center"
          >
            <span aria-hidden="true">✕</span>
          </button>

          {/* Previous */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-10 w-14 h-14 flex items-center justify-center"
            >
              <span aria-hidden="true">‹</span>
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={getImageUrl(images[activeIndex])}
              alt={images[activeIndex].alternativeText || images[activeIndex].caption || ""}
              width={images[activeIndex].width || 1200}
              height={images[activeIndex].height || 800}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              unoptimized
            />
            {images[activeIndex].caption && (
              <p className="absolute bottom-0 left-0 right-0 text-center text-white/80 text-sm py-4 bg-gradient-to-t from-black/50 to-transparent rounded-b-lg">
                {images[activeIndex].caption}
              </p>
            )}
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-10 w-14 h-14 flex items-center justify-center"
            >
              <span aria-hidden="true">›</span>
            </button>
          )}

          {/* Counter */}
          {images.length > 1 && (
            <p aria-live="polite" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/85 text-sm">
              {activeIndex + 1} / {images.length}
            </p>
          )}
        </div>
      )}
    </>
  );
}
