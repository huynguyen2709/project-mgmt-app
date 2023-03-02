import { gql, useMutation } from '@apollo/client';
import { GET_PROJECT } from '../queries/useGetProject';

const UPDATE_PROJECT = gql`
  mutation updateProject(
    $id: ID!
    $name: String!
    $description: String
    $status: ProjectStatusUpdate
  ) {
    updateProject(
      id: $id
      name: $name
      description: $description
      status: $status
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export const useUpdateProject = (id) => {
  return useMutation(UPDATE_PROJECT, {
    refetchQueries: [
      {
        query: GET_PROJECT,
        variables: { id },
      },
    ],
  });
};
