import React from 'react'
import './mailList.css';

const MailList = () => {
  return (
    <div className='mailList'>
        <h1 className="mailTitle">Poupe tempo, poupe dinheiro</h1>
        <span className="mailDesc">Inscreva-se e enviar-lhe-emos as melhores ofertas</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Seu Email' />
            <button>Subscrever</button>
        </div>
    </div>
  )
}

export default MailList