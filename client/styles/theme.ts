import {
  extendTheme
} from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    heading: `'Indie Flower', sans-serif`,
    body: `'Raleway', sans-serif`
  },
  colors: {
    brand: {
      yellow: "#FDEFAD",
      green: "#CCEEAB",
      pink: "#FACBC4"
    }
  }
});

export default customTheme;
