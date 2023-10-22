import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Select,
  Button,
  DarkMode,
  Input,
  HStack,
} from "@chakra-ui/react";
import { ModalProps } from "../Pomodoro/SettingsModal";

const NewTaskModal = ({ isOpen, onClose }: ModalProps) => {
  const createTask = () => {
    console.log("first");
  };

  return (
    <DarkMode>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody display="flex" gap="1rem" flexDirection="column" mt="1rem">
            <Input
              _focusVisible={{
                outline: "none",
                borderColor: "#ac6ddd",
                boxShadow: "0 0 0 1px #ac6ddd",
              }}
              rounded="xl"
              placeholder="New Task"
              borderColor="whiteAlpha.400"
            />
            <HStack>
              {/* Selects and Date Picker for adding Due Date, Project, and Priority */}
            </HStack>
          </ModalBody>

          <ModalFooter justifyContent="flex-start">
            <Button
              bg="linear-gradient(39deg,#C546D2,#F99380) !important"
              _hover={{
                cursor: "pointer",
                filter: "brightness(1.05)",
              }}
              _active={{ filter: "brightness(1.15)" }}
              transition="all 350ms ease"
              onClick={() => {
                createTask();
              }}
            >
              Add Task
            </Button>
            <Button colorScheme="gray" variant="solid" ml={3} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </DarkMode>
  );
};

export default NewTaskModal;
