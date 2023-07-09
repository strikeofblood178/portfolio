import React from 'react'
import './footer.css'
import {RiWhatsappFill} from 'react-icons/ri'
import {SiGmail} from 'react-icons/si'
import {SiTelegraph} from 'react-icons/si'

const Footer = () => {
  return (
    <section id='footer'>
      <footer>
        <a  href="#header" className='footer__logo footer-a'>DMITRIY</a>

        <ul className='permallinks'>
          <li><a className='footer-a' href="#header">Главная страница</a></li>
          <li><a className='footer-a' href="#about">Обо Мне</a></li>
          <li><a className='footer-a' href="#experience">Мой опыт</a></li>
          <li><a className='footer-a' href="#services">Услуги</a></li>
          <li><a className='footer-a' href="#portfolio">Портфолио</a></li>
          <li><a className='footer-a' href="#testimonials">Рекомендации</a></li>
          <li><a className='footer-a' href="#contact">Мои контакты</a></li>
        </ul>

        <div className="footer__socials">
          <a className='footer__socials-a' target='_blank' href="https://wa.me/996778578285?" rel="noreferrer"><RiWhatsappFill/></a>
          <a className='footer__socials-a' target='_blank' href="mailto:chelenger907@gmail.com" rel="noreferrer"><SiGmail/></a>
          <a className='footer__socials-a' target='_blank' href="https://t.me/Dmitriy_Sad_22" rel="noreferrer"><SiTelegraph/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Портфолио Садакова Дмитрия</small>
        </div>
      </footer>
    </section>
  )
}

export default Footer