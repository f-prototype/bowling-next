import Synopsis from '@/components/synopsis/Synopsis';
import styles from './Table.module.scss';
interface Props {
  table: {
    headers: string[];
    rows: Row[];
  };
}

interface Row {
  id: string | number;
  cells: string[];
}

export default function Table({ table }: Props) {
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            {table.headers.map((elem) => {
              return (
                <td className={styles.td} key={elem}>
                  {elem}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {table.rows.map((elem) => {
            return (
              <tr key={elem.id} className={styles.tr}>
                {elem.cells.map((item) => {
                  return (
                    <td key={item} className={styles.td}>
                      {item}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Synopsis text="Цена указана за один час игры" />
    </>
  );
}
