import styles from './LocationCard.module.scss';
import { Flex, Text } from '@chakra-ui/react';
import Card from '../common/Card/Card.component';
import clsx from 'clsx';

export default function Location({ type, place, time, address, city }) {
	return (
		<>
			{/* <div className={styles.pseudo_card}></div> */}
			<Card className={styles.card}>
				<Flex minWidth='max-content' alignItems='center' gap='2' flexDirection={'column'}>
					<Text className={styles.card_title} align={'center'}>
						{type}
					</Text>
				</Flex>
				<Flex gap={1.5} flexDirection='column' align={'center'} justifyContent='center' className={styles.card_text}>
					<Text className={styles.place}>{place}</Text>
					<Text className={styles.time}>ore {time}</Text>
					<div>
						<Text className={styles.address}>{address}</Text>
						<Text className={styles.city}>{city}</Text>
					</div>
				</Flex>
			</Card>
		</>
	);
}
