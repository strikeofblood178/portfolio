import React from 'react'
import './services.css'
import {ImCheckmark} from 'react-icons/im'

const Services = () => {
  return (
    <section id='services'>
      <h5>Что я предлагаю</h5>
      <h2>Услуги</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3 className='service__head-h3'>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Я обладаю уникальным опытом в данной сфере и создаю очень крутые работы.</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'> Данные работы завораживают цепляют и вызывают эмоции!</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Помимо знаний программирования я довольно хороший дизайнер.</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Проходил курсы по дизайну также в 98 лицеи.</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Отвечает за все обязанности по веб-дизайну в Figme и Photoshop</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Cоздаю UX и UI, включая дизайн нескольких веб-сайтов</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Энергичный веб-дизайнер.</p>
            </li>
          </ul>
        </article>

        {/* End UI/Ul */}


        <article className='service'>
          <div className="service__head">
            <h3 className='service__head-h3'>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Закончил обучение по профессии Web программиста.</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Обладаю навыками работы с: JavaScript, CSS, Html, и различными фреймворками и библиотеками</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Такими как Bootstrap, tailwind, ReactBootstrap, gup, github,React, React Redux, Sass, Pug, JQuery</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Наиболее важным мне кажется делать сайты адаптивными.</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Они позволяют делать сайт более популярным, опыт данного сайта не ограничивается на виды устройств.</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Я Frontend разработчик в основном заинтересован в создании больших проектов.</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Сложность меня не пугает, безусловно большие проекты визуально многообразны и этим они привлекают в их создании, и не приводят к потери интереса.</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Хочу найти достойное место прохождение практики, ну и в дальнейшем обретение работы. .</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Не терпится начать работу в команде разработчиков.</p>
            </li>
          </ul>
        </article>

        {/* End DEvelopment */}

        <article className='service'>
          <div className="service__head">
            <h3 className='service__head-h3'>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li className='service__list-li'>
              <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>На данный момент создавал работы:</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>В общей массе они являются тренировочными.</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Их мы получали в лицеи.</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Рабочие проекты у нас были разбиты поэтому изучение азов  Web программирования .</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Мои работы,  отличались в основном от всех других учащихся: качеством, все элементы мной тщательно продумывались и прорабатывались, ко всем работам я относился серьёзно.</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Некоторые работы Вы сможете просмотреть в моём портфолио ..</p>
            </li>

            <li className='service__list-li'>
            <div className='service__bicon'><ImCheckmark className='service__list-icon' /></div>
              <p className='service__list-p'>Всегда готов взяться за новые проекты  и постигать неизведанное.</p>
            </li>
          </ul>
        </article>

        {/* End Creation */}


      </div>
    </section>
  )
}

export default Services