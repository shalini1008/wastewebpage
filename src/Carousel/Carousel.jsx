import React from 'react';
import { Link } from 'react-router-dom';  // Import Link
import bg1 from './image/bg1.jpg';
import bg2 from './image/bg2.jpg';
import pic1 from './image/congested.jpg';
import pic2 from './image/noncongested.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';  // Correct CSS import for swiper 11.x

// import './Carousel.css';

const slider = [
  {
    title: "CONGESTED AREAS",
    description: (
      <>
        <div className="line">
          <strong>Special Garbage Collection Services:</strong> Get access to exclusive waste drop-off points or alternative collectors to ensure your trash is disposed of responsibly.
        </div>
        <div className="line">
          <strong>Quick QR-Based Drop-offs:</strong> Skip the wait and easily verify waste drop-offs at designated locations.
        </div>
        <div className="line">
          <strong>Community Solutions:</strong> Learn about shared disposal systems for your area.
        </div>
      </>
    ),
    url: pic1,
    link: "/congestedform"  // Add the link for congested form
  },
  {
    title: "NON-CONGESTED AREAS",
    description: (
      <>
        <div className="line">
          <strong>Effortless Scheduling:</strong> Get real-time updates on van schedules to avoid missing garbage pickups.
        </div>
        <div className="line">
          <strong>Enhanced Navigation for Vans:</strong> Share your precise location to help vans find you faster.
        </div>
        <div className="line">
          <strong>Eco-Friendly Tips:</strong> Learn how to segregate waste for quicker and more efficient collection.
        </div>
      </>
    ),
    url: pic2,
    link: "/noncongestedform"  // Add the link for non-congested form
  },
];

const Carousel = () => {
  return (
    <div className='carousel'>
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
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        breakpoints={{
          640: {
            slidesPerView: 2, // Show 2 slides on smaller screens
          },
          768: {
            slidesPerView: 3, // Show 3 slides on medium screens
          },
          1024: {
            slidesPerView: 4, // Show 4 slides on larger screens
          },
          1560: {
            slidesPerView: 5, // Show 5 slides on very large screens
          },
        }}
        spaceBetween={30} // Add space between slides
      >
        {
          slider.map((data, index) => (
            <SwiperSlide className="myswiper-slider" key={index} style={{ backgroundImage: `url(${data.url})` }}>
              <div className="slider-content">
                <h2>{data.title}</h2>
                <div className="description">{data.description}</div>
                <Link to={data.link} className='slider-btn'>explore</Link>  {/* Use Link for routing */}
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      <img src={bg1} alt="bg image" className='bg1' />
      <img src={bg2} alt="bg image" className='bg2' />
    </div>
  );
};

export default Carousel;
