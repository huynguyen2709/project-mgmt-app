import { gql, useQuery } from '@apollo/client';

export const GET_CLIENTS = gql`
  query {
    clients {
      id
      name
      email
      phone
    }
  }
`;

export const useGetClients = () => {
  return useQuery(GET_CLIENTS);
};
