import React, {useState, useEffect} from 'react';
import classes from "./ShowCountry.module.css";
export default function ShowCountry({country}){
    const iso = (country.code).toLowerCase();
    const bandeira = `https://www.bandeirasnacionais.com/data/flags/h80/${iso}.webp`;
    const [idiomaText, setIdiomaText ] = useState('');

    useEffect(() => {
        if(country.languages > 1){
            setIdiomaText('Idiomas');
        }else{ setIdiomaText('Idioma');}
    }, [])
    
    return(
        <>
            <div>
                <img src={bandeira} alt={`bandeira ${country.name}`}/>
                <h1>Nome: {country.name}</h1>
                <p>Capital: {country.capital}</p>
                <p>Sigla: {country.emoji}</p>
                <p>{idiomaText}: {country.languages.map(ele => ele.name+" ")}</p>
                <p>Moeda: {country.currency}</p>
                
            </div>
           
        </>
    )
}