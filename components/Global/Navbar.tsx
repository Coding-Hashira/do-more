"use client";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { MdDashboard, MdTimer } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Flex
      px="2.5rem"
      alignItems="center"
      background="secondaryDarkBg"
      shadow="nav"
      py="0.75rem"
    >
      <Box flexGrow="1" gap="1.5rem" display="flex" alignItems="center">
        <Flex
          gap="0.5rem"
          cursor="pointer"
          onClick={() => router.push("/")}
          textColor={pathname === "/" ? "white" : "#A7A7A7"}
          alignItems="center"
        >
          <MdDashboard className="text-lg" />{" "}
          <Text fontWeight="600" fontSize="sm" textAlign="center">
            Dashboard
          </Text>
        </Flex>
        <Flex
          textColor={pathname === "/pomodoro" ? "white" : "#A7A7A7"}
          gap="0.5rem"
          cursor="pointer"
          onClick={() => router.push("/pomodoro")}
          alignItems="center"
        >
          <MdTimer className="text-lg" />{" "}
          <Text fontWeight="600" fontSize="sm" textAlign="center">
            Focus Timer
          </Text>
        </Flex>
      </Box>

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