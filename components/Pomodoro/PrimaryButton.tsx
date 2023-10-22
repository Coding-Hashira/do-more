import usePomodoroStore, { PomodoroState } from "@/utils/pomodoroStore";
import { Box } from "@chakra-ui/react";
import React, { ReactNode, useState, useEffect } from "react";

type Props = { clickHandler: () => void; children: ReactNode };

const PrimaryButton = ({ clickHandler, children }: Props) => {
  const state = usePomodoroStore((state: PomodoroState) => state);
  const [themeColor, setThemeColor] = useState("");

  useEffect(() => {
    setThemeColor(state?.themeColor);
  }, [state]);

  return (
    <Box
      bg={themeColor === "#fff" ? "#AC6DDD" : themeColor}
      display="flex"
      filter={`drop-shadow(0px 0px 13.708800315856934px ${
        themeColor === "#fff" ? "#AC6DDD" : themeColor
      }) drop-shadow(0px 0px 2.990400314331055px ${
        themeColor === "#fff" ? "#AC6DDD" : themeColor
      })`}
      alignItems="center"
      justifyContent="center"
      rounded="full"
      _hover={{ cursor: "pointer" }}
      onClick={clickHandler}
    >
      {children}
    </Box>
  );
};

export default PrimaryButton;
