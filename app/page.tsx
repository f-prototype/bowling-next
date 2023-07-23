import styles from './page.module.css';
import 'normalize.css/normalize.css';
import Section from '@/components/section/Section';
import Link from 'next/link';
import Table from '@/components/UI/table/Table';
import { tableInf } from '../utils/TableInf';
import MyForm from '@/components/form/MyForm';
import Synopsis from '@/components/synopsis/Synopsis';
import Map from '@/components/map/Map';
import Slider from '@/components/slider/Slider';
import Paralax from '@/components/paralax/Paralax';
import { props } from '@/utils/formInfo';

export default function Home() {
  return (
    <main className={styles.main}>
      <Slider
        slides={[
          '/img/slider-b/slide-b1.jpg',
          '/img/slider-b/slide-b2.jpg',
          '/img/slider-b/slide-b3.jpg',
          '/img/slider-b/slide-b4.jpg',
        ]}
      />
      <Section h="боулинг клуб strike в ялте">
        <p>
          Территория нашего боулинг клуба включает в себя 4 дорожки и отдельную
          зону для отдыха. Особое внимание заслуживает музыка, которая может
          быть включена по Вашему желанию.
        </p>
        <p>
          В нашем боулинг клубе есть отдельный штат сотрудников, к которым Вы
          всегда можете обратиться за помощью. Они научат Вас основам игры,
          помогут выработать специальные навыки и поделятся секретами
          мастерства.
        </p>
      </Section>
      <Paralax img={`url(/img/paralax-b3.jpeg)`} />
      <Section h="ОСНАЩЕНИЕ БОУЛИНГ КЛУБА">
        <p>
          Позаботились мы и о самых маленьких наших гостях: для них сделаны
          специальные дорожки с бортиками, которые поднимаются во время броска.
        </p>
      </Section>
      <Paralax img={`url(/img/slider1-1.jpg)`} />
      <Section h="ОТМЕТИТЬ ДЕНЬ РОЖДЕНИЕ В БОУЛИНГЕ">
        <p>
          Хотите отметить день рождения ярко? В таком случае приглашаем Вас в
          наш боулинг клуб! Позаботьтесь о вашем празднике заранее и
          забронируйте дорожки для боулинга по телефону:
        </p>
        <Link href="tel:+79784440004">+7(978)-444-00-04</Link>
      </Section>
      <Paralax img={`url(/img/paralax-b2.jpeg)`} />
      <Section h="ЦЕНЫ НА БОУЛИНГ">
        <Table table={tableInf} />
      </Section>
      <Section h="Бронирование">
        <MyForm props={props} message="Бронь Дорожки" />
        <Synopsis text="Бронь действительна только после обратного звонка, не менее чем за 24 часа" />
      </Section>
      <Section h="мы на карте">
        <Map />
      </Section>
    </main>
  );
}
