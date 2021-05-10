import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { useQuery } from "@apollo/client";
import { FcPlus } from "react-icons/fc";
import gql from "graphql-tag";
import React, { useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { authContext } from "../context/authContext";

const ME_QUERY = gql`
  query {
    me {
      id
      name
      email
    }
  }
`;

console.log(window.localStorage.getItem("qid"));

const Header = (props) => {
  const auth = useContext(authContext);
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  console.log(props);
  const { error, loading, data } = useQuery(ME_QUERY);
  let isLoggedIn = false;
  if (localStorage.getItem("qid")) {
    isLoggedIn = true;
  }
  const handleCreate = () => {};
  return (
    <Flex
      zIndex="300"
      boxShadow="md"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="blackAlpha.900"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="xl" letterSpacing={"-.1rem"}>
          <Link to="/">DoQuiz</Link>
        </Heading>
      </Flex>
      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="14px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>
      <Box
        ml="10"
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      ></Box>
      {isLoggedIn ? (
        <>
          <Box
            display={{ sm: show ? "block" : "none", md: "block" }}
            mt={{ base: 4, md: 0 }}
          >
            <Flex
              flexDirection="row"
              alignItems="center"
              justifyContent="space-around"
            >
              <Button
                variant="solid"
                colorScheme="whiteAlpha"
                mr="3"
                onClick={handleCreate}
              >
                <i class="fas fa-plus"></i> <Text ml="3">Create Subject</Text>
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  auth.logout();
                }}
              >
                Logout
              </Button>
            </Flex>
          </Box>
        </>
      ) : (
        <>
          <Box
            display={{ sm: show ? "block" : "none", md: "block" }}
            mt={{ base: 4, md: 0 }}
          >
            <Link to="/signup">
              <Button colorScheme="orange" variant="solid" ml="4">
                Sign up
              </Button>
            </Link>
            <Link to="/login">
              <Button colorScheme="twitter" variant="solid" ml="4">
                Login
              </Button>
            </Link>
          </Box>
        </>
      )}
    </Flex>
  );
};
export default Header;
