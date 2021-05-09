import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import gql from "graphql-tag";
import React from "react";
import { Link } from "react-router-dom";

const ME_QUERY = gql`
  query me {
    user {
      id
      name
      email
    }
  }
`;
const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);
const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="aliceblue"
      color="black"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="xl" letterSpacing={"-.1rem"}>
          DoQuiz
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="black"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>Docs</MenuItems>
        <MenuItems>Examples</MenuItems>
        <MenuItems>Blog</MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Link to="/signup/teacher">
          <Button colorScheme="linkedin" border="1px" ml="4">
            Sign up
          </Button>
        </Link>

        <Button colorScheme="facebook" border="1px" ml="4">
          Login
        </Button>
      </Box>
    </Flex>
  );
};
export default Header;
