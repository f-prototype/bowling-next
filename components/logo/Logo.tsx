import Image from 'next/image';
import logo from '../../img/png/bouling.png';
import styles from './Logo.module.scss';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className={styles.logoContainer}>
      <Image src={logo} alt="logo" />
    </Link>
  );
}
