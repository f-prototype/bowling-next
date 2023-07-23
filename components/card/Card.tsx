import Image from 'next/image';
import styles from './Card.module.scss';
interface Props {
  text: string;
  li: string[];
  imgF: string;
  imgB: string;
}

export default function Card({ text, li, imgF, imgB }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.containerCard}>
        <div className={styles.card}>
          <Image
            src={imgF}
            width="300"
            height="200"
            alt="card"
            className={styles.face}
          />
          <Image
            src={imgB}
            width="300"
            height="200"
            alt="card"
            className={`${styles.face} ${styles.back}`}
          />
        </div>
      </div>
      <p className={styles.text}>{text}</p>
      <ul className={styles.ul}>
        {li.map((elem) => {
          return (
            <li key={elem} className={styles.li}>
              - {elem}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
