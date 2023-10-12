"use client";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { MdDashboard, MdFolder, MdTimer } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import AddTaskBtn from "./AddTaskBtn";

type Props = {};

const Navbar = ({}: Props) => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/signin";
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <Flex
      px="2.5rem"
      alignItems="center"
      background="secondaryDarkBg"
      shadow="nav"
      py="0.75rem"
      position={"absolute"}
      display={isLoginPage ? "none" : "flex"}
      width={"100%"}
    >
      <Box flexGrow="1" gap="1.5rem" display="flex" alignItems="center">
        <NavItem path="Dashboard" url="/" icon={<MdDashboard />} />
        <NavItem path="Collections" url="/collections" icon={<MdFolder />} />
        <NavItem path="Focus Timer" url="/pomodoro" icon={<MdTimer />} />
      </Box>

      {/* {status === "loading" ? (
        <Text fontSize={"sm"} color="white">
          Loading...
        </Text>
      ) : ( */}
      <HStack gap="1.5rem">
        <AddTaskBtn />
        <Image
          src={session?.user?.image || "/PFP.png"}
          alt="PFP"
          rounded="full"
          width="2.5rem"
          height="2.5rem"
          cursor={status === "authenticated" ? "pointer" : "default"}
          onClick={status === "authenticated" ? () => signOut() : undefined}
        />
      </HStack>
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
