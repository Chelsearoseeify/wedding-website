import styles from './index.module.scss';
import Heading from './../../modules/common/Heading/Heading.component';
import Timeline from '../../modules/Timeline/Timeline.component';

export default function OurStorySection() {
	return (
		<section classNames={styles.container}>
			<Heading title={'La Nostra Storia'} />
			<Timeline />
		</section>
	);
}
