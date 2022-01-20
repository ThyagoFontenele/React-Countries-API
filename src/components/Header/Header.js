import React from 'react';
import classes from "./Header.module.css";
export default function Header(){
    return(
        <>
            <div className={classes.headerBody}>
                <header className={classes.header} id="header">
                    <input type="text" className={classes.inputs}/>
                </header>
            </div>
        </>
    )
}