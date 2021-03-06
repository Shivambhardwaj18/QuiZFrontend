import { useMutation, useQuery } from "@apollo/client";
import { Box } from "@chakra-ui/layout";
import Swal from "sweetalert2";
import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import gql from "graphql-tag";
import React, { useContext } from "react";
import { Button } from "@chakra-ui/button";
import { Spinner } from "@chakra-ui/spinner";
import { authContext } from "../context/authContext";

const ME_QUERY = gql`
  query {
    me {
      id
      name
      email
      subjects {
        name
      }
    }
  }
`;

const DELETE_MUT = gql`
  mutation deleteSubject($name: String!) {
    deleteSubject(name: $name)
  }
`;

const TeacherScreen = (props) => {
  const { loading, data } = useQuery(ME_QUERY);
  const [deleteSubject] = useMutation(DELETE_MUT);
  const auth = useContext(authContext);
  const popSubject = (n) => {
    let poped = auth.subjects.filter((x) => x.name !== n);
    auth.setSubjectsAll(poped);
  };
  console.log(data);

  if (!loading) {
    auth.setSubjectsAll(data.me.subjects);
  }

  const handleDeleteSubject = (name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // do deletion here
        deleteSubject({ variables: { name } });
        popSubject(name);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <>
      <Box>
        {loading ? (
          <div className="spinner">
            <Spinner size="xl" />
          </div>
        ) : (
          <Box display="flex" width="100%" mt="30px" p="20px" mb="40px">
            <Table variant="striped" ml="40px" mr="40px">
              <TableCaption>Subjects Created by You</TableCaption>
              <Thead>
                <Tr>
                  <Th>Sr no.</Th>
                  <Th>Course Code</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {auth.subjects.map((subject, i) => {
                  return (
                    <>
                      <Tr key={i}>
                        <Td>{i + 1}</Td>
                        <Td>{subject.name}</Td>
                        <Td>
                          <Button
                            colorScheme="red"
                            onClick={() => handleDeleteSubject(subject.name)}
                          >
                            <i class="fas fa-trash-alt"></i>
                          </Button>
                        </Td>
                      </Tr>
                    </>
                  );
                })}
              </Tbody>
            </Table>
          </Box>
        )}
      </Box>
    </>
  );
};

export default TeacherScreen;
