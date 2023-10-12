import { Center, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa";
import NewTaskModal from "./NewTaskModal";

type Props = {};

const AddTaskBtn = ({}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Center
      borderRadius="xl"
      bg="linear-gradient(39deg,#C546D2,#F99380) !important"
      _hover={{
        cursor: "pointer",
        filter: "brightness(1.05)",
      }}
      _active={{ filter: "brightness(1.15)" }}
      transition="all 350ms ease"
      onClick={onOpen}
    >
      <FaPlus className="h-3.5 w-3.5 p-2.5 box-content text-white" />
      <NewTaskModal isOpen={isOpen} onClose={onClose} />
    </Center>
  );
};

export default AddTaskBtn;
