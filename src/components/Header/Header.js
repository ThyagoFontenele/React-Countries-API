import React, { useState, useEffect } from 'react';
import "./Header.css";


export default function Header({continents, FindByName}){
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState('');
    const [name, setName] = useState('');
    const [savedContinent, setSavedContinent ] = useState('');
    const [continent, setContinent] = useState('');

    const apllyContinent = () =>{
        setContinent(savedContinent);
    }

    const toggleMenu = () => {
        if(toggle === false){
            setToggle(true);
            setActive('active');
        }
        else{
            setToggle(false);
            setActive('');
        }
    }
    useEffect(() => {
        FindByName(name, continent);
    })
    return(
        <>
            <header className="headerBody">
                <div className="header">
                    <div>
                        <label className="labels" for="">Nome:</label>
                        <input type="text" value={name} onChange={ e => setName(e.target.value)  } placeholder="Digite aqui o nome do país." className="input"/>
                    </div> 

                    <nav id="nav" className={active}>
                        <button className="btn_menu" onClick={() => toggleMenu()} ><span className="hamburger"></span></button>
                        <div className="menu">
                            <div className="options">
                                <label className="labels" for="continente">Continente:</label>
                                <select id="continente"  className="selects" onChange={e => setSavedContinent(e.target.value)} >
                                    <option value="">Todos</option>
                                    {continents.map((continent, key) => (
                                        <option key={key} value={continent.name}>
                                            {continent.name}
                                        </option>
                                    ))}
                                </select>
                            </div>   
                            <button className="btn_apply" onClick={() => apllyContinent()} >Aplicar</button>
                        </div>
                    </nav>
                </div>
            </header>
            
        </>
    )
}