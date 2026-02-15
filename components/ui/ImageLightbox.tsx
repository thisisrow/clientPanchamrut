"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ImageLightboxProps = {
  images: string[];
  activeIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onChange: (nextIndex: number) => void;
  alt?: string;
};

export default function ImageLightbox({
  images,
  activeIndex,
  isOpen,
  onClose,
  onChange,
  alt = "Image",
}: ImageLightboxProps) {
  const [zoomScale, setZoomScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const isPanningRef = useRef(false);
  const panStartRef = useRef<{ x: number; y: number; originX: number; originY: number } | null>(null);
  const pinchStateRef = useRef<{ startDistance: number; startScale: number } | null>(null);
  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const imageRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const clampScale = useCallback((value: number) => {
    if (value < 1) return 1;
    if (value > 3) return 3;
    return value;
  }, []);

  const goNext = useCallback(() => {
    if (!images.length) return;
    onChange((activeIndex + 1) % images.length);
    setZoomScale(1);
    setPan({ x: 0, y: 0 });
  }, [activeIndex, images.length, onChange]);

  const goPrev = useCallback(() => {
    if (!images.length) return;
    onChange((activeIndex - 1 + images.length) % images.length);
    setZoomScale(1);
    setPan({ x: 0, y: 0 });
  }, [activeIndex, images.length, onChange]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!isOpen) return;
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    },
    [goNext, goPrev, isOpen, onClose],
  );

  const handlePointerSwipe = useCallback(
    (startX: number, endX: number) => {
      if (zoomScale > 1) return;
      const delta = endX - startX;
      if (Math.abs(delta) < 40) return;
      if (delta < 0) {
        goNext();
      } else {
        goPrev();
      }
    },
    [goNext, goPrev, zoomScale],
  );

  const handleWheelZoom = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      if (!isOpen) return;
      event.preventDefault();
      const delta = event.deltaY > 0 ? -0.1 : 0.1;
      setZoomScale((prev) => {
        const next = clampScale(prev + delta);
        if (next === 1) setPan({ x: 0, y: 0 });
        return next;
      });
    },
    [clampScale, isOpen],
  );

  const clampPan = useCallback(
    (nextPan: { x: number; y: number }, scale: number) => {
      const img = imageRef.current;
      const container = containerRef.current;
      if (!img || !container) return nextPan;
      const containerRect = container.getBoundingClientRect();
      const imgRect = img.getBoundingClientRect();

      const baseWidth = imgRect.width / scale;
      const baseHeight = imgRect.height / scale;
      const scaledWidth = baseWidth * scale;
      const scaledHeight = baseHeight * scale;

      const maxX = Math.max(0, (scaledWidth - containerRect.width) / 2);
      const maxY = Math.max(0, (scaledHeight - containerRect.height) / 2);

      return {
        x: Math.max(-maxX, Math.min(maxX, nextPan.x)),
        y: Math.max(-maxY, Math.min(maxY, nextPan.y)),
      };
    },
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    setPan((prev) => clampPan(prev, zoomScale));
  }, [clampPan, isOpen, zoomScale, activeIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const { style } = document.body;
    const previousOverflow = style.overflow;
    const previousTouchAction = style.touchAction;
    style.overflow = "hidden";
    style.touchAction = "none";
    return () => {
      style.overflow = previousOverflow;
      style.touchAction = previousTouchAction;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const activeImage = images[activeIndex];

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 overscroll-none touch-none"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      onWheel={(event) => event.preventDefault()}
      onTouchMove={(event) => event.preventDefault()}
      tabIndex={0}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-6xl touch-none"
        onClick={(event) => event.stopPropagation()}
        onWheel={handleWheelZoom}
        onTouchMove={(event) => event.preventDefault()}
        onPointerDown={(event) => {
          pointersRef.current.set(event.pointerId, {
            x: event.clientX,
            y: event.clientY,
          });
          if (pointersRef.current.size === 2) {
            const points = Array.from(pointersRef.current.values());
            const dx = points[0].x - points[1].x;
            const dy = points[0].y - points[1].y;
                pinchStateRef.current = {
                  startDistance: Math.hypot(dx, dy),
                  startScale: zoomScale,
                };
          } else if (pointersRef.current.size === 1) {
            if (zoomScale > 1) {
              isPanningRef.current = true;
              panStartRef.current = {
                x: event.clientX,
                y: event.clientY,
                originX: pan.x,
                originY: pan.y,
              };
              return;
            }
            const startX = event.clientX;
            const handleUp = (upEvent: PointerEvent) => {
              handlePointerSwipe(startX, upEvent.clientX);
              window.removeEventListener("pointerup", handleUp);
            };
            window.addEventListener("pointerup", handleUp);
          }
        }}
        onPointerMove={(event) => {
          if (!pointersRef.current.has(event.pointerId)) return;
          pointersRef.current.set(event.pointerId, {
            x: event.clientX,
            y: event.clientY,
          });
          if (pointersRef.current.size === 2 && pinchStateRef.current) {
            const points = Array.from(pointersRef.current.values());
            const dx = points[0].x - points[1].x;
            const dy = points[0].y - points[1].y;
            const distance = Math.hypot(dx, dy);
                const nextScale =
                  (distance / pinchStateRef.current.startDistance) *
                  pinchStateRef.current.startScale;
                setZoomScale((prev) => {
                  const clamped = clampScale(nextScale);
                  if (clamped === 1) setPan({ x: 0, y: 0 });
                  return clamped;
                });
              return;
            }
            if (isPanningRef.current && panStartRef.current) {
              const deltaX = event.clientX - panStartRef.current.x;
              const deltaY = event.clientY - panStartRef.current.y;
              const nextPan = {
                x: panStartRef.current.originX + deltaX,
                y: panStartRef.current.originY + deltaY,
              };
              setPan(clampPan(nextPan, zoomScale));
            }
        }}
        onPointerUp={(event) => {
          pointersRef.current.delete(event.pointerId);
          if (pointersRef.current.size < 2) {
            pinchStateRef.current = null;
          }
          if (pointersRef.current.size === 0) {
            isPanningRef.current = false;
            panStartRef.current = null;
          }
        }}
        onPointerCancel={(event) => {
          pointersRef.current.delete(event.pointerId);
          pinchStateRef.current = null;
          isPanningRef.current = false;
          panStartRef.current = null;
        }}
      >
        <button
          type="button"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#16a34a] text-white shadow-lg hover:scale-[1.3]"
          onClick={onClose}
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-base">close</span>
        </button>

        <button
          type="button"
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[#16a34a] text-white shadow-lg hover:scale-[1.3]"
          onClick={goPrev}
          aria-label="Previous image"
        >
          <span className="material-symbols-outlined text-base">
            chevron_left
          </span>
        </button>
        <button
          type="button"
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[#16a34a] text-white shadow-lg hover:scale-[1.3]"
          onClick={goNext}
          aria-label="Next image"
        >
          <span className="material-symbols-outlined text-base">
            chevron_right
          </span>
        </button>

        <div
          ref={containerRef}
          className="relative h-[85vh] w-full overflow-hidden rounded-3xl bg-black/20"
        >
          {activeImage ? (
            <img
              alt={alt}
              src={activeImage}
              className="h-full w-full object-contain select-none"
              style={{
                transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoomScale})`,
                transformOrigin: "center center",
                cursor: zoomScale > 1 ? "grab" : "default",
              }}
              ref={imageRef}
              draggable={false}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
