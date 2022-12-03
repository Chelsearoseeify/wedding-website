import styles from './MenuCard.module.scss';
import { Flex, Text } from '@chakra-ui/react';
import Card from '../common/Card/Card.component';
import { MenuBottom } from './../../modules/images/leaves/MenuBottom';
import { MenuTop } from './../../modules/images/leaves/MenuTop';
import clsx from 'clsx';

export default function Menu() {
	const antipasti = ['Finger Food', 'Fritti e Griglia a Passaggio', 'Isola dei Salumi', 'Angolo del Pesce', '	Angolo delle Verdure'];

	return (
		<>
			<div className={styles.pseudo_card}></div>
			<Card className={styles.card}>
				<Flex minWidth='max-content' alignItems='center' gap='2' flexDirection={'column'}>
					<Text className={styles.card_title} align={'center'}>
						Antipasti
					</Text>
					{antipasti.map((a) => (
						<Text className={styles.card_text} align={'center'}>
							{a}
						</Text>
					))}
				</Flex>
				<Flex minWidth='max-content' alignItems='center' gap='2' flexDirection={'column'}>
					<Text className={styles.card_title} align={'center'}>
						Primo
					</Text>
					<Text className={styles.card_text} align={'center'}>
						Risotto al lime e Martini
					</Text>
				</Flex>
				<Flex minWidth='max-content' alignItems='center' gap='2' flexDirection={'column'}>
					<Text className={styles.card_title} align={'center'}>
						Secondo
					</Text>
					<Text className={styles.card_text} align={'center'}>
						Mosaico di manzo flank steak al rosa,
					</Text>
					<Text className={styles.card_text} align={'center'}>
						verdura candita, ortaggi
					</Text>
				</Flex>
				<Flex minWidth='max-content' alignItems='center' gap='2' flexDirection={'column'}>
					<Text className={styles.card_title} align={'center'}>
						Torta
					</Text>
				</Flex>
			</Card>
		</>
	);
}
