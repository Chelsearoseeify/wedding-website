import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

import styles from './Navbar.module.scss';

export default function Navbar({ items, selectedMenuItem, setSelectedMenuItem }) {
	return (
		<Flex className={styles.nav} align='center' justify='center'>
			{items.map((item) => (
				<a href={'#' + item.id} className={styles[`nav_item${item === selectedMenuItem ? '--selected' : ''}`]}>
					<div onClick={() => setSelectedMenuItem(item.name)}>{item.name}</div>
				</a>
			))}
		</Flex>
	);
}
