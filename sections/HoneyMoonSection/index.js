import styles from "./index.module.scss";
import Heading from "../../modules/common/Heading/Heading.component";
import Card from "../../modules/common/Card/Card.component";
import { CopyIcon } from "@chakra-ui/icons";
import { Text, Flex, IconButton, Button } from "@chakra-ui/react";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function HoneyMoonSection() {
  const iban = "IT 65 N 03058 01604 100571094887";
  const iban_to_copy = "IT65N0305801604100571094887";

  return (
    <section className={styles.container}>
      <Heading title="Luna di Miele" subtitle="Voliamo in Madagascar!" />
      <Flex flexDirection={"column"}>
        <div className={styles.pseudo_card_top} />
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
              Se desiderate contribuire alla nostra luna di miele, vi lasciamo
              qui i riferimenti.
            </Text>{" "}
            <Flex align={"center"} justify="center">
              <CopyToClipboard
                text={iban_to_copy}
                onCopy={() => console.log("copied")}
              >
                <Button
                  aria-label="Copy IBAN"
                  icon={<CopyIcon />}
                  size={"sm"}
                  className={styles.copy_iban}
                >
                  Copy IBAN
                </Button>
              </CopyToClipboard>
            </Flex>
            <Flex
              direction={"column"}
              align="center"
              gap={2}
              className={styles.iban_container}
            >
              <Text>{iban}</Text>
            </Flex>
          </Flex>
        </Card>
        <div className={styles.pseudo_card_bottom} />
      </Flex>
    </section>
  );
}
