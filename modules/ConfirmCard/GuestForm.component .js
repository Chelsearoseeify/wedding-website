import styles from './ConfirmCard.module.scss';
import { Flex, Text, Stack, Input, Select, IconButton } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';
import Card from '../common/Card/Card.component';
import { MenuBottom } from '../images/leaves/MenuBottom';
import { MenuTop } from '../images/leaves/MenuTop';
import clsx from 'clsx';

export default function GuestForm({ guest, setGuests }) {
	const updateGuest = (value, field) => {
		setGuests((prev) => [
			...prev.map((g) => {
				if (g.index === guest.index) g[field] = value;
				return g;
			}),
		]);
	};

	return (
		<Stack spacing={3} shouldWrapChildren direction='column'>
			<Text className={styles.label}>Nome</Text>
			<Input
				placeholder='Il tuo nome'
				value={guest.name}
				onChange={(event) => updateGuest(event.target.value, 'name')}
				className={styles.input}
			/>

			<Text className={styles.label}>Cognome</Text>
			<Input
				placeholder='Il tuo cognome'
				value={guest.surname}
				onChange={(event) => updateGuest(event.target.value, 'surname')}
				className={styles.input}
			/>
			<Text className={styles.label}>Preferenze alimentari</Text>
			<Select
				defaultValue={'none'}
				value={guest.preferences}
				onChange={(event) => updateGuest(event.target.value, 'preferences')}
				className={styles.input}>
				<option value='none'>Nessuna</option>
				<option value='celiac'>Celiaco</option>
				<option value='lactose_intolerant'>Intollerante al lattosio</option>
				<option value='vegetarian'>Vegetariano</option>
				<option value='vegan'>Vegano</option>
			</Select>
		</Stack>
	);
}
