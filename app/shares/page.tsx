import Card from '@/components/card/Card';
import styles from './page.module.scss';
import Paralax from '@/components/paralax/Paralax';
import Section from '@/components/section/Section';
import MyForm from '@/components/form/MyForm';
import { nameTel, nameTelQuantity } from '@/utils/formInfo';
import Stocks from '@/components/news/Stock';

export default function Shares() {
  return (
    <main className={styles.main}>
      <Paralax img="url(/img/paralax-share.jpg)" />
      <Section h="Клубная карта Strike discount">
        <div className={styles.flexContainer}>
          <Card
            text="Cтоимость оформления карты 5000 руб"
            imgF="/img/card/aurum.png"
            imgB="/img/card/aurum-P.png"
            li={['скидка 7%', 'срок действия 365 дней с момента получения']}
          />
          <Card
            text="Cтоимость оформления карты 5000 руб"
            imgF="/img/card/gold.png"
            imgB="/img/card/gold-P.png"
            li={['скидка 7%', 'срок действия 365 дней с момента получения']}
          />
          <Card
            text="Cтоимость оформления карты 5000 руб"
            imgF="/img/card/platina.png"
            imgB="/img/card/platina-P.png"
            li={['скидка 7%', 'срок действия 365 дней с момента получения']}
          />
        </div>
      </Section>
      <Section h="Оформить карту">
        <p className={styles.descText}>
          Оставьте заявку и наш менеджер свяжется с вами.
        </p>
        <MyForm props={nameTel} message="Скидочную карту" textBtn="Оформить" />
      </Section>
      <Section h="Подарочный сертификат">
        <div className={styles.flexContainer}>
          <Card
            text="Количество минут: 60/120"
            imgF="/img/sert/podarok-1.png"
            imgB="/img/sert/podarok-60.png"
            li={[
              ' стоимость оформления: 1500/3000 руб',
              'срок действия 365 дней с момента получения',
            ]}
          />
          <Card
            text="Количество минут: 180/240"
            imgF="/img/sert/podarok-2.png"
            imgB="/img/sert/podarok-180.png"
            li={[
              'количество бонусных минут: 30/60',
              'стоимость оформления: 4500/6000 руб',
              'срок действия 365 дней с момента получения',
            ]}
          />
        </div>
      </Section>
      <Section h="Оформить сертификат">
        <p className={styles.descText}>
          Оставьте заявку и наш менеджер свяжется с вами.
        </p>
        <MyForm
          props={nameTelQuantity}
          message="Подарочный сертификат"
          textBtn="Оформить"
        />
      </Section>
      <Section h="Действующие акции">
        <Stocks
          stocks={[
            {
              img: '/img/stocks/plus.png',
              h: 'Час в подарок',
              text: (
                <p>
                  При заказе дорожки боулинга от 2-х часов, вы получите от нас в
                  подарок один час игры. На каждую из 4-х дорожек вы можете
                  пригласить до шести человек!(только для владельцев клубных
                  карт)
                </p>
              ),
            },
            {
              img: '/img/stocks/partners.png',
              h: 'Партнерская скидка',
              text: (
                <p>
                  При посещении траттории <a>Леонардо</a> и кафе{' '}
                  <a>Приятное свидание</a>, при расчёте в этих точках вам будут
                  выдаваться визитки боулинг клуба &#34;Страйк&#34; на 30%
                  скидку которая распространяется на аренду дорожек боулинга с
                  понедельника по четверг.
                </p>
              ),
            },
          ]}
        />
      </Section>
    </main>
  );
}
