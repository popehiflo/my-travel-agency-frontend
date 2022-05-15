import React from 'react';
import styledComponents from 'styled-components';
import { getToursByPopularity } from '../dataFake';
import TourCard from './TourCard';

const GridWrapper = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  gap: 1.5rem;
`;

const ToursGrid = () => {
  const tours = getToursByPopularity();
  return (
    <GridWrapper>
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </GridWrapper>
  );
};

export default ToursGrid;
