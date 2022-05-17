import React from 'react';
import Banner from '../components/Banner';
import Tours from './Tours';

import { getToursByBanner } from '../dataFake';

const Home = () => {
  const toursBanner = getToursByBanner();
  return (
    <>
      <Banner data={toursBanner} idHash="home" content />
      <Tours />
    </>
  );
};

export default Home;
