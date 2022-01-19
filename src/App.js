import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

function App() {
  const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});
  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }
  console.log(data);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
