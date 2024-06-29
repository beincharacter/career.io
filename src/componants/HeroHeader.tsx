import React from 'react';
import JobSearchItem from './JobSearchItem';
import PopularKeywords from './PopularKeywords';

export const HeroHeader: React.FC = () => {
  console.log("hero header");
  return (
    <main className="flex flex-col items-start my-8 md:my-16 pt-4 text-base px-4 md:px-24 leading-6">
      <header className="text-4xl md:text-7xl font-semibold leading-tight md:leading-[79px] w-full md:w-[600px]">
        <span className="text-slate-800">Discover more than</span>{' '}
        <span className="text-sky-400">5000+ Jobs</span>
      </header>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/14218965a68995b175b0b28259d9d4794dea5e46d0f2eebb376ad24b6302dd71?apiKey=946bf3455d5f470191c249fabc019131&"
        alt=""
        className="mt-4 md:mt-7 w-full max-w-[500px]"
      />
      <p className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8 text-slate-600">
        Great platform for the job seeker that searching for new career heights and passionate about startups.
      </p>
      <form className="flex flex-col md:flex-row gap-4 md:gap-0 justify-center items-stretch md:items-center p-4 mt-6 bg-white shadow-2xl w-full max-w-[600px]">
        <JobSearchItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6f7d2d193db6251ea4757715e35a2f044527b213a4c7437134260b59ad135df2?apiKey=946bf3455d5f470191c249fabc019131&"
          description="Job title or keyword"
          inputId="jobTitleOrKeyword"
          placeholder="Job title or keyword"
        />
        <JobSearchItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/73bc25fd17b61dee66f20d03b6b888eb35ca7914be006c1f239a1ce9b6b5e1d9?apiKey=946bf3455d5f470191c249fabc019131&"
          description="Location"
          hasDropdownIcon
          placeholder="Florence, Italy"
        />
        <button className="w-full md:w-auto shrink-0 px-7 py-3.5 bg-indigo-600 text-white">Search my job</button>
      </form>
      <PopularKeywords keywords={['UI Designer', 'UX Researcher', 'Android', 'Admin']} />
    </main>
  );
};

export default HeroHeader;