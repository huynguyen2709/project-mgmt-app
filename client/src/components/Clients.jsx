import React from 'react';
import ClientRow from './ClientRow';
import { useGetClients } from '../queries/useGetClients';

const Clients = () => {
  const { loading, data, error } = useGetClients();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error... {error}</div>;
  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Clients;
