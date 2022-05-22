import React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';
import BackpackCard from '../components/BackpackCard';

const BackpackWrapper = styledComponents.section`
  padding-top: 8rem;
  .heading {
    div {
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

const BackpackGrid = styledComponents.div`
  display: ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(31rem, 1fr))[auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  gap: 2rem;
`;

const BackpackButtons = styledComponents.div`
  margin-top: 2rem;
  -webkit-box-shadow: var(--primary-box-shadow);
  box-shadow: var(--primary-box-shadow);
  border: var(--border-primary);
  border-radius: var(--border-radius);
  background: var(--color-bg-white);
  padding: 2rem;
  padding-top: 1rem;
  h3 {
    padding-top: 1rem;
    font-size: 2rem;
    color: var(--color-secondary);
    span {
      color: var(--color-primary);
    }
  }
`;

const Backpack = () => (
  <BackpackWrapper>
    <div className="heading">
      <span>travel backpack with</span>
      <h1>Your selected Tours</h1>
      <div>
        <button className="btn-secondary" type="button">Continue Choosing</button>
        <button className="btn-primary" type="button">Request a Quote</button>
      </div>
    </div>
    <BackpackGrid>
      <BackpackCard />
      <BackpackCard />
      <BackpackCard />
      <BackpackCard />
    </BackpackGrid>
    <BackpackButtons>
      <h3>
        {'subtotal : '}
        <span>$1499.94</span>
      </h3>
      <h3>{'discount : <span>-$99.94</span> '}</h3>
      <h3>{'subtotal : <span>$1400.00</span> '}</h3>
      <Link to="/" className="btn-primary">Request a Quote</Link>
    </BackpackButtons>
  </BackpackWrapper>
);

export default Backpack;
