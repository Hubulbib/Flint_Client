import React from'react'
import { Link } from 'react-router-dom'
import './footer.css'
import logo from '../nav/Logo.svg'
import mail from './mail.svg'
import reactor from './reactor.svg'

const Footer = () => {

    function Scroll(){
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return(
        <div className='footer__main'>
            <div className='footer__item'>
                <div className='footer__logo__div'><img src={logo} alt='Flint' className='footer__logo'/></div>
                <Link to='/about' className='footer__item__link' onClick={Scroll}><h1>о компании</h1></Link>
                <Link to='/productions' className='footer__item__link' onClick={Scroll}><h1>продукты</h1></Link>
                <Link to='/contacts' className='footer__item__link' onClick={Scroll}><h1>контакты</h1></Link>
                <div className='footer__item__link__about'><h1>© 2021 Flint<br/>Все права защищены.</h1></div>
            </div>
            <div className='footer__item__2'>
                <div className='footer__item__number'><h1><a href='tel:88634364683'>служба продаж<br/>8 (8634) 36-46-83</a></h1></div>
                <div className='footer__item__number'>
                    <h1>электронная почта</h1>
                    <div className='footer__item__email'>
                        <img src={mail} alt='email'/>
                        <h1><a href='mailto:flint.rov@gmail.com?subject=Обращение' target="_blank" rel="noreferrer">flint.rov@gmail.com</a></h1>
                    </div>
                </div>
            </div>
            <div className='footer__item'>
                <div className='footer__item__number'>
                    <h1>created by</h1>
                    <img src={reactor} alt='ReactorIT' className='reactor'/>
                </div>
                
            </div>
        </div>
    )
}

export default Footer