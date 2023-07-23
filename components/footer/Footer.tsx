import { SlSocialVkontakte } from 'react-icons/sl';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaViber } from 'react-icons/fa';
import styles from './Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>
        <p>© 2023 Политика конфиденциальности</p>
      </div>
      <div className={styles.iconsContainer}>
        <Link href="https://vk.com/strikeclub1">
          <SlSocialVkontakte className={styles.icon} />
        </Link>
        <Link href="#">
          <AiOutlineInstagram className={styles.icon} />
        </Link>
        <Link href="https://invite.viber.com/?g2=AQAHSa50A9vBj09d4tySoXbr870QiP3CJXdhqdCVG3C9sjC%2F16XV3Hk0kw42au2q">
          <FaViber className={styles.icon} />
        </Link>
      </div>
    </footer>
  );
}
