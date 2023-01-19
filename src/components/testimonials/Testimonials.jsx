import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Jessica Jones",
    review: "100% recommended, this guy is on top of his game, responds to messages very quickly, and delivers your requests in no time, pleasure to deal with, helped me through everything, thank you. if you are looking for a professional website developer, guys look no further, this guy is what you need 100%",
  },
  {
    avatar: AVTR2,
    name: "kilean kyle",
    review: "Great responsiveness and was willing to listen to all my requests and help implement it. Also helped me make the project independent, and will definitely recommend this service to anyone else who would like to try it. Good good good",
  },
  {
    avatar: AVTR3,
    name: "John Trevor",
    review: "This was a fantastic experience and he did a great job of asking the right questions, understanding the requirements, and adding his own creative interpretation. I will absolutely come back to add on to the site down the road. Thanks for everything!",
  },
  {
    avatar: AVTR4,
    name: "Sofia Ahmed",
    review: "Very fast and efficient with his work. I'd love to work with him again in the future.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt=""/>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
