import React from 'react'
import CTA from './CTA'
import './header.css'
// import ME from '../../assets/me.png'
import ME from '../../assets/me-a2-3.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Привет,  Меня зовут :</h5>
        <h1>Садаков Дмитрий </h1>
        <h5 className='text-light'>Я Начинающий Веб программист</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Прокрути Вниз</a>
      </div>
    </header>
  )
}

export default Header