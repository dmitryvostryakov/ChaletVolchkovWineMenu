import { motion } from 'framer-motion';
import { wines } from '@/data/wines';
import { slideUp } from '@/utils/animations';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  const totalBottles = wines.reduce((sum, w) => sum + w.bottleCount, 0);
  const countries = new Set(wines.map((w) => w.country)).size;

  return (
    <motion.div
      className={styles.page}
      variants={slideUp}
      initial="initial"
      animate="animate"
    >
      <h1 className={styles.title}>
        <span className={styles.accent}>Chalet</span> Volchkov
      </h1>

      <p className={styles.text}>
        Добро пожаловать в винную коллекцию Chalet Volchkov. Здесь собраны вина,
        которые мы выбрали для нашего загородного дома — каждое со своей историей
        и характером.
      </p>

      <p className={styles.text}>
        От элегантных бургундских креманов до насыщенных тосканских красных —
        наша коллекция создана для того, чтобы каждый ужин на даче стал особенным.
        Используйте раздел подбора, чтобы найти идеальное вино к вашему блюду.
      </p>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statNumber}>{wines.length}</div>
          <div className={styles.statLabel}>Вин</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>{totalBottles}</div>
          <div className={styles.statLabel}>Бутылок</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>{countries}</div>
          <div className={styles.statLabel}>Стран</div>
        </div>
      </div>

      <div className={styles.divider} />

      <p className={styles.footer}>
        Carte des Vins · Chalet Volchkov · 2026
      </p>
    </motion.div>
  );
}
