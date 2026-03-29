import type { WineCharacteristics as WineChars, WineColor } from '@/types/wine';
import { getColorAccent } from '@/utils/helpers';
import styles from './WineCharacteristics.module.css';

interface Props {
  characteristics: WineChars;
  color: WineColor;
}

const bars: { key: keyof Omit<WineChars, 'aromas'>; label: string }[] = [
  { key: 'body', label: 'Тело' },
  { key: 'acidity', label: 'Кислотность' },
  { key: 'tannins', label: 'Танины' },
];

export default function WineCharacteristics({ characteristics, color }: Props) {
  const accent = getColorAccent(color);

  return (
    <div className={styles.wrapper}>
      {bars.map((bar) => (
        <div key={bar.key} className={styles.row}>
          <span className={styles.label}>{bar.label}</span>
          <div className={styles.barTrack}>
            <div
              className={styles.barFill}
              style={{
                width: `${(characteristics[bar.key] / 5) * 100}%`,
                background: accent,
              }}
            />
          </div>
        </div>
      ))}
      <div className={styles.aromas}>
        {characteristics.aromas.map((aroma) => (
          <span key={aroma} className={styles.aromaTag}>{aroma}</span>
        ))}
      </div>
    </div>
  );
}
