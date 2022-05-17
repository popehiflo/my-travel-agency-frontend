import React from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import TourCard from './TourCard';

const GridWrapper = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  gap: 1.5rem;
`;

const ToursGrid = (props) => {
  const { tours } = props;
  return (
    <GridWrapper>
      {tours?.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </GridWrapper>
  );
};

ToursGrid.propTypes = {
  tours: PropTypes.instanceOf(Array).isRequired,
};

export default ToursGrid;
