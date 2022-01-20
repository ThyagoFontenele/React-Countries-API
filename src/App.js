import './App.css';
import React from 'react';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
import DisplayCountry from './components/DisplayCountry/DisplayCountry';
import Header from './components/Header/Header'
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

const LIST_COUNTRIES = gql`
  {
    countries {
      code
      name
      capital
      currency
      emoji
      languages {
        name
      }
    }
  }
`;

export default function App() {
 
  const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});
  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }
  
  
  return (
    <div className="App">
      <Header/>
      <div className="grid-display">
        {
          data.countries.map( (ele, key) => (
            <DisplayCountry country={ele} key={key}/>
          ))
        }
      </div>
      
    </div>
  );
}

