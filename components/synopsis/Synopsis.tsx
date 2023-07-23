import styles from './Synopsis.module.scss';

export default function Synopsis({ text }: { text: string }) {
  return <p className={styles.container}>*{text}*</p>;
}
