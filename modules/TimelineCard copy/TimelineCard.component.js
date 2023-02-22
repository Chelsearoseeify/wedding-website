import styles from './TimelineCard.module.scss';
import clsx from 'clsx';
import { Flex, Text, Box, Center } from '@chakra-ui/react';
import Card from '../common/Card/Card.component';

export default function TimelineCard({ title, image = 1, date }) {
	return (
		<>
			{image < 5 ? (
				<div className={styles.container}>
					<div className={styles.image}>
						<Box alignItems={'center'} className={clsx(styles.card_image, styles[`image-${image}`])} />
					</div>
					<div className={styles.title}>
						<Text className={styles.card_title}>{title}</Text>
					</div>
					<div className={styles.dot}>
						<div className={styles.dot_symbol} />
					</div>
					<div className={styles.date}>
						<Card className={clsx(styles.card)}>
							<Flex direction={'column'} alignItems={'center'} className={styles.date_container}>
								<span className={clsx(styles.day_month, styles.date)}>{date.day_month}</span>
								<span className={clsx(styles.year, styles.date)}>{date.year}</span>
							</Flex>
						</Card>
					</div>
				</div>
			) : (
				<div className={styles.wedding_container}>
					<div className={styles.w_title}>
						<Text className={styles.card_title}>{title}</Text>
					</div>
					<div className={styles.w_dot}>
						<div className={styles.dot_symbol} />
					</div>
					<div className={styles.w_date}>
						<Card className={clsx(styles.card)}>
							<Flex direction={'column'} alignItems={'center'} className={styles.date_container}>
								<span className={clsx(styles.year, styles.date)}>30</span>
								<span className={clsx(styles.day_month, styles.date)}>GIUGNO</span>
								<span className={clsx(styles.year, styles.date)}>{date.year}</span>
							</Flex>
						</Card>
					</div>
					<div className={styles.w_image}>
						<Box alignItems={'center'} className={clsx(styles.card_image, styles[`image-${image}`])} />
					</div>
				</div>
			)}
		</>
	);
}
