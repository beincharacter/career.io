import React from 'react';
import JobSearchItem from './JobSearchItem';
import PopularKeywords from './PopularKeywords';

export const HeroHeader: React.FC = () => {
  return (
    <main className="flex flex-col items-start my-16 pt-4 text-base px-24 leading-6 max-md:mt-10 max-md:max-w-full">
      <header className="text-7xl font-semibold text-sky-400 leading-[79px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px] w-[600px]">
        <span className="text-slate-800">Discover more than</span>{' '}
        <span className="text-sky-400">5000+ Jobs</span>
      </header>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/14218965a68995b175b0b28259d9d4794dea5e46d0f2eebb376ad24b6302dd71?apiKey=946bf3455d5f470191c249fabc019131&"
        alt=""
        className="mt-7 w-[500px] max-md:max-w-full"
      />
      <p className="mt-6 text-l leading-8 text-slate-600 max-md:max-w-full">
        Great platform for the job seeker that searching for new career heights and passionate about startups.
      </p>
      <form className="flex gap-0 justify-center items-center p-4 pl-4 mt-6 bg-white shadow-2xl max-md:flex-wrap">
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
        <button className="shrink-0 px-7 py-3.5 bg-indigo-600 text-white">Search my job</button>
      </form>
      <PopularKeywords keywords={['UI Designer', 'UX Researcher', 'Android', 'Admin']} />
    </main>
  );
};

export default HeroHeader;