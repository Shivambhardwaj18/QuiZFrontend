import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import React from "react";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";

const StudentSignup = () => {
  return (
    <>
      <Box mt="50">
        <Wrapper variant="small">
          <Text fontSize="4xl" textAlign="center">
            Student Sign Up
          </Text>
          <Formik
            initialValues={{ code: "" }}
            onSubmit={async (values, { setErrors }) => {
              console.log(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <InputField
                  name="code"
                  placeholder="Enter joining Code"
                  label=""
                />
                <Button
                  mt={4}
                  type="submit"
                  colorScheme="orange"
                  isLoading={isSubmitting}
                >
                  Join
                </Button>
              </Form>
            )}
          </Formik>
        </Wrapper>
      </Box>
    </>
  );
};

export default StudentSignup;
