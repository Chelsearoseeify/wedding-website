import styles from './Heading.module.scss';

import { Text } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { HeadingLeft } from '../../images/leaves/HeadingLeft';
import { HeadingRight } from '../../images/leaves/HeadingRight';
import clsx from 'clsx';

export default function Heading({ title, subtitle, className }) {
	return (
		<Flex className={clsx(styles.heading, className)} direction='column'>
			<Flex align={'center'} justify='center' gap={4}>
				<HeadingLeft />
				<Text className={styles.heading_title}>{title}</Text>
				<HeadingRight />
			</Flex>
			<Text className={styles.heading_subtitle}>{subtitle}</Text>
		</Flex>
	);
}
