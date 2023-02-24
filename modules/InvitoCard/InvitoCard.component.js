import styles from "./InvitoCard.module.scss";
import { Grid, Text } from "@chakra-ui/react";
import Card from "../common/Card/Card.component";
import clsx from "clsx";

export default function Invito() {
  return (
    <Card className={styles.card_container}>
      <div className={clsx(styles.leave_container, styles.top)} />
      <div className={styles.text_container}>
        <div autoFlow="row dense" className={styles["text_container-border"]}>
          <Text className={styles.plain_text} align={"center"}>
            Siete invitati al matrimonio
          </Text>
          <Text className={styles.plain_text} align={"center"}>
            di
          </Text>
          <div className={styles.names_container}>
            <Text className={clsx(styles.names_text, styles.kelly)}>
              Carlotta
            </Text>
            <h1 className={styles.and}>&</h1>
            <Text className={clsx(styles.names_text, styles.ricky)}>
              Riccardo
            </Text>
          </div>
          <Text className={styles.plain_text} align={"center"}>
            il
          </Text>
          <Text className={styles.date} align={"center"}>
            30.06.2023
          </Text>
        </div>
      </div>
      <div className={clsx(styles.leave_container, styles.bottom)} />
    </Card>
  );
}
