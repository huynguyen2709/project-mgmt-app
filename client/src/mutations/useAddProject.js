import { gql, useMutation } from '@apollo/client';
import { GET_PROJECTS } from '../queries/useGetProjects';

const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $status: ProjectStatus
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
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

export const useAddProject = () => {
  return useMutation(ADD_PROJECT, {
    refetchQueries: [
      {
        query: GET_PROJECTS,
      },
    ],
  });
};
