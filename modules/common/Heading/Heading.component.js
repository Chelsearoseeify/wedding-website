import styles from './Heading.module.scss';

import { Text } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import clsx from 'clsx';

export default function Heading({ title, subtitle, className }) {
	return (
		<Flex className={clsx(styles.heading, className)} direction='column'>
			<Text className={styles.heading_title}>{title}</Text>
			<Text className={styles.heading_subtitle}>{subtitle}</Text>
		</Flex>
	);
}
