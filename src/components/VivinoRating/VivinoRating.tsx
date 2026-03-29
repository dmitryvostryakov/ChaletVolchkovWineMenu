import styles from './VivinoRating.module.css';

interface Props {
  rating: number;
  url?: string;
  size?: 'default' | 'large';
}

export default function VivinoRating({ rating, url, size = 'default' }: Props) {
  const content = (
    <span className={`${styles.rating} ${size === 'large' ? styles.large : ''}`}>
      <span className={styles.star}>★</span>
      <span className={styles.score}>{rating.toFixed(1)}</span>
      <span className={styles.label}>Vivino</span>
    </span>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
