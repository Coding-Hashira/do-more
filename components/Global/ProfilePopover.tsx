import { ReactNode } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  DarkMode,
  Divider,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import { BsBarChartFill } from "react-icons/bs";
import { signOut } from "next-auth/react";
import { HiLogout } from "react-icons/hi";

type Props = { children: ReactNode };

const ProfilePopover = ({ children }: Props) => {
  return (
    <DarkMode>
      <Popover placement="bottom-start">
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent
          bg="#282d56"
          shadow="lg"
          outline="none"
          border="none"
          w="12rem"
          _focusVisible={{ outline: "none", boxShadow: "none" }}
        >
          <PopoverBody p="0" rounded="lg">
            <Button
              justifyContent="flex-start"
              my="0.5rem"
              rounded="none"
              leftIcon={<BsBarChartFill />}
              isDisabled
              width="100%"
              colorScheme="gray"
              variant="ghost"
              paddingInline="3"
            >
              <HStack justifyContent="space-between" w="100%">
                <Text>Stats</Text>
                <Text fontSize="xs" fontStyle="italic">
                  Coming Soon
                </Text>
              </HStack>
            </Button>
            <Divider borderColor="whiteAlpha.600" />
            <Button
              justifyContent="flex-start"
              my="0.5rem"
              rounded="none"
              leftIcon={<HiLogout className="font-bold" />}
              width="100%"
              colorScheme="gray"
              variant="ghost"
              color="red.600"
              onClick={() => signOut()}
            >
              Log Out
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </DarkMode>
  );
};

export default ProfilePopover;
