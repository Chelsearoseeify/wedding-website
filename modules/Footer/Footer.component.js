import { Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";

import styles from "./Footer.module.scss";
import { Mail } from "./../images/icons/Mail";
import { Instagram } from "./../images/icons/Instagram";
import { PhoneK } from "../images/icons/PhoneK";
import { PhoneR } from "../images/icons/PhoneR";

import { CopyToClipboard } from "react-copy-to-clipboard";

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
        <div
          onClick={() => window.open("mailto:matrimonio.kellyriky@gmail.com")}
        >
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
            key={item.id}
          >
            <div onClick={() => setSelectedMenuItem(item.name)}>
              {item.name}
            </div>
          </a>
        ))}
      </Flex>
      <Flex align={"center"} justify="center" gap={7} marginBottom={2}>
        <CopyToClipboard
          text={"3289218680"}
          onCopy={() => console.log("copied")}
        >
          <IconButton
            variant="ghost"
            aria-label="Cell Kelly"
            icon={<PhoneK />}
            className={styles.footer_button}
          />
        </CopyToClipboard>
        <IconButton
          variant="ghost"
          onClick={() => window.open("mailto:matrimonio.kellyriky@gmail.com")}
          className={styles.footer_button}
          icon={<Mail />}
        />
        <CopyToClipboard
          text={"3407423565"}
          onCopy={() => console.log("copied")}
        >
          <IconButton
            variant="ghost"
            aria-label="Cell Riky"
            icon={<PhoneR />}
            className={styles.footer_button}
          />
        </CopyToClipboard>
      </Flex>
      <Flex className={styles.signing}>
        © 2023{" "}
        <a
          href={"https://github.com/Chelsearoseeify"}
          style={{ marginLeft: 5 }}
        >
          Selene Malosso
        </a>
        . All rights reserved.
      </Flex>
    </Flex>
  );
}
