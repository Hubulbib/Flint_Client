import React from 'react'
import {Link} from 'react-router-dom'
import './kotel.css'
import kotel from '../../pages/main/Kotel.svg'

const Kotels = ({name, N, S, V}) => {

    function Pathname(){
        switch(name){
            case 'КС-Г-007F':
                return '/productions/007F'
            case 'КС-Г-010F':
                return '/productions/010F'
            case 'КС-Г-012F':
                return '/productions/012F'
            case 'КС-Г-016F':
                return '/productions/016F'
            case 'КС-Г-020F':
                return '/productions/020F'
            case 'КС-Г-025F':
                return '/productions/025F'
            case 'КС-Г-030F':
                return '/productions/030F'
            case 'КС-Г-040F':
                return '/productions/040F'
            default:
                return '/productions/007F'
        }
    }

    return(
        <div className='kotel__container'>
            <div className='kotel__img'><img src={kotel} alt='котел'/></div>
            <div className='kotel__rigth'>
                <h1 className='kotel__name'>{name}</h1>
                <h1 className='kotel__detail'>Характеристики:</h1>
                <h1 className='kotel__detail_i'>- Мощность: {N} кВт</h1>
                <h1 className='kotel__detail_i'>- Отапливаемая площадь: {S} м2</h1>
                <h1 className='kotel__detail_i' style={{marginBottom: '60px'}}>- Объем воды в котле: {V} л</h1>
                <Link to={Pathname()} className='kotel__btn'>подробнее</Link>
            </div>
        </div>
    )
}

export default Kotels