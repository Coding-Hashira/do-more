"use client";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { MdDashboard, MdTimer } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  return (
    <Flex
      px="2.5rem"
      alignItems="center"
      background="secondaryDarkBg"
      shadow="nav"
      py="0.75rem"
    >
      <Box flexGrow="1" gap="1.5rem" display="flex" alignItems="center">
        <NavItem icon={<MdDashboard />} path="Dashboard" url="/" />
        <NavItem icon={<MdTimer />} path="Focus Timer" url="/pomodoro" />
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

const NavItem = ({
  path,
  url,
  icon,
}: {
  path: string;
  url: string;
  icon: React.ReactNode;
}) => {
  const router = useRouter();

  const pathname = usePathname();
  return (
    <Flex
      gap="0.5rem"
      padding="0.5rem"
      rounded="4px"
      _hover={{ color: "white", background: "rgba(0,0,0,0.3)" }}
      transition="all 200ms ease"
      cursor="pointer"
      onClick={() => router.push(url)}
      textColor={pathname === url ? "white" : "#A7A7A7"}
      alignItems="center"
    >
      {icon}
      <Text fontWeight="600" fontSize="sm" textAlign="center">
        {path}
      </Text>
    </Flex>
  );
};

export default Navbar;
