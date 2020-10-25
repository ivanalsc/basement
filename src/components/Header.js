import React, { useState } from 'react'
import menu from '../img/menu.svg';
import closed from '../img/closed.svg';
import './Header.css';

export const Header = () => {


    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <header>
            <p>b.</p>
            <div className='hamburguer-menu' onClick={()=> setMenuOpen(!menuOpen)}>
                <img src= {menuOpen ? closed : menu} alt='menu' />
            </div>
           
        </header>

        <div className={menuOpen ? 'menu-mobile-open' : 'menu-mobile'}>
            <ul>
                
                <li><a href='#about' onClick={()=> setMenuOpen(!menuOpen)}>About</a></li>
                <li><a href='#reservation' onClick={()=> setMenuOpen(!menuOpen)}>Make a Reservation</a></li>
                <li><a href='#follow' onClick={()=> setMenuOpen(!menuOpen)}>Follow Us</a></li>
            </ul>
            
        </div>
        
        </>
    )
}
