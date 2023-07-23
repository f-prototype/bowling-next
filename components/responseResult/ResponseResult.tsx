import {
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
} from 'react-icons/ai';
import styles from './ResponseResult.tsx.module.scss';
export default function ResponseResult({
  res,
  setRes,
}: {
  res: number;
  setRes: () => void;
}) {
  return (
    <div className={styles.container}>
      <div
        className={res === 200 ? styles.res : styles.resErr}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {res === 200 ? (
          <AiOutlineCheckCircle className={styles.icon} />
        ) : (
          <AiOutlineExclamationCircle className={styles.iconErr} />
        )}
        <div className={styles.messageBox}>
          <p className={styles.status}>{res === 200 ? 'Успешно' : 'Ошибка'}!</p>
          <p className={styles.description}>
            {res === 200 ? 'Ваша заявка принята' : 'Попробуйте позже'}
          </p>
        </div>
        <button className={styles.closeBtn} onClick={setRes}>
          OK
        </button>
      </div>
    </div>
  );
}
