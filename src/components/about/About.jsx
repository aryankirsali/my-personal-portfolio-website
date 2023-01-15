import React from 'react';
import "./about.css";
import ME from '../../assets/me-about.jpeg';
import {BsAward} from 'react-icons/bs';
import {HiOutlineUsers} from 'react-icons/hi';
import {BsFolderCheck} from 'react-icons/bs';

const About = () => {
  return (
    <section id='About'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about me' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <HiOutlineUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10 Worldwide </small>
            </article>
            <article className='about__card'>
              <BsFolderCheck className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>Software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.</p>
          <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About;
