import styles from './Paralax.module.scss';
import { StaticImageData } from 'next/image';
interface Props {
  img: string | StaticImageData;
}
export default function Paralax({ img }: Props) {
  return (
    <div className={styles.paralax} style={{ backgroundImage: `${img}` }}></div>
  );
}
