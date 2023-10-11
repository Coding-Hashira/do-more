"use client";

import CollectionCard from "@/components/Collections/CollectionCard";
import { Box, Center, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { FaBookOpen, FaPaintBrush, FaPlus, FaUser } from "react-icons/fa";

type Props = {};

const Collections = (props: Props) => {
  const createCollection = () => {
    console.log("create collection");
  };

  const fetchCollections = () => {
    console.log("fetch collections");
  };

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      bg="darkBg"
      minH="100vh"
      py="6rem"
      w="100vw"
    >
      <Box>
        <Heading mb="4rem" size="lg">
          Collections
        </Heading>
        <Grid templateColumns="repeat(3, auto)" gap="1rem">
          <CollectionCard
            collectionName="School"
            color="#fc76a1"
            urlSlug="jail"
            totalTasks={8}
            tasksCompleted={4}
            icon={
              <FaBookOpen
                className={`text-xl p-2 bg-[#fc76a1] box-content group-hover:scale-[1.15] transition-all duration-[350ms] rounded-xl`}
              />
            }
          />
          <CollectionCard
            collectionName="Personal"
            color="#72c4bf"
            urlSlug="personal"
            totalTasks={5}
            tasksCompleted={3}
            icon={
              <FaUser
                className={`text-xl p-2 bg-[#72c4bf] box-content group-hover:scale-[1.15] transition-all duration-[350ms] rounded-xl`}
              />
            }
          />
          <CollectionCard
            collectionName="Design"
            color="#ac6dde"
            urlSlug="design"
            totalTasks={15}
            tasksCompleted={15}
            icon={
              <FaPaintBrush
                className={`text-xl p-2 bg-[#ac6dde] box-content group-hover:scale-[1.15] transition-all duration-[350ms] rounded-xl`}
              />
            }
          />
          <Box
            bg="transparent"
            borderWidth="2px"
            w="10rem"
            h="5rem"
            onClick={createCollection}
            rounded="1.5rem"
            borderColor="gray.600"
            display="flex"
            justifyContent="center"
            alignItems="center"
            _hover={{ cursor: "pointer", borderColor: "white" }}
            className="group"
            transition="all ease 0.35s"
          >
            <FaPlus className="group-hover:scale-[1.5] group-hover:text-white text-slate-400 transition-all duration-[350ms]" />
          </Box>
        </Grid>
      </Box>
    </Flex>
  );
};

export default Collections;
