import React from 'react';
import CV from '../../assets/sad.docx';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download target="_blank" className='btn' rel="noreferrer">Скачай моё резюме</a>
        <a href="#contact" className='btn btn-primary'>Напиши Мне</a>
    </div>
  )
}

export default CTA