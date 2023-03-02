import styles from "./ConfirmCard.module.scss";
import {
  Flex,
  Text,
  Stack,
  Input,
  Select,
  IconButton,
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import Card from "../common/Card/Card.component";
import { MenuBottom } from "../images/leaves/MenuBottom";
import { MenuTop } from "../images/leaves/MenuTop";
import clsx from "clsx";

export default function GuestForm({ guest, setGuests, setIsValid, index }) {
  const updateGuest = (value, field) => {
    setGuests((prev) => [
      ...prev.map((g) => {
        if (g.index === guest.index) g[field] = value;
        return g;
      }),
    ]);
    setIsValid((prev) => [
      ...prev.map((el, i) => {
        if (i === index)
          return (
            guest.name !== "" &&
            guest.surname !== "" &&
            guest.name !== undefined &&
            guest.surname !== undefined
          );
        else return el;
      }),
    ]);
  };

  return (
    <Flex gap={3} direction={{ base: "column", lg: "row" }}>
      <Flex
        gap={3}
        direction={{ base: "column", md: "row" }}
        width={{ lg: "100%" }}
      >
        <FormControl isInvalid={guest.name === ""}>
          <FormLabel className={styles.label}>Nome</FormLabel>
          <Input
            placeholder="Il tuo nome"
            value={guest.name}
            onChange={(event) => updateGuest(event.target.value, "name")}
            className={styles.input}
          />
          {!guest.name === "" ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormErrorMessage>Il nome è necessario</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={guest.surname === ""}>
          <FormLabel className={styles.label}>Cognome</FormLabel>
          <Input
            placeholder="Il tuo cognome"
            value={guest.surname}
            onChange={(event) => updateGuest(event.target.value, "surname")}
            className={styles.input}
          />
          {!guest.surname === "" ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormErrorMessage>Il cognome è necessario</FormErrorMessage>
          )}
        </FormControl>
      </Flex>
      <Box w={{ base: "100%", lg: "70%" }}>
        <FormControl>
          <FormLabel className={styles.label}>Preferenze alimentari</FormLabel>
          <Select
            defaultValue={"none"}
            value={guest.preferences}
            onChange={(event) => updateGuest(event.target.value, "preferences")}
            className={styles.input}
          >
            <option value="none">Nessuna</option>
            <option value="celiaco">Celiaco</option>
            <option value="intollerante_al_lattosio">
              Intollerante al lattosio
            </option>
            <option value="vegetariano">Vegetariano</option>
            <option value="vegano">Vegano</option>
          </Select>
        </FormControl>
      </Box>
    </Flex>
  );
}
