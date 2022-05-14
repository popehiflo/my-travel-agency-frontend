/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

const BannerWrapper = styledComponents.section`
  padding: 0;
`;

const MySwiper = styledComponents(Swiper)`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const styleSwiperSlide = {
  background: 'red',
};

const SlideImg = styledComponents.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideContent = styledComponents.div`
  position: absolute;
  top: 80%;
  left: 3%;
  color: var(--color-text-white);
  span {
    font-size: 2vw;
    font-weight: bolder;
  }
  h3 {
    font-size: 4vw;
  }
  @media (max-width: 768px) {
    span {
      font-size: 6vw;
    }
    h3 {
      font-size: 7vw;
    }
  }
`;

const Banner = () => {
  const bgImg01 = 'https://swiperjs.com/demos/images/nature-1.jpg';
  const bgImg02 = 'https://swiperjs.com/demos/images/nature-2.jpg';
  const bgImg03 = 'https://swiperjs.com/demos/images/nature-3.jpg';
  return (
    <BannerWrapper id="banner">
      <MySwiper
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        grabCursor
        loop
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={styleSwiperSlide}>
          <SlideImg src={bgImg01} alt="bgImg01" />
          <SlideContent>
            <span>Let us explore the beauty of</span>
            <h3>Machu Picchu 01</h3>
            <Link to="/" className="btn-primary">Discover</Link>
          </SlideContent>
        </SwiperSlide>
        <SwiperSlide style={styleSwiperSlide}>
          <SlideImg src={bgImg02} alt="bgImg02" />
          <SlideContent>
            <span>Let us explore the beauty of</span>
            <h3>Machu Picchu 02</h3>
            <Link to="/" className="btn-primary">Discover</Link>
          </SlideContent>
        </SwiperSlide>
        <SwiperSlide style={styleSwiperSlide}>
          <SlideImg src={bgImg03} alt="bgImg03" />
          <SlideContent>
            <span>Let us explore the beauty of</span>
            <h3>Machu Picchu 03</h3>
            <Link to="/" className="btn-primary">Discover</Link>
          </SlideContent>
        </SwiperSlide>
      </MySwiper>
    </BannerWrapper>
  );
};

export default Banner;
