'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';
import Navigation from '../navigation/Navigation';
import Logo from '../logo/Logo';
import Button from '../UI/button/Button';
import BurgerMenu from '../burger-menu/BurgerMenu';
import BookCallModal from '../bookCall/BookCallModal';

const Header = () => {
  const navItems = [
    { label: 'БОУЛИНГ', href: '/' },
    { label: 'БИЛЬЯРД', href: '/billiards' },
    { label: 'МЕНЮ', href: '/menu.pdf' },
    { label: 'НОВОСТИ', href: '/news' },
    { label: 'АКЦИИ', href: '/shares' },
    { label: 'КОНТАКТЫ', href: '/contacts' },
    { label: '3Д ТУР', href: '/tour' },
  ];

  const elem = useRef<HTMLDivElement>(null);
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const close = () => {
    SetIsModalOpen(false);
  };
  const onHandleClick = () => {
    SetIsModalOpen(true);
  };
  useEffect(() => {
    window.onscroll = () => {
      if (!elem.current) return;
      if (window.scrollY > 0) {
        elem.current.classList.add(styles.open);
      } else {
        elem.current.classList.remove(styles.open);
      }
    };
  }, []);
  return (
    <header className={styles.container} ref={elem}>
      <Logo />
      <Navigation navLinks={navItems} />
      <Button onClick={onHandleClick}>Обратный звонок</Button>
      <BurgerMenu navLinks={navItems} />
      <BookCallModal isModalOpen={isModalOpen} close={close} />
    </header>
  );
};

export default Header;
