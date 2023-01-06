import styles from './Timeline.module.scss';
import clsx from 'clsx';
import { Flex } from '@chakra-ui/react';
import TimelineCard from '../TimelineCard/TimelineCard.component';

export default function Timeline() {
	const timelineElements = [
		{
			index: 1,
			title: 'Primo Incontro',
			date: { day_month: 'OTTOBRE', year: '2014' },
		},
		{
			index: 2,
			title: 'Primo Appuntamento',
			date: { day_month: 'APRILE', year: '2015' },
		},
		{
			index: 3,
			title: 'Andiamo a vivere insieme',
			date: { day_month: 'GENNAIO', year: '2019' },
		},
		{
			index: 4,
			title: 'Proposta',
			date: { day_month: 'AGOSTO', year: '2022' },
		},
		{
			index: 5,
			title: 'Matrimonio',
			date: { day_month: '30 GIUGNO', year: '2023' },
		},
	];
	return (
		<>
			<Flex flexDirection={'column'} gap={8} className={styles.timeline_container}>
				{timelineElements.map((e) => (
					<TimelineCard title={e.title} image={e.index} date={e.date} />
				))}
			</Flex>
		</>
	);
}
