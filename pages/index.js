import Navbar from "../modules/navbar/Navbar.component";

import styles from "../styles/Home.module.scss";
import { useState } from "react";
import InvitoSection from "../sections/InvitationSection";
import LocationSection from "../sections/LocationSection";
import MenuSection from "./../sections/MenuSection/index";
import HoneyMoonSection from "../sections/HoneyMoonSection/index";
import ConfirmSection from "./../sections/ConfirmSection/index";
import OurStorySection from "./../sections/OurStorySection/index";
import MenuFAB from "../modules/common/MenuFAB/MenuFAB.component";
import Footer from "./../modules/Footer/Footer.component";

export default function Home() {
  const menuItems = [
    { id: "invitation", name: "Invito", section: <InvitoSection /> },
    { id: "our_story", name: "La Nostra Storia", section: <OurStorySection /> },
    { id: "location", name: "Location", section: <LocationSection /> },
    { id: "menu", name: "Menu", section: <MenuSection /> },
    {
      id: "honeymoon",
      name: "Luna di Miele",
      section: <HoneyMoonSection />,
    },
    {
      id: "confirmation",
      name: "Conferma partecipazione",
      section: <ConfirmSection />,
    },
    { id: "contacts", name: "Contatti", section: <></> },
  ];
  const [selectedMenuItem, setSelectedMenuItem] = useState("La Nostra Storia");
  return (
    <>
      <div className={styles.base}>
        <MenuFAB
          items={menuItems}
          selectedMenuItem={selectedMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
        />
        {/* 	<Navbar items={menuItems} selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />
         */}

        {menuItems.map((item) => {
          return (
            <div key={item.id} id={item.id} className={styles.section}>
              {item.section}
            </div>
          );
        })}

        <Footer
          items={menuItems}
          selectedMenuItem={selectedMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
        />
      </div>
    </>
  );
}
