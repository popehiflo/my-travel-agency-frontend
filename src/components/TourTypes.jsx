/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import arrowLeft from '../assets/imgs/circle-chevron-left-solid.svg';
import arrowRight from '../assets/imgs/circle-chevron-right-solid.svg';
import { getAllTypeTours } from '../dataFake';

const TourTypesWrapper = styledComponents.section`
  padding: 3rem 9%;
  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
  @media (max-width: 576px) {
    padding: 3rem 9%;
  }
`;

const TourTypesSlider = styledComponents(Swiper)`
  .swiper-slide {
    position: relative;
    overflow: hidden;
    user-select: none;
    padding-bottom: 3rem;
    margin-bottom: 4rem;
    .box-button:hover {
      p {
        display: block;
      }
    }
    }
  }
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
    width: 1rem;
    height: 1rem;
  }
  .swiper-pagination-bullet-active {
    background: var(--color-primary);
  }
`;

const WrapperSlide = styledComponents.div`
  margin-bottom: 4rem;
`;

const SlideImg = styledComponents.img`
  height: 55rem;
  width: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
`;

const SlideBoxButton = styledComponents.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  p {
    background-color: rgba(255, 255, 255, 0.5);
    color: var(--color-secondary);
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    display: none;
  }
  div {
    background-color: var(--color-primary);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    padding: 1rem 0;
    text-align: center;
  }
`;

const borderWhite = {
  border: 'var(--border-primary-white)',
};

const TourTypes = () => {
  const typeTours = getAllTypeTours();
  return (
    <TourTypesWrapper id="tour-types">
      <div className="heading">
        <span>our tour types</span>
        <h1>CHOOSE YOUR VACATION TYPE</h1>
      </div>
      <TourTypesSlider
        spaceBetween={20}
        grabCursor
        loop
        navigation
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        breakpoints={{
          480: { slidesPerView: '1' },
          576: { slidesPerView: '2' },
          768: { slidesPerView: '2' },
          960: { slidesPerView: '3' },
          1024: { slidesPerView: '3' },
          1200: { slidesPerView: '4' },
          1400: { slidesPerView: '4' },
          1800: { slidesPerView: '5' },
        }}
        modules={[Navigation, Pagination]}
      >
        <WrapperSlide>
          {typeTours.map((typeTour) => (
            <SwiperSlide key={typeTour.id}>
              <SlideImg src={typeTour.img} alt="My Travel Agency by popehiflo" />
              <SlideBoxButton className="box-button">
                <p>{typeTour.description}</p>
                <div>
                  <Link to="/cart" className="btn-primary" style={borderWhite}>
                    <FontAwesomeIcon icon={faSearch} />
                    {` ${typeTour.title}`}
                  </Link>
                </div>
              </SlideBoxButton>
            </SwiperSlide>
          ))}
        </WrapperSlide>
        <div className="swiper-pagination" />
      </TourTypesSlider>
    </TourTypesWrapper>
  );
};
export default TourTypes;
