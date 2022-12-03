import styles from './ConfirmCard.module.scss';
import { Flex, Text, Stack, Input, Select, IconButton } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, MinusIcon } from '@chakra-ui/icons';
import Card from '../common/Card/Card.component';
import { MenuBottom } from '../images/leaves/MenuBottom';
import { MenuTop } from '../images/leaves/MenuTop';
import clsx from 'clsx';
import GuestForm from './GuestForm.component ';
import { useState } from 'react';

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

	console.log(guests);

	return (
		<>
			<div className={styles.pseudo_card}></div>
			<Card className={styles.card}>
				{guests.map((g, index) => (
					<Flex direction={'row'} gap={3} key={g.index}>
						<GuestForm guest={g} setGuests={setGuests} />
						{index === guests.length - 1 ? (
							<IconButton
								aria-label='Add guest'
								icon={<AddIcon />}
								onClick={() => setGuests((prev) => [...prev, emptyGuest(index + 1)])}
							/>
						) : (
							<IconButton
								aria-label='Add guest'
								icon={<MinusIcon />}
								onClick={() => setGuests((prev) => prev.filter((guest) => g.index !== guest.index))}
							/>
						)}
					</Flex>
				))}
			</Card>
		</>
	);
}
