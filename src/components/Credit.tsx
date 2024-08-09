import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSnapshot } from "valtio";
import { mailCreditsStore } from "../store";

const Credit: React.FC = () => {
  const { inAppCredits, user } = useSnapshot(mailCreditsStore);
  return (
    <Box w={"100%"}>
      <Flex
        bg={"#4c9063"}
        p={{ base: 6, md: "3rem" }}
        gap={5}
        flexDir={"column"}
        alignItems={"start"}
        color={"#FFF"}
        borderRadius={1}
      >
        <Text>First Name : {user.firstName}</Text>
        <Text>Last Name : {user.lastName}</Text>
        <Text>Email address : {user.email}</Text>
        <Text textAlign={"center"} fontWeight={600} fontSize={"2rem"}>
          {inAppCredits.balance.toLocaleString("en-US")}
        </Text>
        <Text textAlign={"center"} fontSize={"0.8rem"}>
          Messaging credits available
        </Text>
      </Flex>
    </Box>
  );
};

export default Credit;
