import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignsPost } from '@fortawesome/free-solid-svg-icons';

const AccordionBox = styledComponents.div`
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0.5rem;
  }
`;

const AccordionHeading = styledComponents.button`
  width: 100%;
  text-align: left;
`;

const AccordionContent = styledComponents.p`
  padding: 2rem;
  font-size: 1.5rem;
  line-height: 2rem;
  color: var(--color-secondary);
  border-radius: var(--border-radius-btn-primary);
  background: var(--color-bg-white);
  box-shadow: var(--primary-box-shadow);
  animation: fadeIn 0.5s linear;
  display: block;
`;

const Accordion = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { id, day, tramo, description } = item;
  return (
    <AccordionBox key={id}>
      <AccordionHeading className="btn-primary" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faSignsPost} />
        {` Day ${day}: ${tramo}`}
      </AccordionHeading>
      {isOpen && <AccordionContent>{description}</AccordionContent>}
    </AccordionBox>
  );
};

Accordion.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default Accordion;
