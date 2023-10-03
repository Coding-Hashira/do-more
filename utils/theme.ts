import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    darkBg: "#181820",
    secondaryDarkBg: "#21212B",
  },
  shadows: {
    nav: "0px 2px 12px 0px rgba(0, 0, 0, 0.25);",
  },
});

export default theme;
