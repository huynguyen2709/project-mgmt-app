import { gql, useQuery } from '@apollo/client';

export const GET_PROJECTS = gql`
  query {
    projects {
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

export const useGetProjects = () => {
  return useQuery(GET_PROJECTS);
};
