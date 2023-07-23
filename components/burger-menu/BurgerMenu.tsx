import Link from 'next/link';
import styles from './BurgerMenu.module.scss';
import { usePathname } from 'next/navigation';
type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};
export default function BurgerMenu({ navLinks }: Props) {
  const onHandleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) {
      const target = e.target;
      if (target.classList.contains(styles.open)) {
        target.classList.remove(styles.open);
        target.classList.add(styles.close);
      } else {
        target.classList.add(styles.open);
        target.classList.remove(styles.close);
      }
    }
  };
  const pathname = usePathname();
  return (
    <>
      <div className={styles.menuBtn} onClick={onHandleClick}>
        <span className={styles.icon}></span>
        <span className={styles.text}>MENU</span>
      </div>
      <div className={styles.nav}>
        <div className={styles.links}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                href={link.href}
                key={link.href}
                className={`${styles.a} ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
