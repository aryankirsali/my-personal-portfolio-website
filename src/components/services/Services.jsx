import React from 'react';
import "./services.css";
import {BsCheck2Circle} from "react-icons/bs";

const Services = () => {
  return (
    <section id='Services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Custom Web Design & Development</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Corporate Branding & Graphics Design</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Product Design</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Software Redesign</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Logo Design</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Frontend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Custom Web App Development</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Data Migration, Support, and Maintenance</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>CMS Design and Development</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Full Stack Web Development</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Improve site interaction and performance</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Backend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>API Development and Integration</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Manage databases, back-end logic, servers</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>End-to-end Security & Scalability</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Cloud Back-End Solutions</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Backend Refactoring</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
