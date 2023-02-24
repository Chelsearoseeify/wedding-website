import styles from "./Timeline.module.scss";
import clsx from "clsx";
import { Flex, Text, Box, Center } from "@chakra-ui/react";
import Image from "next/image";

export default function Timeline() {
  const timelineElements = [
    {
      index: 1,
      title: "Primi Incontri",
      date: { day_month: "OTTOBRE", year: "2014" },
      text: "Ogni mattina, alle 7.18, ci davamo appuntamento sul binario del suburbano S6 per affrontare vicini vicini il tragitto che ci avrebbe scortato in università.",
    },
    {
      index: 2,
      title: "Primo Appuntamento",
      date: { day_month: "GIUGNO", year: "2015" },
      text: "Dopo un indelebile Viaggio della Memoria, la primavera fece sbocciare il nostro amore. \nIl primo vero appuntamento non poté che essere una gita in montagna, dove Riccardo, con doti da scarpinatore, mise a dura prova le gambe della sua bella, che non cedette facilmente!",
    },
    {
      index: 3,
      title: "Andiamo a vivere insieme",
      date: { day_month: "GENNAIO", year: "2019" },
      text: "Forse l’esigenza pratica, forse il desiderio di crescere insieme ci condussero presto alla scelta di convivere. \nSotto lo sguardo di una Carlotta disorientata, le immense valigie di Riccardo varcarono la soglia della nostra azzurra casa torinese.",
    },
    {
      index: 4,
      title: "Proposta",
      date: { day_month: "AGOSTO", year: "2022" },
      text: "E dopo aver oltrepassato di appena qualche metro il valico dell’Età adulta, nel cuore delle Dolomiti, un giovane escursionista emozionato si inginocchiò e chiese alla sua incredula compagna di sposarla. \nCi piace pensare che le testimoni del momento, le montagne, serberanno il ricordo anche per noi.",
    },
    {
      index: 5,
      title: "Matrimonio",
      date: { day_month: "30 GIUGNO", year: "2023" },
      text: "Ecco l’attesissimo giorno cui parteciperete tutti voi, suggellando una storia che ha ancora tanti progetti e avventure da raccontare.",
    },
  ];
  return (
    <div className={styles.container}>
      {timelineElements.map((el, index) => (
        <div
          className={clsx(
            styles["timeline-block"],
            styles[`timeline-block-${index % 2 === 0 ? "right" : "left"}`]
          )}
        >
          <div className={styles.marker}></div>

          <Flex flexDirection={"column"} className={styles["timeline-content"]}>
            <h3>{el.title}</h3>
            <Image
              src={`/people/${el.index}.svg`}
              alt="Lemurs"
              className={styles.right_side}
              width={350}
              height={220}
            />
            <span style={{ marginTop: "1rem" }}>
              {el.date.day_month} {el.date.year}
            </span>
            <p style={{ textAlign: "justify" }}>{el.text}</p>
          </Flex>
        </div>
      ))}
    </div>
  );
}
