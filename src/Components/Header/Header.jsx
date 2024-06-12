import React from 'react'
import './Header.scss'
import { CiLocationOn } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { SiOdnoklassniki } from "react-icons/si";
import { IoLogoVk } from "react-icons/io5";

function Header() {
  return (
    <div className='header_div'>
        <div className="container">
            <ul>
                <li><p>Гарантия свежести</p></li>
                <li><p>Доставка и оплата</p></li>
                <li><p>Оптовые поставки</p></li>
                <li><p>Контакты</p></li>
                <li>
                    <CiLocationOn />
                    <p>Санкт-Петербург</p>
                </li>
                <li>
                    <IoPhonePortraitOutline />
                    <p>8 812 309-82-88</p>
                </li>
                <li>
                    <MdOutlineShoppingBag />
                    <p>В корзине (4 товара)</p>
                </li>
                <li><FaTelegramPlane /></li>
                <li><SiOdnoklassniki /></li>
                <li><IoLogoVk /></li>
            </ul>
        </div>        
    </div>
  )
}

export default Header