import styles from './BookCallModal.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../UI/button/Button';
import { sendChatData } from '@/utils/sendToChat';
import { useState } from 'react';
import ResponseResult from '../responseResult/ResponseResult';

export default function BookCallModal({ isModalOpen, close }: Props) {
  const [isGetresponse, setIsGetResponse] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const test = await sendChatData({ ...data, message: 'Обратный звонок' });
      setIsGetResponse(test.status);
    } catch {
      setIsGetResponse(500);
    }
  };
  const closeResponse = () => {
    setIsGetResponse(0);
    close();
  };
  return (
    <div
      className={`${styles.modal} ${isModalOpen ? styles.modalOpen : ''}`}
      onClick={() => {
        setIsGetResponse(0);
        close();
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.inputContainer}>
          <input
            {...register('name', { required: true, maxLength: 20 })}
            autoComplete="off"
            className={errors.name ? styles.error : ''}
            placeholder="Введите имя.."
            maxLength={20}
          />
          {errors.name && (
            <span className={styles.errMessage}>Невалидное поле</span>
          )}
          <input
            {...register('tel', {
              required: true,
              maxLength: 20,
              pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
            })}
            autoComplete="off"
            className={errors.tel ? styles.error : ''}
            placeholder="Введите номер.."
            maxLength={20}
          />
          {errors.tel && (
            <span className={styles.errMessage}>Невалидное поле</span>
          )}
          <AiFillCloseCircle onClick={close} className={styles.closeBtn} />
        </div>
        <Button>Заказать</Button>
      </form>
      {!!isGetresponse && (
        <ResponseResult res={isGetresponse} setRes={closeResponse} />
      )}
    </div>
  );
}
