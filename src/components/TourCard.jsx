import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';
import styledComponents from 'styled-components';

const TourCardWrapper = styledComponents.div`
  background: var(--color-bg-white);
  /* box-shadow: var(--primary-box-shadow); */
  border: var(--border-primary-light);
  border-radius: var(--border-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TourCardInfo = styledComponents.div`
  background: var(--color-bg-light); // quitar esto luego
  border-radius: var(--border-radius);
`;

const CardInfoImage = styledComponents.div`
  position: relative;
  height: 30rem;
  border-radius: var(--border-radius);
  box-shadow: var(--primary-box-shadow);
  overflow: hidden;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .image-icons {
    position: absolute;
    bottom: 0.2rem;
    right: 0;
    margin-right: 0.3rem;
  }
`;

const CardInfoContent = styledComponents.div`
  padding: 1.5rem;
  h3 {
    font-size: 1.8rem;
    color: var(--color-secondary);
    text-transform: uppercase;
  }
`;

const TourCardButtons = styledComponents.div`
  background: skyblue;
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TourCard = ({ tour }) => {
  const { id, slug } = tour;
  return (
    <TourCardWrapper className="box-tour">
      <TourCardInfo className="box__tour">
        <CardInfoImage className="image">
          <img src={tour.img} alt="" />
          <div className="image-icons">
            <Link to="/" className="btn-icon-primary">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link to="/" className="btn-icon-primary">
              <FontAwesomeIcon icon={faCartPlus} />
            </Link>
          </div>
        </CardInfoImage>
        <CardInfoContent className="content">
          {/* FIXME: mostrar solo 90 caracteres de description en p,con JS */}
          <h3>{tour.title}</h3>
          <div className="icons">
            <span className="day">
              <FontAwesomeIcon icon={faSun} />
              {` ${tour.duration.days} días`}
            </span>
            <span className="night">
              <FontAwesomeIcon icon={faMoon} />
              {` ${tour.duration.nights} noches`}
            </span>
            <span className="money">
              <FontAwesomeIcon icon={faMoneyBill1} />
              {` $ ${tour.price}`}
            </span>
          </div>
          <p>{tour.information}</p>
        </CardInfoContent>
      </TourCardInfo>
      <TourCardButtons className="box__buttons">
        {/* TODO: podria enviar solo el slug (siempre y cuando sea unico) */}
        <Link to={`/tours-peru/${id}/${slug}`} className="btn-primary">
          Saber más del tour
        </Link>
      </TourCardButtons>
    </TourCardWrapper>
  );
};

TourCard.propTypes = {
  tour: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
    price: PropTypes.number,
    duration: PropTypes.shape({
      days: PropTypes.number,
      nights: PropTypes.number,
    }),
    information: PropTypes.string,
  }),
};

TourCard.defaultProps = {
  tour: {
    img: '',
    title: '',
    slug: 'slug-por-defecto',
    price: 0,
    duration: {
      days: 0,
      nights: 0,
    },
    information: '',
  },
};

export default TourCard;
