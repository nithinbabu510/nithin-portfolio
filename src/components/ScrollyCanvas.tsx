"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120; // 0 to 119

const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
};

export default function ScrollyCanvas({ children }: { children?: ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          drawFrame(0, loadedImages);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (index: number, imgList = images) => {
    if (!canvasRef.current || imgList.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgList[index];
    if (!img) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Mathematical object-fit: cover calculation
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  };

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);
  
  useMotionValueEvent(frameIndex, "change", (latest) => {
    drawFrame(Math.floor(latest));
  });

  useEffect(() => {
    const handleResize = () => drawFrame(Math.floor(frameIndex.get()));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="h-[500vh] relative w-full bg-black">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex justify-center items-center">
        <canvas ref={canvasRef} className="scrolly-canvas w-full h-full object-cover" />
      </div>
      {children}
    </div>
  );
}
