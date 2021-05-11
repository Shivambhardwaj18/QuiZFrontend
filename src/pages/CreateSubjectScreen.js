import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import React from "react";
import { gql, useMutation } from "@apollo/client";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";

const CREATE_MUT = gql`
  mutation addSubject($name: String!) {
    addSubject(name: $name) {
      name
      teacher {
        name
      }
    }
  }
`;
const CreateSubjectScreen = ({ history }) => {
  // const auth = useContext(authContext);
  const [addSubject, payload] = useMutation(CREATE_MUT);
  if (payload.error) {
    return (
      <>
        <Text>Error</Text>
      </>
    );
  }
  return (
    <>
      <Box>
        <Wrapper variant="small">
          <Text mb="5" align="center" isTruncated fontSize="3xl">
            Create New Subject
          </Text>
          <Formik
            initialValues={{ name: "" }}
            onSubmit={async (values, { setErrors }) => {
              const response = await addSubject({
                variables: {
                  name: values.name,
                },
              });
              if (!response.errors) {
                history.push(`/me`);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <InputField name="name" placeholder="Name" label="Name" />

                <Button
                  mt={4}
                  type="submit"
                  colorScheme="telegram"
                  isLoading={isSubmitting}
                >
                  <Text mr="4">Create</Text> <i class="far fa-plus-square"></i>
                </Button>
              </Form>
            )}
          </Formik>
        </Wrapper>
      </Box>
    </>
  );
};

export default CreateSubjectScreen;
