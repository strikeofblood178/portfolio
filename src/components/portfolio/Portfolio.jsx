import React, { useState } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/frame-11.png'
import IMG2 from '../../assets/frame-22.png'
import IMG3 from '../../assets/frame-77.png'
import IMG4 from '../../assets/frame-44.png'
import IMG5 from '../../assets/frame_55.png'
import IMG6 from '../../assets/frame_66.png'



const Portfolio = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image: IMG1,
      title: 'Foot Bill - ресторан японской кухни, где воплощается искусство и вкус в каждом блюде. Изысканные суши, свежие роллы и японские специалисты ожидают вас здесь.',
      github: 'https://github.com/strikeofblood178/examen',
      demo: 'https://strikeofblood178.github.io/examen/',
    },
  
    {
      id: 2,
      image: IMG2,
      title: 'Добро пожаловать на "Дари Душой" - увлекательный сайт, который откроет тебе новые горизонты путешествий и приключений. Здесь ты найдешь вдохновляющие истории о самых прекрасных уголках мира.',
      github: 'https://github.com/strikeofblood178/strikeofblood178.github.io',
      demo: 'https://strikeofblood178.github.io/'
    },
  
    {
      id: 3,
      image: IMG3,
      title: 'Drop - это инновационная финансовая организация, которая стремится сделать твою жизнь проще и комфортнее. С Drop ты можешь забыть о сложностях традиционного банкинга, ведь мы предлагаем современные решения и удобные сервисы, доступные на любом устройстве.',
      github: 'https://github.com/strikeofblood178/drop',
      demo: 'https://strikeofblood178.github.io/drop/'
    },
  
    {
      id: 4,
      image: IMG4,
      title: '"FastBite" - это небольшой сайт о быстрой забегаловке, где ты найдешь невероятно вкусные гамбургеры и другие аппетитные блюда. Это место, где скорость и качество сочетаются, чтобы удовлетворить твои гастрономические желания.',
      github: 'https://github.com/strikeofblood178/grid-adaptive',
      demo: 'https://strikeofblood178.github.io/grid-adaptive/'
    },
  
    {
      id: 5,
      image: IMG5,
      title: 'Мой первый опыт в создании меню бургер. Я был заинтригован искусством создания адаптивного дизайна, который позволяет пользователям легко навигировать по сайту с любого устройства.',
      github: 'https://github.com/strikeofblood178/burger_menu',
      demo: 'https://strikeofblood178.github.io/burger_menu/'
    },
  
    {
      id: 6,
      image: IMG6,
      title: 'Я также уделял время изучению грид-сетки, и это был важный шаг в моем пути в веб-разработке. Я глубоко погрузился в изучение принципов и возможностей грид-сетки, осознавая ее потенциал в создании сложных и гибких макетов.',
      github: 'https://github.com/strikeofblood178/learning_the_grid',
      demo: 'https://strikeofblood178.github.io/learning_the_grid/'
    }
  ])




  return (
    <section id='portfolio'>
      <h5>Мои недавние работы</h5>
      <h2>Портфолио</h2>

      <div className="container portfolio__container">
      {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3 className='portfolio__item-h3'>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article> 
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio