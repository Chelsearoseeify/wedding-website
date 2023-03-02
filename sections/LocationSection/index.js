import styles from "./index.module.scss";
import { Flex } from "@chakra-ui/react";
import Location from "../../modules/LocationCard/LocationCard.component";
import Heading from "../../modules/common/Heading/Heading.component";

export default function LocationSection() {
  return (
    <section className={styles.container}>
      <Heading
        title="Location"
        subtitle={
          "Se seguite le mappe troverete gli sposi. E' impossibile perdersi"
        }
      />
      <div className={styles.card_wrapper}>
        <Location
          type="Cerimonia"
          place={"Parrocchia San Francesco"}
          time={"14.30"}
          address={"Via Lualdi 21,"}
          city={"28100 Novara, NO"}
        />
        <Location
          type="Ricevimento"
          place={"Tenuta la quassa"}
          time={"17.30"}
          address={"Via Luigi Cadorna 327"}
          city={"2027 Ispra, VA"}
        />
      </div>
    </section>
  );
}
