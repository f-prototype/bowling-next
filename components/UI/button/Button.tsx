import styles from './Button.module.scss';
type Props = {
  children: string;
  onClick?: () => void;
  className?: string;
};
export default function Button({ onClick, className, children }: Props) {
  return (
    <button className={className ? className : styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}
