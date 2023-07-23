'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './MyForm.module.scss';
import Button from '../UI/button/Button';
import { sendChatData } from '@/utils/sendToChat';
import { useState } from 'react';
import ResponseResult from '../responseResult/ResponseResult';

interface Input {
  name: keyof Inputs;
  required: boolean;
  maxLength?: number;
  pattern?: string;
  type: string;
  placeholder?: string;
}

type Props = {
  props: Input[];
  message: string;
  textBtn?: string;
};

export default function MyForm({ props, textBtn, message }: Props) {
  const [isGetresponse, setIsGetResponse] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const test = await sendChatData({ ...data, message });
      setIsGetResponse(test.status);
    } catch {
      setIsGetResponse(500);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {props.map((elem) => {
        return (
          <input
            {...register(elem.name, {
              required: elem.required,
              maxLength: elem.maxLength,
              pattern: elem.pattern ? new RegExp(elem.pattern) : undefined,
            })}
            autoComplete="off"
            className={
              Object.keys(errors).includes(elem.name) ? styles.error : ''
            }
            type={elem.type}
            placeholder={elem.placeholder}
            key={elem.name}
          />
        );
      })}
      {/* <input
        {...register('name', { required: true, maxLength: 20 })}
        autoComplete="off"
        className={errors.name ? styles.error : ''}
        placeholder="Имя"
      />
      <input
        {...register('tel', {
          required: true,
          pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        })}
        autoComplete="off"
        className={errors.tel ? styles.error : ''}
        placeholder="Телефон"
      />
      <input
        {...register('quantity', {
          required: true,
          pattern: /^[1-4]$/,
        })}
        autoComplete="off"
        className={errors.quantity ? styles.error : ''}
        placeholder="Кол-во дорожек"
      />
      <input
        {...register('date', { required: true })}
        type="datetime-local"
        autoComplete="off"
        className={errors.date ? styles.error : ''}
      /> */}
      <Button>{textBtn ? textBtn : 'Забронировать'}</Button>
      {!!isGetresponse && (
        <ResponseResult
          res={isGetresponse}
          setRes={() => setIsGetResponse(0)}
        />
      )}
    </form>
  );
}
