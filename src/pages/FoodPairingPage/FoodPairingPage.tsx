import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FoodCategory } from '@/types/wine';
import { wines } from '@/data/wines';
import { foodCategories } from '@/data/foodCategories';
import { staggerContainer } from '@/utils/animations';
import WineCard from '@/components/WineCard/WineCard';
import styles from './FoodPairingPage.module.css';

export default function FoodPairingPage() {
  const [selected, setSelected] = useState<FoodCategory | null>(null);

  const results = useMemo(() => {
    if (!selected) return [];
    return wines.filter((w) => w.foodPairings.includes(selected));
  }, [selected]);

  const selectedInfo = selected
    ? foodCategories.find((fc) => fc.id === selected)
    : null;

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Подбор к блюдам</h1>
      <p className={styles.subtitle}>Выберите блюдо — мы покажем подходящие вина</p>

      <div className={styles.categories}>
        {foodCategories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.categoryCard} ${selected === cat.id ? styles.active : ''}`}
            onClick={() => setSelected(selected === cat.id ? null : cat.id)}
          >
            <span className={styles.categoryEmoji}>{cat.emoji}</span>
            <span className={styles.categoryLabel}>{cat.labelRu}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className={styles.resultsTitle}>
              {selectedInfo?.emoji} {selectedInfo?.labelRu} — {results.length} вин
            </h2>

            {results.length > 0 ? (
              <motion.div
                className={styles.resultsGrid}
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {results.map((wine) => (
                  <WineCard key={wine.id} wine={wine} />
                ))}
              </motion.div>
            ) : (
              <div className={styles.noResults}>
                К сожалению, в коллекции нет подходящих вин
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {!selected && (
        <div className={styles.prompt}>
          Нажмите на категорию блюда, чтобы найти идеальное вино
        </div>
      )}
    </div>
  );
}
