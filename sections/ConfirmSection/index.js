import styles from './index.module.scss';
import Confirm from '../../modules/ConfirmCard/ConfirmCard.component';
import Heading from '../../modules/common/Heading/Heading.component';

export default function ConfirmSection() {
	return (
		<section classNames={styles.container}>
			<Heading
				title='Conferma partecipazione'
				subtitle={
					<>
						Aggiungi qui sotto i nomi di tutti gli invitati che parteciperanno e le loro preferenze alimentari.
						<br />
						<strong>Conferma entro il 15 Aprile</strong>
					</>
				}
			/>
			<Confirm />
		</section>
	);
}
