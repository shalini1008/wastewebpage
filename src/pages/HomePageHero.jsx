import React from 'react';

import bgdonut1 from '/back.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'
const smartWasteImage = '/smart.jpg';
const qrimage = '/qr.png'
const trusti = '/trust.jpg'
const location = '/loc.png'
const garbage = '/garbage.jpg'
const ecof = '/eco.png'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './Carousel.css'


const slider = [
  {
      title: "Smart Waste Scheduling",
      description: "Never miss a pickup! Plan your garbage collection with ease and keep your home spotless.",
      url: smartWasteImage
    },
    {
      title: "Verified Buyers & Collectors",
      description: "Your trash, their treasure—connect with verified buyers and collectors for a win-win!",
      url: trusti
    },
    {
      title: "Hassle-Free Pickup Requests",
      description: "Click, schedule, done—say goodbye to garbage piling up",
      url: garbage
    },
  
    {
      title: "QR-Based Waste Drop-Offs",
      description: "Scan, drop, done—effortless and quick garbage drop-offs.",
      url: qrimage
    },
    {
      title: "Location-Based Services",
      description: "Customized services for your area—whether it’s crowded streets or spacious lanes.",
      url: location
    },
    {
      title: "Eco-Friendly Tips",
      description: "Sort smarter, recycle better—let’s make the planet greener, one bag at a time!",
      url: ecof
    },
    
]


const Carousel = () => {
return (
  <div className='carousel'>
      <div>
          <div className='carousel-content'>
            
              <h1>BinBandhu</h1>
              <hr />
              <p>One Tap to Clean, One Step to Green</p>
              <p>A simple change for a brighter tomorrow.</p>
              <a href="#" className='slider-btn'>Contact Us</a>
          </div>
      </div>

      <Swiper 
      className='myswiper'
      modules={[Pagination, EffectCoverflow, Autoplay]}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true
      }}
      loop={true}
      pagination={{clickable: true}}

      autoplay={{
          delay: 5000,
          disableOnInteraction: false
      }}
      breakpoints={{
          640: {
              slidesPerView: 2
          },
          768: {
              slidesPerView: 1
          },
          1024: {
              slidesPerView: 2
          },
          1560: {
              slidesPerView: 3
          },
      }}
      
      >
          {
              slider.map(data => (
                  <SwiperSlide style={{ backgroundImage: `url(${data.url})` }} className="myswiper-slider">
                      <div>
                          <h2>{data.title}</h2>
                          <p>{data.description}</p>
                          <a href={`${data.url}`} target="_blank" className='slider-btn'>explore</a>
                      </div>
                  </SwiperSlide>
              ))
          }
      </Swiper>
      <img src={bgdonut1} alt="bg image" className='bgdonut1' />

  </div>
)
}

export default Carousel
