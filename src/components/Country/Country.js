import React from 'react';
import { useParams } from 'react-router-dom';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
import ShowCountry from '../ShowCountry/ShowCountry'

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
      }
    }
  `;


export default function Country(){
    const { name } = useParams();

    const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});
     if (loading || error) {
        return <p className="Loading">{error ? error.message : 'Loading...'}</p>;
    }
    return(
        <>
            {data.countries.filter((ele) => {
                if(ele.name === name){
                    return ele
                } 
            }).map( (ele) => (     
                <ShowCountry country={ele} key={ele.name} />
              ))
            }
            
        </>
    )
}
            
     