import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contacts.css'


const Contacts = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [text, setText] = useState('')

    const error = () => {
        toast.error('Что-то пошло не так, попробуйте снова', {position: 'bottom-left', style: {fontSize: '20px'},
        theme: 'dark', autoClose: 3000})
    }

    const success = (data) => {
        toast.success(data, {position: 'bottom-left', style: {fontSize: '20px'}, theme: 'light', autoClose: 3000})
    }

    async function mail(e){
        e.preventDefault()
        let response = await fetch('https://desolate-cliffs-07274.herokuapp.com/api/send_message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, mail: email, tel, text})
        }).catch(() => {
            error()
        })
        if(response.ok){
            let message = await response.json()
            success(message.message)
            setName(''); setEmail(''); setTel(''); setText('')
        } else {
            error()
        }
    }

    return(
        <>
            <form className='form__div' onSubmit={mail}>
                <div className='form__h1'><h1>Оставить заявку</h1></div>
                <div className='form__name'><input type='text' placeholder='Ваше имя'
                    name='name' required value={name} onChange={e => setName(e.target.value)}/></div>
                <div className='form__name'><input type='email'
                    placeholder='E-mail' name='email' required value={email} onChange={e => setEmail(e.target.value)}/></div>
                <div className='form__name'><input type='tel' maxLength={20}
                    placeholder='Телефон' name='tel' required value={tel} onChange={e => setTel(e.target.value)}/></div>
                <div className='form__text'><textarea placeholder='Сообщение' required
                    autoCapitalize='sentences' spellCheck='true' name='text'
                    value={text} onChange={e => setText(e.target.value)} /></div>
                <button type='submit' className='form__btn'>отправить</button>
            </form>
            <ToastContainer/>
        </>
    )
}

export default Contacts