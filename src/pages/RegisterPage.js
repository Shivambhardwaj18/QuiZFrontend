import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import React, { useContext } from "react";
import { gql, useMutation } from "@apollo/client";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";
import { authContext } from "../context/authContext";

const SIGNUP_TEACHER = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      user {
        id
        name
        email
      }
      token
    }
  }
`;
const RegisterPage = ({ history }) => {
  const auth = useContext(authContext);
  const [signup, payload] = useMutation(SIGNUP_TEACHER);
  if (payload.error) {
    return (
      <>
        <Text>Error</Text>
      </>
    );
  }
  return (
    <Wrapper variant="small">
      <Text mb="5" align="center" isTruncated fontSize="3xl">
        Teacher Sign Up
      </Text>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await signup({
            variables: {
              name: values.name,
              email: values.email,
              password: values.password,
            },
          });
          if (!response.errors) {
            window.localStorage.setItem("qid", response.data.signup.token);
            auth.login(response.data.signup.user.id);
            console.log(response.data.signup.user.id);
            history.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="name" placeholder="Name" label="Name" />
            <InputField name="email" placeholder="Email" label="Email" />
            <Box mt="4">
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Button
              mt={4}
              type="submit"
              colorScheme="telegram"
              isLoading={isSubmitting}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default RegisterPage;
