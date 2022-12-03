import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

import styles from './Navbar.module.scss';

export default function Navbar({ items, selectedMenuItem, setSelectedMenuItem }) {
	return (
		<Flex className={styles.nav} align='center' justify='center'>
			{items.map((item) => (
				<div className={styles[`nav_item${item === selectedMenuItem ? '--selected' : ''}`]} onClick={() => setSelectedMenuItem(item)}>
					{item}
				</div>
			))}
		</Flex>
	);
}
