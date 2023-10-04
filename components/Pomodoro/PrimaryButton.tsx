import usePomodoroStore, { PomodoroState } from "@/utils/pomodoroStore";
import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = { clickHandler: () => void; children: ReactNode };

const PrimaryButton = ({ clickHandler, children }: Props) => {
  const themeColor = usePomodoroStore(
    (state: PomodoroState) => state.themeColor
  );

  return (
    <Box
      bg={themeColor}
      display="flex"
      filter={`drop-shadow(0px 0px 13.708800315856934px ${themeColor}) drop-shadow(0px 0px 2.990400314331055px ${themeColor})`}
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
