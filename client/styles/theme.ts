import {
  extendTheme
} from "@chakra-ui/react";
import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Indie Flower",
    fontSize: "30px",
    padding: "30px",
    borderRadius: "15px"
  },
}

const customTheme = extendTheme({
  fonts: {
    heading: `'Indie Flower', sans-serif`,
    body: `'Raleway', sans-serif`
  },
  colors: {
    brand: {
      yellow: "#FDEFAD",
      green: "#CCEEAB",
      pink: "#FACBC4",
      blue: "#add8e6"
    }
  },
  components: {
    Button
  }
});

export default customTheme;
