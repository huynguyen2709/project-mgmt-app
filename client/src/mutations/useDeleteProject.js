import { gql, useMutation } from '@apollo/client';
import { GET_PROJECTS } from '../queries/useGetProjects';

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
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

export const useDeleteClient = () => {
  return useMutation(DELETE_PROJECT, {
    refetchQueries: [
      {
        query: GET_PROJECTS,
      },
    ],
  });
};
