import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import FeatureWrapper from "../components/FeatureWrapper";

const HomePage = ({ history }) => {
  let isLoggedIn = false;
  if (localStorage.getItem("qid")) {
    isLoggedIn = true;
  }

  const [isLessThan1000] = useMediaQuery("(max-width: 1000px)");
  return (
    <>
      <Box
        display="flex"
        flexDirection={isLessThan1000 ? "column" : "row"}
        justifyContent="space-around"
        bg="gray.100"
      >
        <Flex
          maxW="2xl"
          textAlign="center"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt={isLessThan1000 ? "50" : "0"}
        >
          <Text fontSize={isLessThan1000 ? "4xl" : "5xl"} isTruncated>
            Real-time responses.
          </Text>
          <Text fontSize={isLessThan1000 ? "4xl" : "5xl"} isTruncated>
            Long-term growth.
          </Text>
          <Box alignSelf="flex-start" mt="8">
            {!isLoggedIn && (
              <Button
                ml={isLessThan1000 ? "10" : "0"}
                size="lg"
                colorScheme="twitter"
                onClick={() => history.push("/signup/teacher")}
              >
                Teachers,Sign Up for FREE
              </Button>
            )}
          </Box>
        </Flex>
        <Flex>
          <Image
            src="/icons/pic3.jpg"
            objectFit="contain"
            boxSize="600px"
            mt={isLessThan1000 ? "-20" : "0"}
          />
        </Flex>
      </Box>
      <FeatureWrapper />
    </>
  );
};

export default HomePage;
