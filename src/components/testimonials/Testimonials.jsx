// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import React, { useState } from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/IMG-22.jpg'
import AVTR2 from '../../assets/prepod5.jpg'
import AVTR3 from '../../assets/prepod7.jpg'
import AVTR4 from '../../assets/prepod08.jpg'

// сладер свайпер

import "swiper/css/navigation";


// import required modules
import { Autoplay } from "swiper";


// usetate

const Testimonials = () => {
  const [data, setData] = useState(
    [
      {
        avatar: AVTR1,
        title: "Горшков  Д. В.",
        review: 'Дмитрий - это ученик с высокими учебными способностями. Он проявляет большой интерес к изучаемым предметам, активно участвует в уроках и всегда задает хорошие вопросы. Он очень дисциплинирован и ответственен.Одним из самых ярких качеств Дмитрия является его умение работать в команде.'
      },
    
      {
        avatar: AVTR2,
        title: "ВОПОЛЬСКИЙ  В. В.",
        review: ' Он хорошо справляется с коллективными задачами и всегда готов помочь. Он умеет находить компромиссы и достигать согласия в спорных вопросах. Кроме того, Дмитрий обладает хорошими навыками коммуникации. Он умеет ясно и точно выражать свои мысли, а также уважительно относится к точкам зрения других людей.'
      },
    
      {
        avatar: AVTR3,
        title: "Сомятов  А. В.",
        review: 'Я впечатлен вашим профессионализмом и способностью быстро усваивать новые концепции и технологии в области frontend разработки. Ваша преданность и ответственность в учебе ставят вас в ряды самых лучших учеников. Вы проявляете осторожность и внимательность при работе над проектами, что приводит к высокому качеству ваших результатов. '
      },
    
      {
        avatar: AVTR4,
        title: "САТЫБАЛДИЕВА  А. Э.",
        review: 'Я восхищаюсь вашими достижениями в обучении и вашим прогрессом в изучении английского языка. Ваша страсть к языку и стремление к совершенству сразу заметны. Вы проявляете высокую мотивацию и целеустремленность в изучении языка, и ваша усидчивость приносит вам заметные результаты. Ваша уверенность в общении на английском языке растет.'
      }
    
    ]
  )
  


  return (
    <section id='testimonial'>
      <h5>Отзывы преподавателей</h5>
      <h2>Рекомендации</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      // modules={[ Pagination]}
      // spaceBetween={40}
      // slidesPerView={1}
      // pagination={{ clickable: true }}

      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      >
        {
          data.map(({avatar, title, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
                
              </div>
              <h5 className='client__name'>{title}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
       
      </Swiper>
    </section>
  )
}

export default Testimonials