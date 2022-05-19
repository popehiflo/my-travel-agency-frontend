import React from 'react';
import Banner from '../components/Banner';
import TourTypes from '../components/TourTypes';
import Tours from './Tours';
import { getToursByBanner } from '../dataFake';

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
