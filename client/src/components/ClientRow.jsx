import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDeleteClient } from '../mutations/useDeleteClient';

const ClientRow = ({ client }) => {
  const [deleteClient, { loading, error, data }] = useDeleteClient();

  const handleDeleteClient = async () => {
    try {
      await deleteClient({
        variables: {
          id: client.id,
        },
      });
    } catch (error) {
      console.log('Error is here:', error);
    }
  };

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={handleDeleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
