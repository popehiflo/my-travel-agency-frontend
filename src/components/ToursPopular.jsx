import React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';
import { getToursByPopularity } from '../dataFake';
import ToursGrid from './ToursGrid';

const ToursPopularWrapper = styledComponents.section`
  text-align: center;
  .alltours {
    margin-top: 3rem;
  }
`;

// TODO: Add tours filter by category, pagination and sorting
// FIXME: Temporal component to show the tours grid
const ToursPopular = () => {
  const tours = getToursByPopularity();
  return (
    <ToursPopularWrapper id="popular-tours">
      <div className="heading">
        <span>enjoy the most beautiful places</span>
        <h1>POPULAR TOURS</h1>
      </div>
      <ToursGrid tours={tours} />
      <Link to="/tours" className="btn-primary alltours">
        Explore All Tours
      </Link>
    </ToursPopularWrapper>
  );
};

export default ToursPopular;
