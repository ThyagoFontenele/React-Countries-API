import React from 'react';
import classes from "./DisplayCountry.module.css";
import { Link } from 'react-router-dom';

export default function DisplayCountry({country}){

    const iso = (country.code).toLowerCase();
    const bandeira = `https://www.bandeirasnacionais.com/data/flags/h80/${iso}.webp`;

    const styleLink = {
       textDecoration: "none"
    }

    
    return(
        <>
        
           <Link to={`countries/${country.name}`} style={styleLink} >
                
                <div className={classes.cardCountry}>
                    <h1>{country.name}</h1>
                    <img src={bandeira} alt={country.name} />
                    <h2>{country.emoji}</h2>
                </div>
            </Link>
        </>
    )
}