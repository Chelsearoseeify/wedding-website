import styles from "./InvitoCard.module.scss";
import { Grid, Text } from "@chakra-ui/react";
import Card from "../common/Card/Card.component";
import { InvitationBottom } from "../images/leaves/InvitationBottom";
import { InvitationTop } from "../images/leaves/InvitationTop";
import clsx from "clsx";

export default function Invito() {
  return (
    <div className={styles.card_container}>
      <InvitationTop className={clsx(styles.leaves, styles.top)} />
      <div className={styles.card}>
        {
          <Grid
            gap={1}
            autoflow="row dense"
            className={styles["card_text-container"]}
          >
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
          </Grid>
        }
      </div>

      <InvitationBottom className={clsx(styles.leaves, styles.bottom)} />
    </div>
  );
}
