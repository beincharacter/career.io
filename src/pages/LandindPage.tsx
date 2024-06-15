import React from 'react';
import HeroHeader from '../componants/HeroHeader';
import CarouselComponent from '../componants/Carousel';
import ExploreCategory from '../componants/ExploreCategory';


export const LandingPage: React.FC = () => {
  return (
    <div className='w-full'>
      <HeroHeader />
      <CarouselComponent />
      <ExploreCategory />
    </div>
  );
};