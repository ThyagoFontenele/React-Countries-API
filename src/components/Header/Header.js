import React, {useState} from 'react';
import "./Header.css";


export default function Header(){
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState('');

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
    
    return(
        <>
            <header className="headerBody">
                <div className="header">
                    <div>
                        <label className="labels" for="">Nome:</label>
                        <input type="text" placeholder="Digite aqui o nome do país." className="input"/>
                    </div> 
                    <nav id="nav" className={active}>
                        <button className="btn_menu" onClick={() => toggleMenu()} ><span className="hamburger"></span></button>
                        <div className="menu">
                            <div className="options">
                                <label className="labels" for="continente">Continente:</label>
                                <select id="continente" className="selects">
                                    <option value="0">Nenhum</option>
                                </select>
                            </div>   
                            <div className="options">
                                <label className="labels" for="code">Code:</label>
                                <select id="code" className="selects" >
                                    <option value="0">Nenhum</option>
                                </select>
                            </div>
                            <div className="options">
                                <label className="labels" for="idiomas">Idioma:</label>
                                <select id="idiomas" className="selects"> 
                                    <option value="0">Nenhum</option>
                                </select>   
                            </div>
                            <button className="btn_apply">Aplicar</button>
                        </div>
                    </nav>
                </div>
            </header>
            
        </>
    )
}