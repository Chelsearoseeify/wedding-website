import styles from './index.module.scss';
import Heading from '../../modules/common/Heading/Heading.component';
import Card from '../../modules/common/Card/Card.component';
import { Text, Flex } from '@chakra-ui/react';

export default function HoneyMoonSection() {
	return (
		<section classNames={styles.container}>
			<Heading title='Luna di Miele' subtitle='Voliamo in Perù!' />
			<Flex flexDirection={'row'}>
				<Card className={styles.card}>
					<Text>Se volete contribuire al nostro viaggio di nozze, vi lasciamo qui i riferimenti</Text>
				</Card>
				<div className={styles.lama} />
			</Flex>
		</section>
	);
}
