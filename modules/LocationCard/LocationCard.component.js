import styles from "./LocationCard.module.scss";
import { Flex, Text } from "@chakra-ui/react";
import Card from "../common/Card/Card.component";
import Map from "../common/Map/Map.component";
import clsx from "clsx";

export default function Location({ type, place, time, address, city }) {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };
  return (
    <>
      {/* <div className={styles.pseudo_card}></div> */}
      <Card className={styles.card}>
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="2"
          flexDirection={"column"}
        >
          <Text className={styles.card_title} align={"center"}>
            {type}
          </Text>
        </Flex>
        <Flex
          gap={1.5}
          flexDirection="column"
          align={"center"}
          justifyContent="center"
          className={styles.card_text}
        >
          <Text className={styles.place}>{place}</Text>
          <Text className={styles.time}>
            <b>ore {time}</b>
          </Text>
          <div>
            <Text className={styles.address}>{address}</Text>
            <Text className={styles.city}>{city}</Text>
          </div>
        </Flex>
        <Flex>
          {type === "Cerimonia" ? (
            <iframe
              width={"100%"}
              height="300"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Via%20Eletto,%20Via%20Lualdi,%2021,%2028100%20Novara%20NO&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          ) : (
            <iframe
              width={"100%"}
              height="300"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Via%20Luigi%20Cadorna%20327,%202027%20Ispra,%20VA&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          )}
        </Flex>
      </Card>
    </>
  );
}
