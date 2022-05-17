import React from 'react';
import { getAllTours } from '../dataFake';
import ToursGrid from '../components/ToursGrid';

// TODO: Add tours filter by category, pagination and sorting
// FIXME: Temporal component to show the tours grid
const Tours = () => {
  const tours = getAllTours();
  return (
    <section id="tours">
      <ToursGrid tours={tours} />
    </section>
  );
};

export default Tours;
