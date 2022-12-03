import styles from './Card.module.scss';
import clsx from 'clsx';

export default function Card({ children, className }) {
	return <div className={clsx(styles.container, className)}>{children}</div>;
}
