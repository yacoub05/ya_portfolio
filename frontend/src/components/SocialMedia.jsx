import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href={'https://www.linkedin.com/in/Yacoub-Abakar/'} target="_blank"><FaLinkedin/></a>
            
        </div>
        <div>
        <a href={'https://github.com/yacoub05'} target="_blank"><FaGithub/></a>
        </div>
    </div>
  )
}

export default SocialMedia