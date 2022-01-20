import './App.css';
import React, {useState} from 'react';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';


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
  const iso = (data.countries[0].code).toLowerCase();
  const bandeira = `https://www.bandeirasnacionais.com/data/flags/h80/${iso}.webp`;
  console.log(data.countries[2].name);
  return (
    <div className="App">

      
      <img src={bandeira} alt="pais"/>
    </div>
  );
}

