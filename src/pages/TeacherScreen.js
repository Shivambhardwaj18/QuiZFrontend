import { Box, Heading } from "@chakra-ui/layout";
import React from "react";

const TeacherScreen = (props) => {
  console.log(props.match.params.name);
  return (
    <>
      <Box height="65vh">
        <Heading>I'm a teacher</Heading>
      </Box>
    </>
  );
};

export default TeacherScreen;
