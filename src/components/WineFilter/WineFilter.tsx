import styles from './WineFilter.module.css';

export type FilterType = 'all' | 'red' | 'white' | 'rosé' | 'sparkling';

interface Props {
  active: FilterType;
  onChange: (filter: FilterType) => void;
}

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'red', label: 'Красное' },
  { value: 'white', label: 'Белое' },
  { value: 'rosé', label: 'Розовое' },
  { value: 'sparkling', label: 'Игристое' },
];

export default function WineFilter({ active, onChange }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        {filters.map((f) => (
          <button
            key={f.value}
            className={`${styles.pill} ${active === f.value ? styles.active : ''}`}
            onClick={() => onChange(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
