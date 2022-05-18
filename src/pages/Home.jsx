import React from 'react';
import Banner from '../components/Banner';
import Tours from './Tours';

import { getToursByBanner } from '../dataFake';
import TourTypes from '../components/TourTypes';

const Home = () => {
  const toursBanner = getToursByBanner();
  return (
    <>
      <Banner data={toursBanner} idHash="home" content />
      <TourTypes />
      <Tours />
    </>
  );
};

export default Home;
