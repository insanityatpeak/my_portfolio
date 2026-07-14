'use client';

import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'span';
}

export default function GlitchText({ text, className = '', tag = 'h1' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGlitching(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const Tag = tag;

  return (
    <Tag
      className={`glitch-wrapper ${isGlitching ? 'glitch-effect' : ''} ${className}`}
      data-text={text}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      {text}
    </Tag>
  );
}
