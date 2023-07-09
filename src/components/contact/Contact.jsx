import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsTelegram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


 
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hwc4i96', 'template_weozqhf', form.current, 'Wj7MaOP0271AVjiDo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Мои контакты</h5>
      <h2>Свяжитесь со мной</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 className='contact__option-h5'>chelenger907@gmail.com</h5>
            <a className='contact__option-a' target='_blank' href="mailto:chelenger907@gmail.com" rel="noreferrer">Отправьте сообщение</a>
          </article>

          <article className='contact__option'>
            <BsTelegram className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a className='contact__option-a' target='_blank' href="https://t.me/Dmitriy_Sad_22" rel="noreferrer">Отправьте сообщение</a>
            {/* "https://m.me/ernest.achiever" */}
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+996 778 578 285</h5>
            <a className='contact__option-a' target='_blank' href="https://wa.me/996778578285?" rel="noreferrer">Отправьте сообщение</a>
            {/* https://api.whatsapp.com/send?phone=+996778578285 */}
          </article>
        </div>
        {/* end of contact Option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Ваше Полное Имя'  required/>
          <input type="email" name='email' placeholder='Ваш Адрес Электронной Почты'  required/>
          <textarea name="message" rows="7" placeholder='Ваше Сообщение'></textarea>
          <button type='submit' className='btn btn-primary'>Отправьте сообщение</button>
        </form>
      </div>
    </section>
  )
}

export default Contact