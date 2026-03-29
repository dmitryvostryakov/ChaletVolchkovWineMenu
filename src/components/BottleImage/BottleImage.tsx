import { useState } from 'react';
import type { WineColor } from '@/types/wine';
import { getColorAccent, getColorGradient } from '@/utils/helpers';
import styles from './BottleImage.module.css';

interface Props {
  src: string;
  alt: string;
  color: WineColor;
  height?: number;
  className?: string;
}

function BottleSvg({ color, height }: { color: WineColor; height: number }) {
  const accent = getColorAccent(color);
  const bodyColor = color === 'red' ? '#4A1A22' : color === 'rosé' ? '#8B4A5A' : '#7A7560';
  const labelColor = color === 'red' ? '#722F37' : color === 'rosé' ? '#D4918E' : '#C9B87A';

  return (
    <svg
      width={height * 0.28}
      height={height}
      viewBox="0 0 56 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: `drop-shadow(0 8px 24px ${accent}33)` }}
    >
      <rect x="23" y="2" width="10" height="24" rx="2" fill="#5A4A3A" />
      <rect x="21" y="0" width="14" height="6" rx="2" fill="#8A7A6A" />
      <path d="M23 26 C23 26, 18 36, 18 46 L18 48 C8 52 4 62 4 72 L4 190 C4 196 8 200 14 200 L42 200 C48 200 52 196 52 190 L52 72 C52 62 48 52 38 48 L38 46 C38 36 33 26 33 26 Z" fill={bodyColor} />
      <rect x="10" y="100" width="36" height="50" rx="2" fill={labelColor} opacity="0.3" />
      <rect x="14" y="112" width="28" height="2" rx="1" fill={labelColor} opacity="0.5" />
      <rect x="18" y="118" width="20" height="2" rx="1" fill={labelColor} opacity="0.4" />
      <rect x="20" y="124" width="16" height="2" rx="1" fill={labelColor} opacity="0.3" />
      <ellipse cx="28" cy="190" rx="24" ry="4" fill="rgba(0,0,0,0.3)" />
    </svg>
  );
}

export default function BottleImage({ src, alt, color, height = 200, className = '' }: Props) {
  const [error, setError] = useState(false);

  return (
    <div
      className={`${styles.wrapper} ${className}`}
      style={{ height }}
    >
      <div className={styles.glow} style={{ background: getColorGradient(color) }} />
      {error ? (
        <div className={styles.fallback} style={{ height }}>
          <BottleSvg color={color} height={height * 0.85} />
        </div>
      ) : (
        <img
          className={styles.image}
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}
