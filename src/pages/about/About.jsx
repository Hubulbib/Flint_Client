import React from 'react'
import {Helmet} from 'react-helmet'
import pic1 from './about_1.jpg'
import pic2 from './about_2.jpg'
import './about.css'

const About = () => {

    return(
        <>
            <Helmet>
                <title>О компании</title>
                <meta name='description' content='Производственный центр расположен в городе Таганрог. Деятельность компании направлена на изготавливание качественных и высокоэффективных газовых котлов'/>
            </Helmet>
            <div className='about__main__div'>
                <h1 className='first__h1'>О компании</h1>
                <div className='about__first'>
                    <div className='about__first__div'>
                        <h1 className='second__h1'>Производственный центр котлов Flint располагается на берегу Азовского моря в городе Таганрог. Деятельность компании направлена на изготавливание качественных и высокоэффективных газовых котлов. Мы намерены создавать долгосрочные ценности за счет ускоренного роста и увеличения прибыльности в рамках упрощенной и более гибкой структуры.</h1>
                    </div>
                    <div className='about__first__img'><img src={pic1} alt='производство 1' /><br />© Depositphotos / Oleg Belov</div>
                </div>
                <div className='about__second'><h1>Использование только самых надежных технологий</h1></div>
                <div className='about__third'>
                    <div className='about__third__img'><img src={pic2} alt='производство 2' /></div>
                    <div className='about__third__h1'><h1>При производстве котлов Flint применяются самые современные и передовые технологии в области лазерной резки, гибочного и сварочного оборудования. Все наши продукты проходят полный цикл тестирования</h1></div>
                </div>
            </div>
        </>
    )
}

export default About