import React from 'react';
import BannerSlide from '../slider/BannerSlide';
import Newmovieslide from '../slider/Newmovieslide';
import Categoryslide from '../slider/Categoryslide';
import Searchbar from '../slider/Searchbar';

const Main = () => {
  return (
    <>
    <Searchbar />
    <BannerSlide />
    <Newmovieslide />
    <Categoryslide />
    </>
  )
}

export default Main