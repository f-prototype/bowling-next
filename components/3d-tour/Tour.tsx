import styles from './Tour.module.scss';
export default function Tour() {
  return (
    <div className={styles.container}>
      <iframe
        src="https://flystar-rk.ru/pano/Bouling/"
        className={styles.frame}
      ></iframe>
    </div>
  );
}
