import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import React, { useContext } from "react";
import { gql, useMutation } from "@apollo/client";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";
import { authContext } from "../context/authContext";

const LOGIN_TEACHER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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
  const [login, payload] = useMutation(LOGIN_TEACHER);
  if (payload.error) {
    console.log(payload.error);
    return (
      <>
        <Text>Error</Text>
      </>
    );
  }
  return (
    <Wrapper variant="small">
      <Text mb="5" align="center" isTruncated fontSize="3xl">
        Teacher Login
      </Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({
            variables: {
              email: values.email,
              password: values.password,
            },
          });
          if (!response.errors) {
            window.localStorage.setItem("qid", response.data.login.token);
            auth.login(response.data.login.user.id);
            history.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
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
              colorScheme="orange"
              isLoading={isSubmitting}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default RegisterPage;
