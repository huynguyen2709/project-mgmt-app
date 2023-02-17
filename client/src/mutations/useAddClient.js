import { gql, useMutation } from '@apollo/client';
import { GET_CLIENTS } from '../queries/useGetClients';

const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

export const useAddClient = () => {
  return useMutation(ADD_CLIENT, {
    refetchQueries: [
      {
        query: GET_CLIENTS,
      },
    ],
  });
};
