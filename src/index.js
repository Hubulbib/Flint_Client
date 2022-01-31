import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const open = localStorage.getItem('was')

const Modal = () => (
  <div className='modal'>
    <div className='modal__overlay'>
      <div className='modal__window'>
        <div className='modal__header'>
          <span className='modal__title'>Добро пожаловать</span>
        </div>
        <div className='modal__content'>
          <h1>Чтобы пользование нашим сайтом было максимально удобным, рекомендуем изменить маштаб страницы на 67%.
            <br /><br />Для этого нажимайте <span>Ctrl</span> и <span>-</span></h1>
        </div>
        <div className='modal__footer'>
          <div onClick={OnThanksButton}>Спасибо</div>
        </div>
      </div>
    </div>
  </div>
)

function OnThanksButton() {
  const modal = document.querySelector('.modal__overlay')
  modal.classList.add('hidden')
  setTimeout(() => {
    modal.classList.remove('hidden')
    document.body.style.overflow = 'auto'
    modal.classList.add('close')
  }, 400)
  localStorage.setItem('was', true)
}

const onModal = window.innerWidth > 1024 ? <Modal /> : null

if (!open) {
  document.body.style.overflow = 'hidden'
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    {!localStorage.getItem('was') ? onModal : null}
  </React.StrictMode>,
  document.getElementById('root')
);
