import React from 'react';
import styledComponents from 'styled-components';
import { getToursByPopularity } from '../dataFake';

const GridWrapper = styledComponents.div`
  background: var(--color-bg-light); //quitar esto luego
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  gap: 1.5rem;
`;

const ToursGrid = () => {
  const tours = getToursByPopularity();
  return (
    <GridWrapper>
      {tours.map((tour) => (
        <pre>{JSON.stringify(tour, null, 2)}</pre>
      ))}
    </GridWrapper>
  );
};

export default ToursGrid;
