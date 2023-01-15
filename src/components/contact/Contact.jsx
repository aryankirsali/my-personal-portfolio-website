import React from 'react';
import "./contact.css";
import {MdOutlineEmail} from "react-icons/md";
import {BsLinkedin} from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs";
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q5vqw9q', 'template_sgp76zg', form.current, 'lcS_3WJRz0fgPrwGt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-item'/>
            <h4>Email</h4>
            <h5>kirsaliaryanpro@gmail.com</h5>
            <a href="mailto:kirsaliaryanpro@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-item'/>
            <h4>Linkedin</h4>
            <h5>Aryan Kirsali</h5>
            <a href="https://linkedin.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-item'/>
            <h4>Whatsapp</h4>
            <h5>+91 6397547477</h5>
            <a href="https://api.whatsapp.com/send?phone=6397547477" target="_blank">Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required  />
          <textarea name='message' rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
