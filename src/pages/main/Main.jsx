import React from 'react'
import {Link} from 'react-router-dom'
import './main.css'
import kotel from './Kotel.svg'
import { Helmet } from 'react-helmet'

const Main = () => {

    return(
        <>
            <Helmet>
                <title>Flint</title>
                <meta name='description' content='Flint - лучшие в производстве газовых котлов' />
            </Helmet>
            <div className='main__div'>
                <div className='main__div__up'>
                    <div className='main__div__left'>
                        <h1 className='main__h1__main'>Бытовые отопительные газовые котлы FLINT</h1>
                        <Link to='/about' className='main__btn__detail' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>подробнее</Link>
                    </div>
                    <div className='main__div__right'>
                        <img src={kotel} alt='kotel'/>
                    </div>
                </div>
                <div className='main__div__down'>
                    <h1 className='main__down__main'>Почему Flint?</h1>
                    <h1 className='main__down__second'>Flint являются лидерами по внедрению новых технологий в процесс производства газовых котлов. КПД наших продуктов достигает более 93%</h1>
                </div>
            </div>
        </>
    )
}

export default Main