import "@fontsource/indie-flower";
import "@fontsource/raleway/400.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../styles/theme";
import { ConnectionContextProvider } from "../contexts/WalletConnection";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConnectionContextProvider>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ConnectionContextProvider>
  );
}

export default MyApp;
