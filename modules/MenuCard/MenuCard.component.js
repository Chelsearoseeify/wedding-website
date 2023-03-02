import styles from "./MenuCard.module.scss";
import { Flex, Text } from "@chakra-ui/react";
import Card from "../common/Card/Card.component";
import { MenuBottom } from "./../../modules/images/leaves/MenuBottom";
import { MenuTop } from "./../../modules/images/leaves/MenuTop";
import clsx from "clsx";

export default function Menu() {
  const antipasti = [
    {
      title: "Finger Food",
      description: [
        "Crostatine salate con zucchine e timo",
        "Cubotto di pan brioche con foie gras e marmellata di fragole",
        "Sfere di formaggio in crosta di pistacchi",
        "Roselline di pesce su crema di patate viola",
      ],
    },
    {
      title: "Fritti e Griglia a Passaggio",
      description: [
        "Soffice tempura di verdure e gamberi",
        "Mozzarella in carrozza",
        "Olive ascolane",
        "Fiori di zucca farciti con mozzarella ed acciuga",
        "Spiedini di gamberi e zucchine",
        "Spiedini di pollo e bacon",
      ],
    },
    {
      title: "Isola dei Salumi",
      description: [
        "Prosciutto di Parma",
        "Salame di Varzi",
        "Coppa Piacentina",
        "Speck dell'Alto Adige",
        "Pancetta coppata",
        "Lardo stagionato alle erbe",
        "Lonzino stagionato",
      ],
    },
    {
      title: "Angolo del Pesce",
      description: [
        "Salmone marinato su letto di misticanza",
        "Tonno e spada fumè",
        "Polpo con ananas e crema di bufala",
        "Cubo di spada con velluto di piselli e pomodoro essiccato",
        "Frittatina di gianchetti",
        "Fiori di zucchina e gamberi",
        "Tartare di tonno, finocchi e salsa allo zafferano",
      ],
    },
    {
      title: "	Angolo delle Verdure",
      description: [
        "Insalata di verdure e maionese all’aneto",
        "Farro grezzo alla mentuccia, sedano, fagioli neri e verdure di stagione",
        "Insalata di zucchine, fragole e gamberi con olio alla menta",
        "Quinoa gialla, germogli di soia e crema allo yoghurt",
        "Insalata greca con feta, pomodoro, cipolla rossa caramellata, peperoni, olive",
      ],
    },
  ];

  return (
    <>
      <div className={styles.pseudo_card_top} />
      <div className={styles.pseudo_card_right} />
      <Card className={styles.card}>
        <Flex alignItems="center" flexDirection={"column"}>
          <br />
          <Text className={styles.card_title} align={"center"}>
            Antipasti
          </Text>
          <Flex direction={"column"} gap="2" style={{ maxWidth: "90%" }}>
            {antipasti.map((a) => (
              <Flex direction={"column"} gap="0" key={a.title}>
                <Text className={styles.card_text} align={"center"}>
                  {a.title}
                </Text>
                {a.description.map((e, index) => (
                  <span
                    key={index}
                    className={styles.card_description}
                    align={"center"}
                  >
                    {e}
                  </span>
                ))}
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex alignItems="center" flexDirection={"column"}>
          <Text className={styles.card_title} align={"center"}>
            Primo
          </Text>
          <Text className={styles.card_text} align={"center"}>
            Risotto al lime e Martini
          </Text>
        </Flex>
        <Flex alignItems="center" flexDirection={"column"}>
          <Text className={styles.card_title} align={"center"}>
            Secondo
          </Text>
          <Flex direction={"column"} gap="0">
            <Text className={styles.card_text} align={"center"}>
              Mosaico di manzo
            </Text>
            <span className={styles.card_description} align={"center"}>
              flank steak al rosa, verdura candita, ortaggi e riduzione
              all’aceto di Modena stravecchio
            </span>
          </Flex>
        </Flex>
        <Flex alignItems="center" flexDirection={"column"}>
          <Text className={styles.card_title} align={"center"}>
            Torta
          </Text>
        </Flex>
      </Card>
      <div className={styles.pseudo_card_left} />
      <div className={styles.pseudo_card_bottom} />
    </>
  );
}
