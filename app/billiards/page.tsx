import styles from './page.module.css';
import 'normalize.css/normalize.css';
import Section from '@/components/section/Section';
import Link from 'next/link';
import Table from '@/components/UI/table/Table';
import { tableInfBilliard } from '../../utils/TableInf';
import MyForm from '@/components/form/MyForm';
import Synopsis from '@/components/synopsis/Synopsis';
import Map from '@/components/map/Map';
import Slider from '@/components/slider/Slider';
import Paralax from '@/components/paralax/Paralax';
import { props } from '@/utils/formInfo';

export default function Billiard() {
  return (
    <main className={styles.main}>
      <Slider
        slides={[
          '/img/slider-bl/bilyard-1.jpeg',
          '/img/slider-bl/bilyard-2.jpeg',
          '/img/slider-bl/bilyard-3.jpeg',
          '/img/slider-bl/bilyard-4.jpeg',
          '/img/slider-bl/bilyard-5.jpeg',
        ]}
      />
      <Section h="БИЛЬЯРД STRIKE В ЯЛТЕ">
        <p>
          Наша бильярдная комната располагает тремя столами для игры в Русскую
          пирамиду, современным оборудованием и инвентарем, а еще неизменной
          философией игры, ее этикетом и атмосферой – все это есть в нашем
          бильярдном клубе.
        </p>
        <p>
          А после игры гости могут продолжить общение в нашем кафе или в баре
          Strike.
        </p>
      </Section>
      <Paralax img={`url(/img/paralax-bl1.jpg)`} />
      <Section h="ОТДЫХ В БИЛЬЯРДНОМ КЛУБЕ">
        <p>
          Мы любим бильярд и ценим время наших гостей, поэтому забронируйте
          столик для игры заранее онлайн или по телефону{' '}
          <Link href="tel:+79784440004">+7(978)-444-00-04</Link>, а обо всем
          остальном позаботимся мы сами!
        </p>
        <p>
          Забронировать игру в бильярд можно когда угодно. Предварительное
          бронирование позволит выбрать наиболее удобное время, точно рассчитать
          стоимость игры. Мы ждем гостей ежедневно и создаем самые лучшие
          условия для приятного отдыха.
        </p>
      </Section>
      <Paralax img={`url(/img/paralax-bl2.jpg)`} />
      <Section h="ЦЕНЫ НА БИЛЬЯРД">
        <Table table={tableInfBilliard} />
      </Section>
      <Section h="Бронирование">
        <MyForm props={props} message="Бронь cтола" />
        <Synopsis text="Бронь действительна только после обратного звонка, не менее чем за 24 часа" />
      </Section>
    </main>
  );
}
