import styles from './ConfirmCard.module.scss';
import { Flex, Text, Stack, Input, Select, IconButton, Textarea, Button } from '@chakra-ui/react';
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
	const [toSend, setToSend] = useState({
		from_name: 'Cristina',
		from_surname: 'Ricci',
		to_name: 'me stessa <3',
		message: 'sei e sarai sempre stupenda',
		reply_to: 'non so',
	});
	console.log(guests);

	const onSubmit = (e) => {
		e.preventDefault();
		send('service_g2gdsjj', 'template_w5yi26h', toSend, 'F-y0D4sNpUnU6Tbhm')
			.then((response) => {
				console.log('SUCCESS!', response.status, response.text);
			})
			.catch((err) => {
				console.log('FAILED...', err);
			});
	};

	return (
		<>
			<div className={styles.pseudo_card}></div>
			<Card className={styles.card}>
				{guests.map((g, index) => (
					<Flex direction={'row'} gap={3} key={g.index} align='end'>
						<GuestForm guest={g} setGuests={setGuests} />
						{index === guests.length - 1 ? (
							<IconButton
								aria-label='Add guest'
								icon={<AddIcon />}
								onClick={() => setGuests((prev) => [...prev, emptyGuest(index + 1)])}
								className={clsx(styles.button, styles.icon_button)}
								size={'sm'}
							/>
						) : (
							<IconButton
								aria-label='Add guest'
								icon={<MinusIcon />}
								onClick={() => setGuests((prev) => prev.filter((guest) => g.index !== guest.index))}
								className={clsx(styles.button, styles.icon_button)}
								size={'sm'}
							/>
						)}
					</Flex>
				))}
				<div>
					<Text ml={1} mb={2}>
						Note Aggiuntive
					</Text>
					<Textarea placeholder='Aggiungi qualcosa' resize={'none'} />
				</div>
				<Button variant='solid' className={styles.button} margin={'auto'} onClick={onSubmit}>
					Invia
				</Button>
			</Card>
		</>
	);
}
