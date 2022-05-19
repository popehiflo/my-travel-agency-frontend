import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styledComponents from 'styled-components';

const BackpackWrapper = styledComponents.section`
`;

const BackpackGrid = styledComponents.div`
  display: ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(31rem, 1fr))[auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  gap: 2rem;
`;

const BackpackCard = styledComponents.div`
  background: white;
  padding: 2rem;
  border: var(--border-primary);
  border-radius: var(--border-radius);
  -webkit-box-shadow: var(--primary-box-shadow);
  box-shadow: var(--primary-box-shadow);
  position: relative;
  svg {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    font-size: 2.7rem;
    color: var(--color-primary);
    cursor: pointer;
    :hover {
      color: var(--color-secondary);
    }
  }
`;

const Backpack = () => (
  <BackpackWrapper>
    <div className="heading">
      <span>travel backpack with</span>
      <h1>Your selected Tours</h1>
    </div>
    <BackpackGrid>
      <BackpackCard>
        <FontAwesomeIcon icon={faTimes} />
        <img src="images/product-1.jpg" alt="" />
        <div className="content">
          <h3>TITLE TOUR</h3>
          <form action="">
            <span>pax number : </span>
            <input type="number" name="" value="1" id="" />
            <span>check in : </span>
            <input type="date" name="" value="" id="" />
          </form>
          <div className="price">
            $249.99
            {' '}
            <span>$399.99</span>
          </div>
        </div>
      </BackpackCard>
      <BackpackCard>
        Hi 2
      </BackpackCard>
      <BackpackCard>
        Hi 3
      </BackpackCard>
    </BackpackGrid>
  </BackpackWrapper>
);

export default Backpack;
