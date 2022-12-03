import styles from './InvitoCard.module.scss';
import { Grid, Text } from '@chakra-ui/react';
import Card from '../common/Card/Card.component';
import { InvitationBottom } from '../images/leaves/InvitationBottom';
import { InvitationTop } from '../images/leaves/InvitationTop';
import clsx from 'clsx';

export default function Invito() {
	return (
		<Card className={styles.card}>
			<Grid gap={2} autoFlow='row dense'>
				<Text className={styles.plain_text} align={'center'}>
					Matrimonio di
				</Text>

				<div className={styles.names_container}>
					<Text className={clsx(styles.names_text, styles.kelly)}>Carlotta</Text>
					<h1 className={styles.and}>&</h1>
					<Text className={clsx(styles.names_text, styles.ricky)} textAlign={'end'}>
						Riccardo
					</Text>
				</div>

				<Text className={styles.date} align={'center'}>
					30.06.2023
				</Text>
			</Grid>
			<InvitationBottom className={clsx(styles.leaves, styles.top_left)} />
			<InvitationTop className={clsx(styles.leaves, styles.bottom_right)} />
		</Card>
	);
}
