import React from 'react'
import {FaTelegram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://t.me/Dmitriy_Sad_22" target="_blank" rel="noreferrer"> <FaTelegram /> </a>
        <a href="https://github.com/strikeofblood178?tab=repositories" target="_blank" rel="noreferrer"> <FaGithub /> </a>
        <a href="https://wa.me/996778578285?" target="_blank" rel="noreferrer">  <IoLogoWhatsapp /> </a>
    </div>
  )
}

export default HeaderSocials