import styles from './MenuFAB.module.scss';
import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';

import clsx from 'clsx';
export default function MenuFAB({ items, selectedMenuItem, setSelectedMenuItem }) {
	return (
		<>
			<input id='hamburger' className={styles.hamburger} type='checkbox' />
			<label className={clsx(styles.hamburger, styles.label)} for='hamburger'>
				<i></i>
			</label>
			<section className={styles.drawer_list}>
				<Flex direction={'column'} justify='center' align={'center'} style={{ textTransform: 'uppercase', padding: 10 }} gap={3}>
					{items.map((item) => (
						<a href={'#' + item.id} className={styles[`drawer_list_item${item === selectedMenuItem ? '--selected' : ''}`]}>
							<div onClick={() => setSelectedMenuItem(item.name)}>{item.name}</div>
						</a>
					))}
				</Flex>
			</section>
		</>
	);
	return <IconButton aria-label='Open menu' size='lg' icon={<HamburgerIcon w={6} h={6} />} className={styles.button} />;
}
