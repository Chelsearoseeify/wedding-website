import styles from './ConfirmCard.module.scss';
import { Flex, Text, Stack, Input, Alert, AlertTitle, AlertIcon, AlertDescription, IconButton, Textarea, Button } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, MinusIcon } from '@chakra-ui/icons';
import Card from '../common/Card/Card.component';
import { MenuBottom } from '../images/leaves/MenuBottom';
import { MenuTop } from '../images/leaves/MenuTop';
import clsx from 'clsx';
import GuestForm from './GuestForm.component ';
import { useState } from 'react';
import { send } from 'emailjs-com';

const emptyGuest = (index = 0) => {
	return {
		index,
		name: '',
		surname: '',
		preferences: '',
	};
};

export default function Confirm() {
	const [guests, setGuests] = useState([emptyGuest()]);
	const [lastUserIndex, setLastUserIndex] = useState(0);
	const [sent, setSent] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		let objToSend = {
			from_name: guests[0].name,
			from_surname: guests[0].surname,
		};

		guests.forEach((g, index) => (objToSend[`part${index + 1}`] = `- ${g.name} ${g.surname}${g.preferences === '' ? '' : `, ${g.preferences}`}`));
		send('service_g2gdsjj', 'template_w5yi26h', objToSend, 'F-y0D4sNpUnU6Tbhm')
			.then((response) => {
				console.log('SUCCESS!', response.status, response.text);
			})
			.catch((err) => {
				console.log('FAILED...', err);
			});
		setSent(true);
	};

	return (
		<>
			<div className={styles.pseudo_card_top} />
			<Card className={styles.card}>
				{!sent ? (
					<Flex direction={'column'} gap={3}>
						{/* 	{guests.map((g, index) => (
							<Flex direction={'row'} gap={3} key={g.index} align='end'>
								<GuestForm guest={g} setGuests={setGuests} />
								{
									<IconButton
										aria-label='Add guest'
										icon={<MinusIcon />}
										onClick={() => setGuests((prev) => prev.filter((guest) => g.index !== guest.index))}
										className={clsx(styles.button, styles.icon_button)}
										size={'xs'}
										disabled={guests.length === 1}
									/>
								}
							</Flex>
						))} */}
						<IconButton
							aria-label='Add guest'
							icon={<AddIcon />}
							onClick={() => {
								setGuests((prev) => [...prev, emptyGuest(lastUserIndex + 1)]);
								setLastUserIndex((prev) => prev + 1);
							}}
							className={clsx(styles.button)}
							size={'xs'}
						/>
						<div>
							<Text ml={1} mb={2}>
								Note Aggiuntive
							</Text>
							<Textarea placeholder='Aggiungi qualcosa' resize={'none'} className={styles.input} />
						</div>
						<Button variant='solid' className={styles.button} margin={'auto'} onClick={onSubmit}>
							Invia
						</Button>
					</Flex>
				) : (
					<Alert
						status='success'
						variant='subtle'
						flexDirection='column'
						alignItems='center'
						justifyContent='center'
						textAlign='center'
						height='350px'
						className={styles.alert}>
						<AlertIcon boxSize='40px' mr={0} className={styles.success_icon} />
						<AlertTitle mt={4} mb={1} fontSize='lg'>
							Partecipazione Inviata!
						</AlertTitle>
						<AlertDescription maxWidth='sm'>
							Grazie per aver inviato la tua partecipazione. Siamo felicissimi di festeggiare con tutti voi!
						</AlertDescription>
					</Alert>
				)}
			</Card>
			<div className={styles.pseudo_card_bottom} />
		</>
	);
}
