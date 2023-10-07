import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    darkBg: "#1b1f40",
    secondaryDarkBg: "#24284f",
  },
  shadows: {
    nav: "0px 2px 12px 0px rgba(0, 0, 0, 0.25);",
  },
});

export default theme;
