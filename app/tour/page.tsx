import Tour from '@/components/3d-tour/Tour';
import styles from './page.module.scss';
import Section from '@/components/section/Section';
import Paralax from '@/components/paralax/Paralax';
import Card from '@/components/card/Card';

export default function TourPage() {
  return (
    <main className={styles.main}>
      <Paralax img="url(/img/paralax-tour.jpg)" />
      <Section h="3Д тур">
        <Tour />
      </Section>
    </main>
  );
}
