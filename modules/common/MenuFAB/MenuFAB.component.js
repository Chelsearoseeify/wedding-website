import styles from "./MenuFAB.module.scss";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";

import clsx from "clsx";
export default function MenuFAB({
  items,
  selectedMenuItem,
  setSelectedMenuItem,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <input
        id="hamburger"
        className={styles.hamburger}
        type="checkbox"
        onChange={(e) => setIsMenuOpen(e.target.checked)}
        checked={isMenuOpen}
      />
      <label
        className={clsx(styles.hamburger, styles.label)}
        htmlFor="hamburger"
      >
        <i></i>
      </label>
      <div className={styles.drawer_list}>
        <Flex
          direction={"column"}
          justify="center"
          align={"center"}
          style={{ textTransform: "uppercase", padding: 10 }}
          gap={3}
        >
          {items.map((item) => (
            <a
              key={item.id}
              href={"#" + item.id}
              className={
                styles[
                  `drawer_list_item${
                    item === selectedMenuItem ? "--selected" : ""
                  }`
                ]
              }
            >
              <div
                onClick={() => {
                  setSelectedMenuItem(item.name);
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </div>
            </a>
          ))}
        </Flex>
      </div>
    </>
  );
  return (
    <IconButton
      aria-label="Open menu"
      size="lg"
      icon={<HamburgerIcon w={6} h={6} />}
      className={styles.button}
    />
  );
}
