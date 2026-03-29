import type { WineColor } from '@/types/wine';

export function getColorAccent(color: WineColor): string {
  switch (color) {
    case 'red': return 'var(--wine-red)';
    case 'white': return 'var(--wine-white-accent)';
    case 'rosé': return 'var(--wine-rose)';
  }
}

export function getColorGradient(color: WineColor): string {
  switch (color) {
    case 'red': return 'radial-gradient(ellipse at 50% 80%, rgba(114, 47, 55, 0.4) 0%, transparent 70%)';
    case 'white': return 'radial-gradient(ellipse at 50% 80%, rgba(232, 220, 200, 0.2) 0%, transparent 70%)';
    case 'rosé': return 'radial-gradient(ellipse at 50% 80%, rgba(212, 145, 142, 0.3) 0%, transparent 70%)';
  }
}

export function getSweetnessLabel(sweetness: string): string {
  switch (sweetness) {
    case 'dry': return 'Сухое';
    case 'semi-dry': return 'Полусухое';
    case 'brut': return 'Брют';
    default: return sweetness;
  }
}

export function getColorLabel(color: WineColor): string {
  switch (color) {
    case 'red': return 'Красное';
    case 'white': return 'Белое';
    case 'rosé': return 'Розовое';
  }
}

export function getTypeLabel(type: string): string {
  switch (type) {
    case 'still': return 'Тихое';
    case 'sparkling': return 'Игристое';
    default: return type;
  }
}
