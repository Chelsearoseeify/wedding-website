import styles from "./index.module.scss";
import Heading from "../../modules/common/Heading/Heading.component";
import Card from "../../modules/common/Card/Card.component";
import { CopyIcon } from "@chakra-ui/icons";
import { Text, Flex, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function HoneyMoonSection() {
  const iban = "IT65N0305801604100571094887";

  return (
    <section classNames={styles.container}>
      <Heading title="Luna di Miele" subtitle="Voliamo in Madagascar!" />
      <Flex flexDirection={"row"}>
        <Card className={styles.card}>
          <div className={styles.image_container}>
            <Image src="/lemurs.jpg" alt="Lemurs" width={450} height={320} />
          </div>
          <Flex flexDirection={"column"} gap={6}>
            <Text>
              Come ben sapete, affrontiamo la vita con spirito avventuroso, ma
              sempre consapevoli di quali siano le nostre radici.
            </Text>
            <Text>Grazie di esserlo da sempre.</Text>
            <Text>
              Se desiderate contruibuire alla nostra luna di miele, vi lasciamo
              qui i riferimenti.
            </Text>
            <Flex
              direction={"row"}
              align="center"
              gap={2}
              className={styles.iban_container}
            >
              <Text>{iban}</Text>
              <CopyToClipboard
                text={iban.replace(" ", "")}
                onCopy={() => console.log("yay")}
              >
                <IconButton
                  aria-label="Copy IBAN"
                  icon={<CopyIcon />}
                  isRound
                  size={"md"}
                  className={styles.copy_iban}
                />
              </CopyToClipboard>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </section>
  );
}
