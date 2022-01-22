import './App.css';
import React, { useState } from 'react';
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
      continent{
        name
      }
      languages {
        name
      }
    },
    continents{
      name
    }
  }
`;

export default function App() {
  const [nameCountry, setNameCountry] = useState('');
  const [continentCountry, setContinentCountry] = useState('');
  function FindByName(name, continent) {
    setNameCountry(name);
    setContinentCountry(continent);
  }

  const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});
  if (loading || error) {
    return <p className="Loading">{error ? error.message : 'Loading...'}</p>;
  }
  
 
  return (
    <>
      <div className="App">
        <Header continents={data.continents} FindByName={FindByName}/>
        
        <div className="div-grid">
            <ul className="grid-display">
            
              {data.countries.filter((ele) => {
                if(continentCountry !==''){
                  if(ele.continent.name === continentCountry){
                    if(nameCountry === ''){
                      return ele;
                    }else if(ele.name.toLowerCase().includes(nameCountry.toLowerCase())){
                      return ele;
                    }
                  }
                }else{
                  
                    if(nameCountry === ''){
                      return ele;
                    }else if(ele.name.toLowerCase().includes(nameCountry.toLowerCase())){
                      return ele;
                    }
                  
                }
                
              }).map( (ele) => (
                
                <li key={ele.name}>
                  <DisplayCountry country={ele} />
                </li>
              ))
            }
            </ul>
         
        </div>
        
      </div>
    </>
   
  );
}

