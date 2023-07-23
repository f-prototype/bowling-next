import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.scss';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};
const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? 'active' : ''}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
