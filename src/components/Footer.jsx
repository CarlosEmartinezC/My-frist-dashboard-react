import React from 'react'
import '../styles/Footer.css'
import Logo from '../img/Logo Fondo Blanco- dorado.png'
import { useThemeContext } from '../context/ThemeContext';
export default function Footer () {
    const {contextTheme}=useThemeContext()
    return (
        <div className={`Footer ${contextTheme === 'Dark' ? 'modo-oscuro' : ''}`}>
            <div className='footer-up'>
                <div className='footer-p'>
                    <p><b>DESCARGO DE RESPONSABILIDAD IMPORTANTE:</b> todo el contenido
                        disponible en nuestro sitio web, en los sitios web
                        hipervinculados, y en las aplicaciones, foros, blogs,
                        cuentas de redes sociales y otras plataformas asociados 
                        <b> "coingecko" </b> tienen como único objetivo proporcionarle
                        información general procedente de fuentes externas.
                    </p>
                    <br></br>
                    <br></br>
                    <p><b>Crypto Stadistics</b> © 2023</p>
                </div>
                <div className='footer-down'>
                    <p>Developed by</p>
                        <img id='logo' src={Logo} alt='Logo Angela'/>
                </div> 
                <div className='footer-c'>
                </div>
            </div>
        </div>
    )
}