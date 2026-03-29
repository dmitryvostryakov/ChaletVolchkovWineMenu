import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { wines } from '@/data/wines';
import { foodCategories } from '@/data/foodCategories';
import { bottleHeroVariants, slideUp } from '@/utils/animations';
import { getSweetnessLabel, getColorLabel, getTypeLabel } from '@/utils/helpers';
import BottleImage from '@/components/BottleImage/BottleImage';
import VivinoRating from '@/components/VivinoRating/VivinoRating';
import WineCharacteristics from '@/components/WineCharacteristics/WineCharacteristics';
import styles from './WineDetailPage.module.css';

export default function WineDetailPage() {
  const { id } = useParams<{ id: string }>();
  const wine = wines.find((w) => w.id === id);

  if (!wine) {
    return (
      <div className={styles.notFound}>
        <p>Вино не найдено</p>
        <Link to="/" className={styles.backBtn}>← Вернуться к коллекции</Link>
      </div>
    );
  }

  const pairingInfos = wine.foodPairings.map(
    (fp) => foodCategories.find((fc) => fc.id === fp)!
  );

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.backBtn}>← Коллекция</Link>

      <div className={styles.hero}>
        <motion.div
          className={styles.bottleWrap}
          variants={bottleHeroVariants}
          initial="initial"
          animate="animate"
        >
          <BottleImage
            src={wine.bottleImage}
            alt={wine.name}
            color={wine.color}
            height={320}
          />
        </motion.div>

        <motion.div variants={slideUp} initial="initial" animate="animate">
          <h1 className={styles.name}>{wine.name}</h1>
          <p className={styles.producer}>
            {wine.producer}{wine.vintage ? ` · ${wine.vintage}` : ''}
          </p>

          <div className={styles.badges}>
            <span className={styles.badge}>{getColorLabel(wine.color)}</span>
            {wine.type === 'sparkling' && (
              <span className={styles.badge}>{getTypeLabel(wine.type)}</span>
            )}
            <span className={styles.badge}>{getSweetnessLabel(wine.sweetness)}</span>
            <span className={styles.badge}>{wine.grape}</span>
          </div>

          <div className={styles.ratingWrap}>
            <VivinoRating rating={wine.vivinoRating} url={wine.vivinoUrl} size="large" />
          </div>
        </motion.div>
      </div>

      <motion.p
        className={styles.description}
        variants={slideUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.15 }}
      >
        {wine.description}
      </motion.p>

      <motion.div
        className={styles.section}
        variants={slideUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
      >
        <h2 className={styles.sectionTitle}>Характеристики</h2>
        <WineCharacteristics characteristics={wine.characteristics} color={wine.color} />
      </motion.div>

      <motion.div
        className={styles.section}
        variants={slideUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.25 }}
      >
        <h2 className={styles.sectionTitle}>Подходит к</h2>
        <div className={styles.pairings}>
          {pairingInfos.map((info) => (
            <span key={info.id} className={styles.pairingTag}>
              <span>{info.emoji}</span> {info.labelRu}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className={styles.section}
        variants={slideUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
      >
        <h2 className={styles.sectionTitle}>Детали</h2>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Страна</span>
            <span className={styles.detailValue}>{wine.country}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Регион</span>
            <span className={styles.detailValue}>{wine.region}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Виноград</span>
            <span className={styles.detailValue}>{wine.grape}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Тип</span>
            <span className={styles.detailValue}>
              {getColorLabel(wine.color)}, {getSweetnessLabel(wine.sweetness)}
            </span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Винтаж</span>
            <span className={styles.detailValue}>{wine.vintage ?? 'NV'}</span>
          </div>
        </div>

        <div className={styles.bottleCount}>
          <span>В коллекции:</span>
          <span className={styles.countNumber}>{wine.bottleCount}</span>
          <span>бут.</span>
        </div>
      </motion.div>
    </div>
  );
}
