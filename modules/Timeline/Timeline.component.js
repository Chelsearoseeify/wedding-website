import styles from './Timeline.module.scss';
import clsx from 'clsx';
import { Flex } from '@chakra-ui/react';
import TimelineCard from '../TimelineCard/TimelineCard.component';

export default function Timeline() {
	const timelineElements = [
		{
			index: 1,
			title: 'Primo Incontro',
			date: { day_month: '30 GIUGNO', year: '2023' },
		},
		{
			index: 2,
			title: 'Primo Appuntamento',
			date: { day_month: '30 GIUGNO', year: '2023' },
		},
		{
			index: 3,
			title: 'Andiamo a vivere insieme',
			date: { day_month: '30 GIUGNO', year: '2023' },
		},
		{
			index: 4,
			title: 'Proposta',
			date: { day_month: '30 GIUGNO', year: '2023' },
		},
		{
			index: 5,
			title: 'Matrimonio',
			date: { day_month: '30 GIUGNO', year: '2023' },
		},
	];
	return (
		<>
			<div className={styles.timeline} />
			<Flex flexDirection={'column'} gap={2}>
				{timelineElements.map((e) => (
					<>
						{e.index % 2 ? (
							<Flex gap={8} align='center'>
								<TimelineCard title={e.title} image={e.index} />
								<div className={styles.timeline_dot} />
								<Flex direction={'column'} alignItems={'flex-start'} className={styles.date_container}>
									<span className={clsx(styles.day_month, styles.date)}>{e.date.day_month}</span>
									<span className={clsx(styles.year, styles.date)}>{e.date.year}</span>
								</Flex>
							</Flex>
						) : (
							<Flex gap={8} align='center'>
								<Flex direction={'column'} alignItems={'flex-end'} className={styles.date_container}>
									<span className={clsx(styles.day_month, styles.date)}>{e.date.day_month}</span>
									<span className={clsx(styles.year, styles.date)}>{e.date.year}</span>
								</Flex>
								<div className={styles.timeline_dot} />
								<TimelineCard title={e.title} image={e.index} />
							</Flex>
						)}
					</>
				))}
			</Flex>
		</>
	);
}
