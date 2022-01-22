import React from 'react';

export default function ShowCountry({country}){


    console.log(country)
    return(
        <>
           <h1> {country.name}</h1>
        </>
    )
}