import { gql, useMutation } from '@apollo/client';
import { GET_CLIENTS } from '../queries/useGetClients';

const DELETE_CLIENT = gql`
  mutation deleteClient($id: String!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

export const useDeleteClient = () => {
  return useMutation(DELETE_CLIENT, {
    refetchQueries: [
      {
        query: GET_CLIENTS,
      },
    ],
  });
};
