import { Box } from "@chakra-ui/layout";
import React from "react";

const Wrapper = ({ children, variant = "regular" }) => {
  return (
    <>
      <Box
        maxW={variant === "regular" ? "800px" : "400px"}
        w="100%"
        mt="8"
        mx="auto"
      >
        {children}
      </Box>
    </>
  );
};

export default Wrapper;
