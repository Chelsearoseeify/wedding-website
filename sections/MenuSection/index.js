import styles from './index.module.scss';
import Menu from './../../modules/MenuCard/MenuCard.component';
import Heading from '../../modules/common/Heading/Heading.component';

export default function MenuSection() {
	return (
		<section classNames={styles.container}>
			<Heading title='Menu' subtitle={'Lorem Ipsum dolor sit amet'} />
			<Menu />
		</section>
	);
}
