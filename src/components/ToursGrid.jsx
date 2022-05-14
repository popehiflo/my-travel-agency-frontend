import React from 'react';
import styledComponents from 'styled-components';

const GridWrapper = styledComponents.div`
  background: var(--color-bg-light); //quitar esto luego
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  gap: 1.5rem;
`;

const ToursGrid = () => (
  <GridWrapper>ToursGrid</GridWrapper>
);

export default ToursGrid;
