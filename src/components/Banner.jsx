/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import arrowLeft from '../assets/imgs/circle-chevron-left-solid.svg';
import arrowRight from '../assets/imgs/circle-chevron-right-solid.svg';

const BannerWrapper = styledComponents.section`
  padding: 0;
`;

const MySwiper = styledComponents(Swiper)`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  .swiper-button-prev {
    background-image: url(${arrowLeft});
    background-color: var(--color-bg-white);
    background-repeat: no-repeat;
    background-size: 100%;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    margin: auto -0.8rem;
  }
  .swiper-button-next {
    background-image: url(${arrowRight});
    background-color: var(--color-bg-white);
    background-repeat: no-repeat;
    background-size: 100%;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    margin: 0 -0.8rem;
  }
  .swiper-button-prev::after {
    display: none;
  }
  .swiper-button-next::after {
    display: none;
  }
  .swiper-pagination-bullet {
    width: 1.5rem;
    height: 1.5rem;
    background: var(--color-bg-white);
  }
  .swiper-pagination-bullet-active {
    background: var(--color-primary);
  }
`;

const SlideImg = styledComponents.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideContent = styledComponents.div`
  position: absolute;
  top: 70%;
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

const Banner = ({ data, idHash, content }) => {
  const tours = data;
  const hash = idHash;
  return (
    <BannerWrapper id={hash}>
      <MySwiper
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        effect="fade"
        pagination={{ clickable: true }}
        grabCursor
        loop
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {tours.map((tour) => (
          <SwiperSlide key={tour.id}>
            <SlideImg src={tour.imgs[0]} alt="tour munaycha explorer" />
            <SlideContent>
              {content && <span>Let us explore the beauty of</span>}
              <h3>{tour.title}</h3>
              {content && <Link to="/" className="btn-primary">Discover</Link>}
            </SlideContent>
          </SwiperSlide>
        ))}
      </MySwiper>
    </BannerWrapper>
  );
};

Banner.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  idHash: PropTypes.string.isRequired,
  content: PropTypes.bool.isRequired,
};

export default Banner;
