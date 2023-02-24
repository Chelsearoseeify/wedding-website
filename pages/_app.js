import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Matrimonio di Carlotta e Riccardo</title>
        <meta name="description" content="30 Giugno 2023" />
        <meta
          property="og:image"
          content="https://www.giardinaggio.org/giardino/alberi-latifolie/la-quercia-albero_NG1.jpg"
        />
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
