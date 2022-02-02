import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
import logo from './Logo.svg'

const NavBar = () => {

    const [openMenu, setOpen] = useState(false)

    function onLogoClick() {
        if (window.innerWidth <= 1024){
            setOpen(false)
            document.body.classList.remove('lock')
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    }

    function burgerOpen(){
        setOpen(!openMenu)
        document.body.classList.toggle('lock')
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return(
        <div className='nav__main__div'>
            <Link to='/' className='nav__logo' onClick={onLogoClick}><img src={logo} alt='Flint' /></Link>
            <div className='nav__burger__div' onClick={burgerOpen}>
                <div className={openMenu ? 'nav__burger active' : 'nav__burger'}>
                    <span></span>
                </div>
            </div>
            <div className={openMenu ? 'nav__menu active' : 'nav__menu'}>
                <Link to='/about' className='nav__item__link' onClick={burgerOpen}><h1>о компании</h1></Link>
                <Link to='/productions' className='nav__item__link' onClick={burgerOpen}><h1>продукты</h1></Link>
                <div className='nav__item__link' style={{cursor: 'default'}}><h1 style={{borderBottom: 'none'}}><a href='tel:88634364683'>служба продаж<br/>8 (8634) 36-46-83</a></h1></div>
            </div>
            <div className='nav__item'>
                <Link to='/about' className='nav__item__link'><h1>о компании</h1></Link>
                <Link to='/productions' className='nav__item__link'><h1>продукты</h1></Link>
                <div className='nav__item__link' style={{cursor: 'default'}}><h1 style={{borderBottom: 'none'}}><a href='tel:88634364683'>служба продаж<br/>8 (8634) 36-46-83</a></h1></div>
            </div>
            
        </div>
    )
}

export default NavBar