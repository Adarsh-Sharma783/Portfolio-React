import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiInstagram} from 'react-icons/si'

import 'aos/dist/aos.css'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a data-aos="fade-down" data-aos-duration="1500"  href="https://www.linkedin.com/in/adarsh-sharma06/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a data-aos="fade-down" data-aos-duration="1200" href="https://github.com/Adarsh-Sharma783" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a data-aos-duration="900" data-aos="fade-down"  data-aos-anchor=".header__socials"  href="https://www.instagram.com/adarsh6_sharma/" target="_blank" rel="noreferrer"><SiInstagram/></a>
    </div>
    )
}

export default HeaderSocials