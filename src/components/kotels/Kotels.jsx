import React from 'react'
import {Link} from 'react-router-dom'
import './kotel.css'

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
        <Link to={Pathname()} className='kotel__container'>
            <h1>{name}</h1>
        </Link>
    )
}

export default Kotels