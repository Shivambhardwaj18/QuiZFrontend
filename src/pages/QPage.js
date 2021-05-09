import { Button } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import Wrapper from "../components/Wrapper";

const QPage = ({ history }) => {
  return (
    <>
      <Wrapper variant="small">
        <Text textAlign="center" fontSize="4xl" mb="9">
          Create a FREE Account
        </Text>
        <Box maxW="2xl" height="90vh">
          <Flex flexDirection="column" justifyContent="center">
            <Button
              mb="3"
              colorScheme="telegram"
              onClick={() => history.push("/signup/teacher")}
            >
              <Text fontSize="xl">I'm a Teacher</Text>
            </Button>
            <Button
              colorScheme="telegram"
              variant="outline"
              onClick={() => history.push("/signup/student")}
            >
              <Text fontSize="xl">I'm a Student</Text>
            </Button>
          </Flex>
        </Box>
      </Wrapper>
    </>
  );
};

export default QPage;
