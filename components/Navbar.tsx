import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Flex px="2.5rem" background="secondaryDarkBg" shadow="nav" py="0.75rem">
      <Box flexGrow="1">{/* Nav Buttons */}</Box>

      <Box>
        <Image
          src="/PFP.png"
          alt="PFP"
          rounded="full"
          width="2.5rem"
          height="2.5rem"
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
