import React from 'react'
import '../styles/Header.css'
import ReactSwitch from 'react-switch';
import { useThemeContext } from '../context/ThemeContext';

export default function Header({currencys, fun, cur, handleSwitch, checked}) {
 const {contextTheme}=useThemeContext()
    return (
        <header className='app-header' id={contextTheme}>
            <p>Crypto Stadistics</p>
            <div className='select-button'>
                <select value={cur} name="coinSelect" id="coinSelect" className={contextTheme} onChange={_ => {fun(document.getElementById("coinSelect").value)}}>
                {currencys.map((item, index) => <option value={item} key={index} >{item}</option>)}  
                </select>
                
            <ReactSwitch
            onChange={handleSwitch}
            checked={checked}
            onColor='#86d3ff'
            onHandleColor='#2693e6' 
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
            activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0, 0.2)'
            className='react-switch'
            id='material-switch'/>
            </div>

        </header>
    )
}   