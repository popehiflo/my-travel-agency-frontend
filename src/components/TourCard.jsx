import React from 'react';

const TourCard = ({ tour }) => (
  <pre>{JSON.stringify(tour, null, 2)}</pre>
);

export default TourCard;
