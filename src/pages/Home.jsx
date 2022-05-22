import React from 'react';
import Banner from '../components/Banner';
import TourTypes from '../components/TourTypes';
import { getToursByBanner } from '../dataFake';
import ToursPopular from '../components/ToursPopular';

const Home = () => {
  const toursBanner = getToursByBanner();
  return (
    <>
      <Banner data={toursBanner} idHash="home" content />
      <TourTypes />
      <ToursPopular />
    </>
  );
};

export default Home;
