import styles from './Contact.module.scss';

interface Props {
  text: string;
  children?: React.ReactNode;
  img: React.ReactNode;
}

export default function Contact({ img, text, children }: Props) {
  return (
    <div className={styles.container}>
      {img}
      <h3 className={styles.text}>{text}</h3>
      {children}
    </div>
  );
}
