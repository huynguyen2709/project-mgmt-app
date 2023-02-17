import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Clients from './components/Clients';
import Projects from './components/Projects';
import AddClientModal from './components/AddClientModal';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <AddClientModal />
            <Projects />
            <Clients />
          </div>
        </Router>
      </ApolloProvider>
    </React.Fragment>
  );
}

export default App;
