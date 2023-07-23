import { CSSProperties } from 'react';
import styles from './Section.module.scss';
interface Props {
  children?: React.ReactNode;
  h: string;
}

export default function Section({ h, children }: Props) {
  return (
    <section className={styles.container}>
      <h2>{h}</h2>
      {children}
    </section>
  );
}
