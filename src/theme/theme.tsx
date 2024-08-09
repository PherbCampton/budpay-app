import {
  createMultiStyleConfigHelpers,
  defineStyle,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";
import { checkboxAnatomy } from "@chakra-ui/anatomy";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const circular = definePartsStyle({
  control: defineStyle({
    rounded: "full",
  }),
});

const checkboxTheme = defineMultiStyleConfig({
  variants: { circular },
});

const theme = extendTheme({
  config,
  fonts: {
    font1: "New Spirit",
    font2: `'Plus Jakarta Sans', sans-serif`,
    font3: "Inter",
    font4: "Gopher",
    font5: "Gilda",
  },
  breakpoints: {
    sm: "330px",
  },
  components: { Checkbox: checkboxTheme },
});

export default theme;
