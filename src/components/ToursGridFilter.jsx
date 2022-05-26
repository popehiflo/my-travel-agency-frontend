/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import axios from 'axios';
import TourCard from './TourCard';

const GridWrapper = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  gap: 1.5rem;
`;

const ToursGridFilter = ({ category, filters, order }) => {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);

  useEffect(() => {
    const getAllTours = async () => {
      try {
        const resp = await axios.get(
          category
            ? `${process.env.REACT_APP_API_URL}/api/tours?category=${category}`
            : `${process.env.REACT_APP_API_URL}/api/tours`,
        );
        setTours(resp.data);
      } catch (error) { console.log(error); }
    };
    getAllTours();
  }, [category]);

  useEffect(() => {
    category && setFilteredTours(
      tours.filter(
        (tour) => Object.entries(filters).every(([key, value]) => tour[key].includes(value)),
      ),
    );
  }, [tours, category, filters]);

  useEffect(() => {
    if (order === 'desc') {
      setFilteredTours(filteredTours.sort((a, b) => b.days - a.days));
    } else {
      setFilteredTours(filteredTours.sort((a, b) => a.days - b.days));
    }
  }, [order]);
  return (
    <GridWrapper>
      {category !== 'all'
        ? filteredTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)
        : tours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}
    </GridWrapper>
  );
};

ToursGridFilter.propTypes = {
  category: PropTypes.string,
  filters: PropTypes.instanceOf(Object),
  order: PropTypes.string,
};

ToursGridFilter.defaultProps = {
  category: 'all',
  filters: {},
  order: 'desc',
};

export default ToursGridFilter;
