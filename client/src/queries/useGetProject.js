import { gql, useQuery } from '@apollo/client';

export const GET_PROJECT = gql`
  query getProject($id: ID) {
    project(id: $id) {
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

export const useGetProject = (id) => {
  return useQuery(GET_PROJECT, {
    variables: {
      id,
    },
  });
};
