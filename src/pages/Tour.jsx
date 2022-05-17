/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styledComponents from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faClock, faDollarSign, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { getTourBySlug } from '../dataFake';
import Accordion from '../components/Accordion';

const TourImages = styledComponents.div`
  padding: 0;
`;

const SwiperTour = styledComponents(Swiper)`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const SlideImage = styledComponents.img`
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

const TourDetails = styledComponents.section`
  h2 {
    font-size: 4rem;
    color: var(--color-primary);
  }
  h3 {
    font-size: 3rem;
    color: var(--color-secondary);
  }
`;

const BoxInformation = styledComponents.div`
  display: flex;
  .inf-left {
    p {
      background: var(--color-bg-light);
      font-size: 1.8rem;
      padding: 1rem 2rem;
      line-height: 2rem;
    }
  }
  .inf-rigth {
    margin-left: 2rem;
    padding: 1rem;
    border-radius: var(--border-radius);
    border: var(--border-primary);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContentIcons = styledComponents.div`
  background: var(--color-bg-light);
  width: max-content;
  border-radius: var(--border-radius-btn-primary);
  padding: 1rem 1.5rem;
  div {
    padding: 0.5rem;
    font-size: 2rem;
    color: var(--color-secondary);
    svg {
      color: var(--color-primary);
    }
  }
  .btn-primary {
    display: block;
    width: 100%;
    margin-top: 1rem;
  }
`;

const BoxItinierary = styledComponents.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const Tour = () => {
  const { slug } = useParams();
  const tour = getTourBySlug(slug);
  return (
    <>
      <TourImages>
        <SwiperTour
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          grabCursor
          loop
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
        >
          {tour.imgs?.map((img) => (
            <SwiperSlide key={img}>
              <SlideImage src={img} alt={tour.title} />
              <SlideContent>
                <h3>{tour.title}</h3>
                <span>
                  <FontAwesomeIcon icon={faClock} />
                  {` ${tour.duration.days}D/${tour.duration.nights}N `}
                </span>
                <span>
                  {' from '}
                  <FontAwesomeIcon icon={faDollarSign} />
                  {` ${tour.price}/person `}
                </span>
              </SlideContent>
            </SwiperSlide>
          ))}
        </SwiperTour>
      </TourImages>
      <TourDetails>
        <h2>{tour.title}</h2>
        <h3>Information</h3>
        <BoxInformation>
          <div className="inf-left">
            <p>{tour.information}</p>
          </div>
          <div className="inf-rigth">
            <ContentIcons>
              <div className="day">
                <FontAwesomeIcon icon={faSun} />
                {` days: ${tour.duration.days} `}
              </div>
              <div className="night">
                <FontAwesomeIcon icon={faMoon} />
                {` nights: ${tour.duration.nights} `}
              </div>
              <div className="money">
                <FontAwesomeIcon icon={faDollarSign} />
                {` from: ${tour.price} `}
              </div>
              <Link to="/" className="btn-primary">
                <FontAwesomeIcon icon={faHeart} />
                {' Add to Wishlist'}
              </Link>
              <Link to="/" className="btn-primary">
                <FontAwesomeIcon icon={faCartPlus} />
                {' Add to Cart '}
              </Link>
            </ContentIcons>
          </div>
        </BoxInformation>
        <h3>Itinerary</h3>
        <BoxItinierary>
          {tour.itinerary?.map((item) => (
            <Accordion key={item.id} item={item} />
          ))}
        </BoxItinierary>
      </TourDetails>
    </>
  );
};

export default Tour;
