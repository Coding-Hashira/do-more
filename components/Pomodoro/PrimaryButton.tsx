import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = { clickHandler: () => void; children: ReactNode };

const PrimaryButton = ({ clickHandler, children }: Props) => {
  return (
    <Box
      bg="#AC6DDD"
      className="btn-shadow"
      display="flex"
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
