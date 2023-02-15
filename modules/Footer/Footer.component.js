import { Flex } from "@chakra-ui/react";
import { useState } from "react";

import styles from "./Footer.module.scss";
import { Mail } from "./../images/icons/Mail";
import { Instagram } from "./../images/icons/Instagram";
import { Phone } from "./../images/icons/Phone";

export default function Footer({
  items,
  selectedMenuItem,
  setSelectedMenuItem,
}) {
  return (
    <Flex
      className={styles.footer}
      align="center"
      justify="center"
      direction={"column"}
      gap={5}
    >
      <Flex
        className={styles.footer_link}
        align={"center"}
        justify="space-between"
      >
        <div>Domande?</div>{" "}
        <div onClick={() => window.open("mailto:email@example.com")}>
          Scrivici un'email
        </div>
      </Flex>
      <Flex
        direction={"column"}
        justify="center"
        align={"center"}
        style={{ textTransform: "uppercase" }}
        gap={1}
      >
        {items.map((item) => (
          <a
            href={"#" + item.id}
            className={
              styles[`nav_item${item === selectedMenuItem ? "--selected" : ""}`]
            }
          >
            <div onClick={() => setSelectedMenuItem(item.name)}>
              {item.name}
            </div>
          </a>
        ))}
      </Flex>
      <Flex align={"center"} justify="center" gap={7}>
        <Mail />
        <Instagram />
        <Phone />
      </Flex>
      <br />
    </Flex>
  );
}
