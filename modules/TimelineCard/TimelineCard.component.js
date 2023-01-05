import styles from './TimelineCard.module.scss';
import clsx from 'clsx';
import { Flex, Text, Box, Center } from '@chakra-ui/react';
import Card from '../common/Card/Card.component';

export default function TimelineCard({ title, image = 1 }) {
	return (
		<Card className={clsx(styles.card, styles[`card_leave--${image}`])}>
			<Flex flexDirection={'column'} align={'center'} justify={'center'}>
				<Text className={styles.card_title}>{title}</Text>
				{image % 2 ? (
					<Flex direction={'row'} justifyContent={'center'}>
						<Center>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae congue neque. Orci varius natoque penatibus et
							magnis dis parturient montes, nascetur ridiculus mus.
						</Center>
						<Box className={clsx(styles.card_image, styles[`image-${image}`])} />
					</Flex>
				) : (
					<Flex direction={'row'} justifyContent={'center'}>
						<Box className={clsx(styles.card_image, styles[`image-${image}`])} />
						<Center>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae congue neque. Orci varius natoque penatibus et
							magnis dis parturient montes, nascetur ridiculus mus.
						</Center>
					</Flex>
				)}
			</Flex>
		</Card>
	);
}
