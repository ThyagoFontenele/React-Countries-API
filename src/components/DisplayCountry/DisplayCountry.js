import React from 'react';

export default function DisplayCountry({country}){
    console.log(country);
    const iso = (country.code).toLowerCase();
    const bandeira = `https://www.bandeirasnacionais.com/data/flags/h80/${iso}.webp`;
    return(
        <>
            
            <div>
                <img src={bandeira} alt="pais" />
            </div>
            
        </>
    )
}