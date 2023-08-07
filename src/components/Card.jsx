import '../styles/Card.css'
import {colorDec} from '../App'
import Graph from './Graph'
import { useThemeContext } from '../context/ThemeContext';

export default function Card({price, porcentaje, img, coinId, cur}) {
    const {contextTheme}=useThemeContext()
    return (
        <div className={`card ${contextTheme === 'Dark' ? 'modo-oscuro' : ''}`}>
            <div className='cripto-info'>
                <img className='card-img' src={img} alt="" />

                <div className='cripto-title'>
                    <h2 className={`title ${contextTheme === 'Dark' ? 'modo-oscuro' : ''}`}> {price} </h2>

                    <h2 className={`porcentaje ${colorDec(porcentaje)}`}>{porcentaje}%</h2>
                </div>
            </div>
            
            <div className="graphic">
                <Graph coin={coinId} currency={cur} color={colorDec(porcentaje)}/>
            </div>
        </div>
    )
}