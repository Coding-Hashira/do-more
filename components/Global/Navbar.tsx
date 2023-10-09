"use client";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { MdDashboard, MdTimer } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const isLoginPage = pathname === "/signin";

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
        {status === "loading" ? (
          <Text fontSize={"sm"} color="white">
            Loading...
          </Text>
        ) : (
          <Image
            src={session?.user?.image || "/PFP.png"}
            alt="PFP"
            rounded="full"
            width="2.5rem"
            height="2.5rem"
            cursor={status === "authenticated" ? "pointer" : "default"}
            onClick={status === "authenticated" ? () => signOut() : undefined}
          />
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
