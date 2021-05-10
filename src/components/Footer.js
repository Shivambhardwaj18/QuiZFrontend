import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Copyright = (props) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} DoQuiz, Inc. All rights reserved.
  </Text>
);
const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      href="#"
      aria-label="LinkedIn"
      icon={<FaLinkedin fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="GitHub"
      icon={<FaGithub fontSize="20px" />}
    />
  </ButtonGroup>
);
const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    position="fixed"
    left="0"
    bottom="0"
    width="100%"
    height="6vh"
    py="12"
    bg="black"
    color="whiteAlpha.800"
    px={{ base: "4", md: "8" }}
  >
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Heading>DoQuiz</Heading>
        <SocialMediaLinks />
      </Stack>
      <Copyright alignSelf={{ base: "center", sm: "start" }} />
    </Stack>
  </Box>
);
export default Footer;
