import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Wine } from '@/types/wine';
import { cardVariants } from '@/utils/animations';
import { getSweetnessLabel } from '@/utils/helpers';
import BottleImage from '@/components/BottleImage/BottleImage';
import VivinoRating from '@/components/VivinoRating/VivinoRating';
import styles from './WineCard.module.css';

interface Props {
  wine: Wine;
}

function getBadgeClass(wine: Wine): string {
  if (wine.type === 'sparkling') return styles.badgeSparkling;
  switch (wine.color) {
    case 'red': return styles.badgeRed;
    case 'white': return styles.badgeWhite;
    case 'rosé': return styles.badgeRose;
  }
}

export default function WineCard({ wine }: Props) {
  return (
    <motion.div variants={cardVariants}>
      <Link to={`/wine/${wine.id}`} className={styles.card}>
        <div className={styles.imageWrap}>
          <BottleImage
            src={wine.bottleImage}
            alt={wine.name}
            color={wine.color}
            height={120}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{wine.name}</div>
          <div className={styles.producer}>
            {wine.producer}{wine.vintage ? `, ${wine.vintage}` : ''}
          </div>
          <div className={styles.meta}>
            <span className={`${styles.badge} ${getBadgeClass(wine)}`}>
              {wine.type === 'sparkling' ? `Игристое ${getSweetnessLabel(wine.sweetness)}` : getSweetnessLabel(wine.sweetness)}
            </span>
            <VivinoRating rating={wine.vivinoRating} />
            <span className={styles.count}>{wine.bottleCount} бут.</span>
          </div>
          <div className={styles.region}>{wine.country}, {wine.region}</div>
        </div>
      </Link>
    </motion.div>
  );
}
