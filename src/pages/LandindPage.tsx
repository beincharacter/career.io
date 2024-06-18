import React from 'react';
import HeroHeader from '../componants/HeroHeader';
import CarouselComponent from '../componants/Carousel';
import ExploreCategory from '../componants/ExploreCategory';
import { AdvertisementCard } from '../componants/AdvertisementCard';
import FeaturedJobs from '../componants/FeaturedJobs';
import LatestJobsOpen from '../componants/LatestJobs';
import { useLocation } from 'react-router-dom';
import FindJobsComponent from './FindJobs';




export const LandingPage: React.FC = () => {
  const location = useLocation();

  return (
    <div className='w-full pb-20'>
      <HeroHeader />
      {location.pathname === '/' && <Home />}
      {location.pathname === '/find-jobs' &&  <Home />}
      
    </div>
  );
};


const Home = () => {
  return (
    <>

      <CarouselComponent />
      <ExploreCategory />
      <AdvertisementCard />
      <FeaturedJobs />
      <LatestJobsOpen />
    </>
  )
}

