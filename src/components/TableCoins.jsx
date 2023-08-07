import React from 'react'
import '../styles/TableCoins.css'
import CoinRow from './CoinRow'
import { useThemeContext } from '../context/ThemeContext';

export default function TableCoins({coins}) {
  const {contextTheme}=useThemeContext()
  return (
    <table className={`table_coins ${contextTheme === 'Dark' ? 'modo-oscuro' : ''}`}>
      <thead>
        <tr>
          <td>#</td>
          <td>Moneda</td>
          <td>Precio</td>
          <td>24h</td>
          <td>Vol. total</td>
          <td>Cap. mercado</td>
          <td>Últimos 7 días</td>
        </tr>
      </thead>

      <tbody>
        {coins.map((coin, index) => (
          <CoinRow coin={coin} key={index} index={index + 1}/>
        ))}
      </tbody>
    </table>
  )
}