import React from 'react';
import styledComponents from 'styled-components';
import BackpackCard from '../components/BackpackCard';

const BackpackWrapper = styledComponents.section`
`;

const BackpackGrid = styledComponents.div`
  display: ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(31rem, 1fr))[auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  gap: 2rem;
`;

const Backpack = () => (
  <BackpackWrapper>
    <div className="heading">
      <span>travel backpack with</span>
      <h1>Your selected Tours</h1>
    </div>
    <BackpackGrid>
      <BackpackCard />
      <BackpackCard />
      <BackpackCard />
      <BackpackCard />
    </BackpackGrid>
  </BackpackWrapper>
);

export default Backpack;
