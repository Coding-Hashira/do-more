import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  DarkMode,
  Text,
  Input,
  useNumberInput,
  Flex,
} from "@chakra-ui/react";
import ThemeSelect from "./ThemeSelect";

type Props = { isOpen: boolean; onClose: () => void };

const colors = ["#AC6DDD", "#2abfb3"];

const SettingsModal = ({ isOpen, onClose }: Props) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 25,
      min: 10,
      max: 120,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <DarkMode>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent background="darkBg">
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            gap="2rem"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Flex flexDir="column" w="80%" gap="1rem">
              <Text
                fontSize="sm"
                textAlign="center"
                fontWeight="medium"
                color="whiteAlpha.700"
              >
                Durations
              </Text>

              <Flex justifyContent="space-between">
                {/* WORK TIME */}
                <Flex bg="secondaryDarkBg" rounded="md" w="min-content">
                  <Button {...inc}>+</Button>
                  <Input
                    outline="none"
                    border="none"
                    width="2rem"
                    padding="0"
                    _focusVisible={{
                      boxShadow: "none",
                      border: "0px",
                      outline: "none",
                    }}
                    {...input}
                  />
                  <Button {...dec}>-</Button>
                </Flex>
                {/* BREAK TIME */}
                <Flex bg="secondaryDarkBg" rounded="md" w="min-content">
                  <Button {...inc}>+</Button>
                  <Input
                    outline="none"
                    border="none"
                    width="2rem"
                    padding="0"
                    _focusVisible={{
                      boxShadow: "none",
                      border: "0px",
                      outline: "none",
                    }}
                    {...input}
                  />
                  <Button {...dec}>-</Button>
                </Flex>
              </Flex>
            </Flex>

            {/* COLOR SCHEME */}
            <Flex flexDir="column" gap="1rem">
              <Text
                fontSize="sm"
                textAlign="center"
                fontWeight="medium"
                color="whiteAlpha.700"
              >
                Theme Color
              </Text>
              <ThemeSelect colors={colors} defaultValue="#AC6DDD" />
            </Flex>
            {/* CLOCK STYLE */}
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost">Cancel</Button>
            <Button
              colorScheme="purple"
              mr={3}
              textColor="white"
              onClick={onClose}
            >
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </DarkMode>
  );
};

export default SettingsModal;
