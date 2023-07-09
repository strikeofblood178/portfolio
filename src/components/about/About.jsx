import React from 'react'
import './about.css'
// import ME from '../../assets/me-a13.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {TiFolderOpen} from 'react-icons/ti'

function About() {
  return (
    <section id='about'>
      <h5>Узнай</h5>
      <h2>Обо Мне Побольше</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={ME} alt="About" /> */}
            <h1 className='about__me-text'>
            Web <br /> Development.
            </h1>
          </div>
        </div>

        <div className="about_content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Опыт</h5>
              <small>Начинающий специалист</small>
            </article>


            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Клиенты</h5>
              <small>Начальная практика</small>
            </article>


            <article className='about__card'>
              <TiFolderOpen className='about__icon'/>
              <h5>Проектов</h5>
              <small> 12  завершённых</small>
            </article>
          </div>
          
          <p className='about__content'>«Меня зовут Садаков Дмитрий Александрович, мне  22 года. . Окончил профессиональный лицей №98. В свое время выбрал именно эту специальность Web программиста потому что она очень интересная  и существуют множества различных направлений в этой сфере для профессионального развития.Мне кажется, что мои знания вашей компании пригодятся. Дело в том, что я хорошо умею работать на данный момент с HTML5
- CSS3
- JavaScript
 - Препроцессоры, фреймворки и библиотеки: Bootstrap5, Tailwind, React, React Redux,
Sass, Pug, JQuery
- Навки работы в редакторе Figma . Кроме того, мне нравится работать в команде, я коммуникабельный и целеустремленный человек. Быстро обучаюсь, люблю узнавать что-то новое. Из моих увлечений можно перечислить спорт, чтение, бумажный-моделизм. Наверное, этого достаточно для рассказа. Если у вас есть вопросы, я на каждый из них готов ответить»</p>

          <a href="#contact" className='btn btn-primary'>Напиши Мне</a>

        </div>

      </div>
    </section>
  )
}

export default About