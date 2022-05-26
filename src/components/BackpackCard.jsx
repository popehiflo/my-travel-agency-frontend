import React from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const BackpackCardWrapper = styledComponents.div`
  background: var(--color-bg-white);
  // border: var(--border-primary);
  border-radius: var(--border-radius);
  -webkit-box-shadow: var(--primary-box-shadow);
  box-shadow: var(--primary-box-shadow);
`;

const CardImage = styledComponents.div`
  background: skyblue;
  height: 18rem;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  position: relative;
  svg {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    font-size: 2.7rem;
    color: var(--color-secondary);
    background: var(--color-bg-white);
    border-radius: 50%;
    width: 2.7rem;
    height: 2.7rem;
    cursor: pointer;
    &:hover {
      color: var(--color-primary);
      transform: scale(1.1);
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }
`;

const CardContent = styledComponents.div`
  h3 {
    font-size: 1.7rem;
    color: var(--color-primary);
    padding: 1rem 1rem 0 1rem;
  }
  .info {
    padding: 1rem 2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    label {
      font-size: 1.5rem;
      color: var(--color-secondary);
      input {
        width: 7rem;
        padding: 0.5rem 1rem;
        color: var(--color-secondary);
        border-radius: var(--border-radius);
        background: var(--color-bg-light);
        font-size: 1.5rem;
      }
    }
  }
  .price {
    background: var(--color-bg-light);
    border-radius: var(--border-radius);
    border: var(--border-primary);
    padding: 1rem 0;
    text-align: center;
    font-size: 2rem;
    color: var(--color-primary);
    font-weight: bold;
  }
`;

const BackpackCard = ({ item }) => {
  const handleOnClick = () => {
    alert('clicked');
  };
  console.log(item);
  return (
    <BackpackCardWrapper>
      <CardImage>
        <FontAwesomeIcon icon={faTimes} onClick={handleOnClick} />
        <img src={item.imgs[0]} alt="" />
      </CardImage>
      <CardContent>
        <h3>{item.title}</h3>
        <div className="info">
          <label htmlFor="pax">
            {'persons: '}
            <input type="number" name="" value={item.quantity} id="pax" style={{ width: '7rem' }} />
          </label>
          <label htmlFor="check-in">
            {'check in: '}
            <input type="date" name="" value="" id="check-in" style={{ width: '20rem' }} />
          </label>
        </div>
        <div className="price">
          {item.quantity * item.price}
        </div>
      </CardContent>
    </BackpackCardWrapper>
  );
};

BackpackCard.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default BackpackCard;
