import Navbar from '../modules/navbar/Navbar.component';

import styles from '../styles/Home.module.scss';
import { useState } from 'react';
import InvitoSection from '../sections/InvitationSection';
import LocationSection from '../sections/LocationSection';
import MenuSection from './../sections/MenuSection/index';
import HoneyMoonSection from '../sections/HoneyMoonSection/index';
import ConfirmSection from './../sections/ConfirmSection/index';

export default function Home() {
	const menuItems = [
		{ name: 'Invito', section: <InvitoSection /> },
		{ name: 'La Nostra Storia', section: <>Section 3</> },
		{ name: 'Location', section: <LocationSection /> },
		{ name: 'Menu', section: <MenuSection /> },
		{ name: 'Luna di Miele', section: <HoneyMoonSection /> },
		{ name: 'Conferma partecipazione', section: <ConfirmSection /> },
		{ name: 'Contatti', section: <>Section 4</> },
	];
	const [selectedMenuItem, setSelectedMenuItem] = useState('Conferma partecipazione');
	return (
		<div className={styles.base}>
			<Navbar items={menuItems.map((i) => i.name)} selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />

			<div className={styles.container}>
				{menuItems.map((item) => {
					return <>{item.name === selectedMenuItem && item.section}</>;
				})}
			</div>
		</div>
	);
}
