import Image from 'next/image';
import styles from './Stock.module.scss';

interface Stock {
  img: string;
  h: string;
  text: React.ReactNode;
}
type StockProps = {
  stocks: Stock[];
};
export default function Stocks({ stocks }: StockProps) {
  return (
    <div className={styles.container}>
      {stocks.map((elem) => {
        return (
          <div key={elem.h} className={styles.stock}>
            <Image src={elem.img} alt="shares" width={300} height={200} />
            <h3>{elem.h}</h3>
            {elem.text}
          </div>
        );
      })}
    </div>
  );
}
