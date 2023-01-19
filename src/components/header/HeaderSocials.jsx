import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {SiFiverr} from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="www.linkedin.com/in/aryankirsali" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/aryankirsali" target="_blank"><BsGithub/></a>
        <a href="https://www.fiverr.com/aryankirsalipro?up_rollout=true" target="_blank"><SiFiverr/></a>
    </div>
  )
}

export default HeaderSocials
