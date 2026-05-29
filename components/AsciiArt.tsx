'use client';

import React, { useEffect, useRef } from 'react';

interface AsciiArtProps {
  imageSrc: string;
  width?: number;
  height?: number;
  fontSize?: number;
}

export default function AsciiArt({
  imageSrc,
  width = 600,
  height = 600,
  fontSize = 6,
}: AsciiArtProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Density string from least to most dense (12 chars)
    // Space at the start ensures bright pixels are skipped.
    const density = '  .:-=+*#%@@';
    let asciiChars: { 
      char: string; 
      originalX: number; 
      originalY: number; 
      x: number; 
      y: number;
      vx: number;
      vy: number;
      stiffness: number;
      damping: number;
      densityRatio: number;
    }[] = [];
    
    const image = new Image();
    image.src = imageSrc;
    // Removed crossOrigin="Anonymous" as it can block local static images in Next.js
    
    let mouse = { x: -1000, y: -1000 };

    image.onload = () => {
      const cols = Math.floor(width / fontSize);
      const rows = Math.floor(height / fontSize);
      
      const offscreenCanvas = document.createElement('canvas');
      const offCtx = offscreenCanvas.getContext('2d');
      if (!offCtx) return;
      
      offscreenCanvas.width = cols;
      offscreenCanvas.height = rows;
      
      offCtx.drawImage(image, 0, 0, cols, rows);
      const imageData = offCtx.getImageData(0, 0, cols, rows);
      const pixels = imageData.data;
      
      asciiChars = [];
      
      // First pass: find min/max brightness to stretch contrast
      let minB = 255;
      let maxB = 0;
      for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i + 3] > 128) { // Only check non-transparent pixels
          const brightness = (pixels[i] + pixels[i+1] + pixels[i+2]) / 3;
          if (brightness < minB) minB = brightness;
          if (brightness > maxB) maxB = brightness;
        }
      }

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const index = (y * cols + x) * 4;
          const r = pixels[index];
          const g = pixels[index + 1];
          const b = pixels[index + 2];
          const a = pixels[index + 3];
          
          if (a < 128) continue; // Skip transparent pixels entirely!
          
          let brightness = (r + g + b) / 3;
          
          // Stretch contrast so the darkest part of the face is black (0) 
          // and the lightest part is bright white (255)
          if (maxB > minB) {
            brightness = ((brightness - minB) / (maxB - minB)) * 255;
          }
          
          // Invert brightness (0 = white, 255 = black)
          const invertedBrightness = 255 - brightness;
          
          // Map to character
          const charIndex = Math.floor((invertedBrightness / 255) * density.length);
          const clampedIndex = Math.max(0, Math.min(density.length - 1, charIndex));
          const char = density[clampedIndex];
          
          // Don't render spaces to save performance
          if (char !== ' ') {
            asciiChars.push({
              char,
              originalX: x * fontSize,
              originalY: y * fontSize,
              // Start randomly scattered around the canvas for assembly effect
              x: Math.random() * width,
              y: Math.random() * height,
              vx: (Math.random() - 0.5) * 30,
              vy: (Math.random() - 0.5) * 30,
              stiffness: 0.02 + Math.random() * 0.05, // Random stiffness for organic movement
              damping: 0.8 + Math.random() * 0.15,    // Random friction
              densityRatio: clampedIndex / (density.length - 1)
            });
          }
        }
      }
      
      draw();
    };

    let animationFrameId: number;
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const draw = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.font = `${fontSize}px monospace`;
      ctx.textBaseline = 'top';
      
      for (let i = 0; i < asciiChars.length; i++) {
        const p = asciiChars[i];
        
        // Calculate distance to mouse
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        // Interaction radius
        const radius = 80;
        
        if (distanceMouse < radius) {
          // Physics repulsion from mouse
          const force = (radius - distanceMouse) / radius;
          p.vx -= (dxMouse / distanceMouse) * force * 4;
          p.vy -= (dyMouse / distanceMouse) * force * 4;
          ctx.fillStyle = '#00ff41'; // Bright neon green on hover
        } else {
          // Spring force towards original position
          const dxOrig = p.originalX - p.x;
          const dyOrig = p.originalY - p.y;
          
          p.vx += dxOrig * p.stiffness;
          p.vy += dyOrig * p.stiffness;
          
          // Dynamic gradient based on density
          const r = Math.round(15 + (0 - 15) * p.densityRatio);
          const g = Math.round(60 + (255 - 60) * p.densityRatio);
          const b = Math.round(65 + (65 - 65) * p.densityRatio);
          
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        }
        
        // Apply friction
        p.vx *= p.damping;
        p.vy *= p.damping;
        
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        
        ctx.fillText(p.char, p.x, p.y);
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      mouse.x = (e.clientX - rect.left) * scaleX;
      mouse.y = (e.clientY - rect.top) * scaleY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [imageSrc, width, height, fontSize]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="max-w-full h-auto cursor-crosshair w-full object-contain"
    />
  );
}
