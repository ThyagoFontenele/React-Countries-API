import React from 'react';
import classes from "./DisplayCountry.module.css";
export default function DisplayCountry({country}){
    console.log(country);
    const iso = (country.code).toLowerCase();
    const bandeira = `https://www.bandeirasnacionais.com/data/flags/h80/${iso}.webp`;
    return(
        <>
            
            <div className={classes.cardCountry}>
                <h1>{country.name}</h1>
                <img src={bandeira} alt={country.name} />
                <h2>{country.emoji}</h2>
            </div>
            
        </>
    )
}