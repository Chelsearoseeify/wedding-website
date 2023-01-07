import styles from './MenuFAB.module.scss';
import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import clsx from 'clsx';
export default function MenuFAB() {
	return (
		<>
			<input id='hamburger' className={styles.hamburger} type='checkbox' />
			<label className={clsx(styles.hamburger, styles.label)} for='hamburger'>
				<i></i>
			</label>
			<section className={styles.drawer_list}></section>
		</>
	);
	return <IconButton aria-label='Open menu' size='lg' icon={<HamburgerIcon w={6} h={6} />} className={styles.button} />;
}
