import styles from './index.module.scss';
import Heading from '../../modules/common/Heading/Heading.component';
import Card from '../../modules/common/Card/Card.component';
import { CopyIcon } from '@chakra-ui/icons';
import { Text, Flex, IconButton } from '@chakra-ui/react';

export default function HoneyMoonSection() {
	return (
		<section classNames={styles.container}>
			<Heading title='Luna di Miele' subtitle='Voliamo in Madagascar!' />
			<Flex flexDirection={'row'}>
				<Card className={styles.card}>
					<div className={styles.lama} />
					<Flex flexDirection={'column'} gap={6}>
						<Text>Grazie per esserci vicini all'inizio del nostro viaggio, che proseguirà con un'avventura in Madagascar.</Text>
						<Text>Se desiderate contruibuire alla nostra luna di miele, vi lasciamo qui i riferimenti.</Text>
						<Flex direction={'row'} align='center' gap={2} className={styles.iban_container}>
							<Text>IT 47E0300203280157729629718</Text>
							<IconButton aria-label='Copy IBAN' icon={<CopyIcon />} isRound size={'md'} className={styles.copy_iban} />
						</Flex>
					</Flex>
				</Card>
			</Flex>
		</section>
	);
}
