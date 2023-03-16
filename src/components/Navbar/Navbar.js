import React, { useRef } from 'react';
import logo from '../../assets/SKLogo.png';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import { FaBars,FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom'
import '../../styles/Navbar.css'

const Navbar = () => {
  let refNav = useRef()
  
  const showNavbar = () => {
    refNav.current.classList.toggle('responsive_nav')
  }

  return (
    <header className='container-nav'>
        <img src={logo} alt='shovel'/>
        <i><AiOutlineWhatsApp/></i>
    <nav ref={refNav} className='nav-res'>
            <Link to={'/'}>Inicio</Link>
            <Link to={'/rules'}>Reglas</Link>
            <Link to={'/leaders'}>Lideres</Link>
            <Link to={'/activities'}>Actividades</Link>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <FaTimes/>
            </button>
    </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  )
}


export default Navbar