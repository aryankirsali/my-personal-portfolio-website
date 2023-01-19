import React from 'react';
import "./footer.css";
import {BsFacebook} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Portfolio</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com" target="_blank"><BsFacebook/></a>
        <a href="https://www.instagram.com/aryan__kirsali/" target="_blank"><BsInstagram/></a>
        <a href="https://twitter.com/aryan__kirsali" target="_blank"><BsTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>Aryan.Kirsali&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
