import styles from './index.module.scss';
import Confirm from '../../modules/ConfirmCard/ConfirmCard.component';
import Heading from '../../modules/common/Heading/Heading.component';

export default function ConfirmSection() {
	return (
		<section classNames={styles.container}>
			<Heading title='Conferma partecipazione' />
			<Confirm />
		</section>
	);
}
