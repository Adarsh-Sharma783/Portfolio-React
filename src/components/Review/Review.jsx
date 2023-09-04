import React from 'react'
import './Review.css'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Review = () => {

  const reviewData = [
    {
      avatar: require('../../assets/Avtar1.jpg'),
      name: 'Mohit Verma',
      review: `Adarsh Sharma is a content creation expert. He consistently delivered high-quality and SEO-friendly content for our organization. His work has significantly improved our online presence, and I was impressed by his dedication to producing engaging content.`
    },
    {
      avatar: require('../../assets/Avtar1.jpg'),
      name: "Mittul Patel",
      review: `I had the pleasure of collaborating with Adarsh Sharma on a web development project. He demonstrated exceptional coding skills and a keen eye for detail. He played a crucial role in bringing our project to fruition, and I highly recommend him for any development work.`
    }
  ]




  return (
    <section id='review'>
        <h5  data-aos="fade-up" data-aos-anchor="#review"  data-aos-duration='700'>Feedback from colleagues and clients</h5>
        <h2 data-aos="fade-up" data-aos-anchor="#review"  data-aos-duration='900'>Reviews</h2>

        <Swiper 
              // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container reviews__container" data-aos="fade-up" data-aos-anchor="#review"  data-aos-duration='1800'>
          {
            reviewData.map(({avatar, name,review }, index) => (
              <SwiperSlide className="review" key={index}>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
            ))
          }
        </Swiper>
    </section >
  )
}

export default Review