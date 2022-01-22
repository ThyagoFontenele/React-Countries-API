import React, {useState, useEffect} from 'react';
import classes from "./ShowCountry.module.css";
import PngBack from '../../assets/pngwing.com.png';
import { Link } from 'react-router-dom';
export default function ShowCountry({country}){
    const iso = (country.code).toLowerCase();
    const bandeira = `https://www.bandeirasnacionais.com/data/flags/h80/${iso}.webp`;
    const [idiomaText, setIdiomaText ] = useState('');
    useEffect(() => {
        if(country.languages.length > 1){
            setIdiomaText('Idiomas');
        }else{ 
            setIdiomaText('Idioma');
        }
        
    }, [])

    return(
        <>
            <Link to="/" ><img src={PngBack} alt="voltar" className={classes.back}/></Link> 
            <div className={classes.body}>
                <div className={classes.container}>
                    <h1>{country.name}</h1>
                    <img src={bandeira} alt={`bandeira ${country.name}`}/>
                    <p><span>Capital:</span> {country.capital}</p>
                    <p><span>Continente:</span> {country.continent.name}</p>
                    <p><span>Emoji:</span> {country.emoji}</p>
                    <p><span>{idiomaText}:</span> {country.languages.map(ele => ele.name+" | ")}</p>
                    <p><span>Moeda:</span> {country.currency}</p>
                </div>
            </div>
        </>
    )
}