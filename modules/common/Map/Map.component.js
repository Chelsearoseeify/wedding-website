import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import React from 'react';

import clsx from 'clsx';

const LocationPin = ({ text }) => (
	<div className='pin'>
		<p className='pin-text'>{text}</p>
	</div>
);

export const Map = ({ location, zoomLevel }) => {
	return (
		<div className='map'>
			<h2 className='map-h2'>Come Visit Us At Our Campus</h2>

			<div className='google-map'></div>
		</div>
	);
};
