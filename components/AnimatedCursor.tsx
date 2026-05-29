'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function AnimatedCursor() {
  // Use Framer Motion values for absolute zero-latency coordinate updates
  // This bypasses the React render cycle entirely for position tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      // Offset by half the width (20/2 = 10) to center perfectly
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full hidden sm:block mix-blend-screen"
      style={{
        x: cursorX,
        y: cursorY,
        width: 20,
        height: 20,
      }}
      animate={{
        scale: isActive ? 0.6 : isHovering ? 2 : 1,
        backgroundColor: isHovering ? 'rgba(255, 140, 0, 0)' : 'rgba(255, 140, 0, 1)',
        border: isHovering ? '2px solid rgba(255, 140, 0, 1)' : '0px solid rgba(255, 140, 0, 0)',
        boxShadow: isActive 
          ? '0 0 30px 10px rgba(255, 140, 0, 0.9)' 
          : isHovering 
            ? '0 0 25px 5px rgba(255, 140, 0, 0.6)' 
            : '0 0 15px 4px rgba(255, 140, 0, 0.7)',
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    />
  );
}
