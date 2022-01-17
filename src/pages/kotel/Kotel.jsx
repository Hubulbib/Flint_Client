import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { NameAndDesc, otherKotels } from './choose'
import pictureKotel from './pngKotel.png'
import kotel from '../main/Kotel.svg'
import table from './table.svg'
import pdf from './Manual_Flint.pdf'
import './kotelPage.css'
import 'react-toastify/dist/ReactToastify.css';

const Kotel = () => {

    const {prodId} = useParams()
    const [Kname, setName] = useState()
    const [descr, setDescr] = useState()
    const [others, setOthers] = useState([])

    const error = () => {
        toast.error('Что-то пошло не так, попробуйте снова', {position: 'bottom-left', style: {fontSize: '20px'},
        theme: 'dark', autoClose: 3000})
    }

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'}) // плавный переход

        const {name, des} = NameAndDesc(prodId)
        setName(name)
        setDescr(des)

        setOthers(otherKotels(prodId))
    }, [prodId])

    function linkCreate(link){
        return `/productions/${link}`
    }

    return(
        <div className='page__kotel__div'>
            <div className='page__main'><h1>{Kname}</h1></div>
            <div className='page__desc'>
                <div className='photo__div'>
                    <img src={pictureKotel} alt='котел'/>
                </div>
                <div className='desc__div'>
                    <h1 className='desc__main__h1'>Описание</h1>
                    <h1 className='desc__other__h1'>{descr}</h1>
                </div>
            </div>
            <div className='page__kotel__a'>
                <h1><a href={pdf} download='Manual_Flint.pdf'>Руководство по эксплуатации</a></h1>
            </div>
            <div className='table__div'>
                <img src={table} alt='таблица характеристик'/>
            </div>
            <div className='other__kotels'>
                <div className='other__kotels__h1'><h1>Другие модели</h1></div>
                <div className='other__kotel__all'>
                    <Link to={linkCreate(others[0])} className='other__kotel__div'>
                        <img src={kotel} alt='котел'/>
                        <h1>{others[0]}</h1>
                    </Link>
                    <Link to={linkCreate(others[1])} className='other__kotel__div'>
                        <img src={kotel} alt='котел'/>
                        <h1>{others[1]}</h1>
                    </Link>
                    <Link to={linkCreate(others[2])} className='other__kotel__div'>
                        <img src={kotel} alt='котел'/>
                        <h1>{others[2]}</h1>
                    </Link>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Kotel