import React from 'react'
import '../styles/Footer.css'
import Logo from '../img/Logo Fondo Blanco- dorado.png'
import { useThemeContext } from '../context/ThemeContext';
export default function Footer () {
    const {contextTheme}=useThemeContext()
    return (
        <div className={`Footer ${contextTheme === 'Dark' ? 'modo-oscuro' : ''}`}>
            <div className='footer-up'>
                <div className={`footer-p ${contextTheme === 'Dark' ? 'modo-oscuro' : ''}`}>
                    <p><b>DESCARGO DE RESPONSABILIDAD IMPORTANTE:</b> Este sitio web se ha creado con
                        fines educativos y tiene como objetivo proporcionar
                        información general y conocimientos en el area financiera.
                        El contenido presentado aquí se basa en el consumo de la API 
                        de la pagina<a href='https://www.coingecko.com/es'><b> coingecko </b></a>
                         su compilación y sintesis de la información disponible.
                    </p>
                    <br></br>
                    <br></br>
                    <p><b>Crypto Stadistics</b> © 2023</p>
                </div>
                <div className='footer-down'>
                    <p>Developed by</p>
                        <a href='https://github.com/CarlosEmartinezC'><img id='logo' src={Logo} alt='Logo del desarrollador' /></a>
                </div> 
            </div>
        </div>
    )
}