'use client';
import { useRef, useEffect, useState, useCallback } from 'react';
import styles from './Slider.module.scss';
import Image, { StaticImageData } from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Props {
  slides: string[] | StaticImageData[];
}
export default function Slider({ slides }: Props) {
  const intervalRef = useRef<NodeJS.Timeout>();
  const [step, setStep] = useState(0);
  const slider = useRef<HTMLDivElement>(null);
  const move = useCallback(
    (route: string) => {
      if (route === 'right') {
        setStep((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      } else {
        setStep((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      }
    },
    [slides.length]
  );
  useEffect(() => {
    intervalRef.current = setInterval(() => move('right'), 4000);
    return () => clearInterval(intervalRef.current);
  }, [move]);
  const onHandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (
      event.currentTarget instanceof HTMLElement &&
      slider.current instanceof Element
    ) {
      if (event.currentTarget.dataset.btn) {
        clearInterval(intervalRef.current);
        move(event.currentTarget.dataset.btn);
      }
    }
  };
  const onDotclick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement) {
      if (event.target.dataset.num) setStep(+event.target.dataset.num);
    }
  };
  useEffect(() => {
    if (slider.current)
      slider.current.style.transform = `translateX(${-100 * step}%)`;
  }, [step]);

  return (
    <div className={styles.container}>
      <div className={styles.slider} ref={slider}>
        {slides.map((elem, index) => {
          return (
            <div key={index} className={styles.slide}>
              <Image src={elem} alt="slides" width={900} height={900} />
            </div>
          );
        })}
      </div>
      <div className={styles.btnContainer}>
        <button data-btn="left" onClick={onHandleClick} className={styles.btn}>
          <IoIosArrowBack />
        </button>
        <button data-btn="right" onClick={onHandleClick} className={styles.btn}>
          <IoIosArrowForward />
        </button>
      </div>
      <div className={styles.dotsContainer}>
        {slides.map((_, index) => {
          return (
            <div
              className={`${styles.dot} ${
                index === step ? styles.activeDot : ''
              }`}
              key={`dot-${index}`}
              data-num={index}
              onClick={onDotclick}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
