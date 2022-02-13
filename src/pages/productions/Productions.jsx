import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import kotels from '../../components/kotels/kotels'
import Kotels from '../../components/kotels/Kotels.jsx'
import './prod.css'

function KotelsToArray(){
    const kotls = []

    let k = 0
    for(let i of kotels){
        kotls.push(<Kotels key={k} name={i.name} N={i.N} S={i.S} V={i.V}/>)
        k++
    }
    
    return kotls
}

const Productions = () => {

    const [kotl, setKotl] = useState([])

    useEffect(() => {
        setKotl(KotelsToArray())
    }, [])

    return(
        <div className='prod__div'>
            <Helmet>
                <title>Продукты</title>
                <meta name='description' content='Котлы Flint - одни из самых надежных на российском рынке: все наши продукты проходят полный цикл тестирования' />
            </Helmet>
            <div className='prod__div__h1'><h1>Наша продукция</h1></div>
            <div className='prod__kotels'>
                {kotl}
            </div>
        </div>
    )
}

export default Productions