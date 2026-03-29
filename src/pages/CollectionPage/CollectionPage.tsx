import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { wines } from '@/data/wines';
import WineFilter, { type FilterType } from '@/components/WineFilter/WineFilter';
import WineCard from '@/components/WineCard/WineCard';
import { staggerContainer } from '@/utils/animations';
import styles from './CollectionPage.module.css';

export default function CollectionPage() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return wines;
    if (filter === 'sparkling') return wines.filter((w) => w.type === 'sparkling');
    return wines.filter((w) => w.color === filter && w.type !== 'sparkling');
  }, [filter]);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Carte des Vins</h1>
        <p className={styles.subtitle}>{wines.length} вин в коллекции</p>
      </div>

      <WineFilter active={filter} onChange={setFilter} />

      <motion.div
        className={styles.grid}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        key={filter}
      >
        {filtered.length > 0 ? (
          filtered.map((wine) => <WineCard key={wine.id} wine={wine} />)
        ) : (
          <div className={styles.empty}>Нет вин в этой категории</div>
        )}
      </motion.div>
    </div>
  );
}
