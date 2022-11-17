import React from 'react'
import './selector.css'
import { useTranslation } from 'react-i18next';


const Selector = () => {
    const { i18n } = useTranslation();
  function clickLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className='principali'>
        <div className='contenedor'>
            <h1>
                DEMO VAUPÉS
            </h1>
            <h3> SELECCIONA UN IDIOMA</h3>
            <div className='navigation'>
                <button onClick={() => clickLanguage('en')}>Español</button>
                <button onClick={() => clickLanguage('si')}>Siriano</button>
                <button onClick={() => clickLanguage('tu')}>Tuyuca</button>
                <button onClick={() => clickLanguage('pi')}>Piratapuyo</button>
                <button onClick={() => clickLanguage('yu')}>Yurutí</button>
                <button onClick={() => clickLanguage('cu')}>Curripaco</button>
                <button onClick={() => clickLanguage('ye')}>Yeral</button>
            </div>
        </div>
    </div>
  )
}

export default Selector
