import { useMutation, useQuery } from "@apollo/client";
import { Box, Heading } from "@chakra-ui/layout";
import Swal from "sweetalert2";
import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import gql from "graphql-tag";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@chakra-ui/button";
import { Spinner } from "@chakra-ui/spinner";

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
  let teacherName = props.match.params.name.replace("@", "");
  const { error, loading, data } = useQuery(ME_QUERY);
  const [subjects, setSubjects] = useState([]);
  const [deleteSubject, payload] = useMutation(DELETE_MUT);
  const main = useCallback(() => {
    if (!loading) {
      setSubjects(data.me.subjects);
    }
  }, [data, loading]);

  console.log(data);
  useEffect(() => {
    main();
  }, [loading, data]);

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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <>
      <Box height="65vh">
        {loading ? (
          <div className="spinner">
            <Spinner size="xl" />
          </div>
        ) : (
          <Box height="65vh" display="flex" width="100%" mt="30px" p="20px">
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
                {subjects.map((subject, i) => {
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
