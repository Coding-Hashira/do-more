import { Box, CircularProgress, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { BsCheckLg } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";

type Props = {
  color: string;
  totalTasks: number;
  tasksCompleted: number;
  collectionName: string;
  icon: ReactNode;
  urlSlug: string;
};

const CollectionCard = ({
  color,
  tasksCompleted,
  totalTasks,
  collectionName,
  icon,
  urlSlug,
}: Props) => {
  const percentCompleted = (tasksCompleted / totalTasks) * 100;
  return (
    <Link href={`/collections/${urlSlug}`}>
      <Box
        bg="secondaryDarkBg"
        transition="all 0.35s ease-in-out"
        className="group"
        _hover={{ background: "#1d203f", transform: "scale(1.05)" }}
        w="10rem"
        h="10rem"
        rounded="1.5rem"
        padding="1.25rem"
        display="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        {icon}
        <Flex direction="column" gap="0.5rem">
          <Heading size="md">{collectionName}</Heading>
          <Flex justifyContent="space-between" alignItems="center">
            {percentCompleted < 100 ? (
              <Text textColor="#85858a" fontSize="sm" fontWeight="medium">
                {tasksCompleted}/{totalTasks} done
              </Text>
            ) : (
              <Text textColor="#85858a" fontSize="sm" fontWeight="medium">
                All {totalTasks} done!
              </Text>
            )}
            {percentCompleted < 100 ? (
              <CircularProgress
                trackColor="#0000004a"
                className="rotate-90"
                value={percentCompleted}
                color={color}
                thickness="15px"
                size="1.5rem"
              />
            ) : (
              <Flex
                padding="2px"
                bg={color}
                justifyContent="center"
                alignItems="center"
                boxSizing="border-box"
                rounded="full"
              >
                <BsCheckLg />
              </Flex>
            )}
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};

export default CollectionCard;
