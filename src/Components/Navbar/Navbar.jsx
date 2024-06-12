import React from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.scss'

function Navbar() {
  return (
    <div>
        <div className="container">
            <ul>
                <li><p>Сладкие Дни</p><span>%</span></li>
                <li><p>Подарочные Наборы</p></li>
                <li><p>Собрать Набор</p></li>
                <li><img src={logo} alt="" /></li>
                <li><p>Создать Дизайн</p></li>
                <li><p>Компаниям</p></li>
                <li><p>Весь Каталог</p></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar