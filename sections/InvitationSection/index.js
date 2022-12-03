import styles from './index.module.scss';
import Invito from '../../modules/InvitoCard/InvitoCard.component';

export default function InvitoSection() {
	return (
		<section classNames={styles.container}>
			<Invito />
		</section>
	);
}
