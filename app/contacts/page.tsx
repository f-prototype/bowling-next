import Section from '@/components/section/Section';
import styles from './Contacts.module.scss';
import Paralax from '@/components/paralax/Paralax';
import Contact from '@/components/contact/Contact';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { LuPhoneCall } from 'react-icons/lu';
import { BiLike } from 'react-icons/bi';
import Link from 'next/link';
import { SlSocialVkontakte } from 'react-icons/sl';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaViber } from 'react-icons/fa';
import Map from '@/components/map/Map';
import Tour from '@/components/3d-tour/Tour';

export default function Contacts() {
  return (
    <main className={styles.main}>
      <Paralax img={`url(/img/contacts.jpg)`} />
      <Section h="контактные данные">
        <div className={styles.container}>
          <Contact
            text="Позвоните нам"
            img={<LuPhoneCall className={styles.icon} />}
          >
            <p>Есть вопросы? Мы поможем!</p>
            <Link href="tel:+79784440004">+7(978)-444-00-04</Link>
          </Contact>
          <Contact
            text="Напишите нам"
            img={<MdOutlineAlternateEmail className={styles.icon} />}
          >
            <p>Идеи? Предложения?</p>
            <p>Мы открыты для любых вопросов!</p>
            <p>
              Написать на{' '}
              <Link href="mailto:BowlingStrike@yandex.ru">
                BowlingStrike@yandex.ru
              </Link>
            </p>
          </Contact>
          <Contact
            text="Обратная связь"
            img={<BiLike className={styles.icon} />}
          >
            <p>
              Поделитесь мнением о нашей работе и помогите нам стать лучше!{' '}
              <br />
            </p>
            <div className={styles.iconContainer}>
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
          </Contact>
        </div>
      </Section>
      <Section h="3Д тур">
        <Tour />
      </Section>
      <Section h="мы на карте">
        <Map />
      </Section>
    </main>
  );
}
