import * as React from "react";

type SectionTitleProps = {
  title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <div className="text-lg font-semibold text-white mb-4">{title}</div>
);

type ListItemProps = {
  items: string[];
};

const ListItem: React.FC<ListItemProps> = ({ items }) => (
  <>
    {items.map((item, index) => (
      <div key={index} className="mt-2 sm:mt-4">
        {item}
      </div>
    ))}
  </>
);

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-10 sm:pt-16 pb-6 sm:pb-10 w-full bg-gray-800 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col w-full max-w-[1192px]">
        <header className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="flex flex-col">
            <div className="flex gap-2 text-2xl font-bold tracking-tight leading-9 text-white whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/55ed716f2ecb93e15165543d53b843197bdcbce846ff7f67c4083c1654ce3e89?apiKey=946bf3455d5f470191c249fabc019131&"
                className="shrink-0 w-8 aspect-square"
                alt=""
              />
              <div className="flex-auto">carrer.io</div>
            </div>
            <p className="mt-4 sm:mt-10 text-base leading-7 text-zinc-200">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>
          <nav className="flex flex-col text-base leading-6 text-zinc-200">
            <SectionTitle title="About" />
            <ListItem
              items={[
                "Companies",
                "Pricing",
                "Terms",
                "Advice",
                "Privacy Policy",
              ]}
            />
          </nav>
          <nav className="flex flex-col text-base leading-6 text-zinc-200">
            <SectionTitle title="Resources" />
            <ListItem items={["Help Docs", "Guide", "Updates", "Contact Us"]} />
          </nav>
          <section className="flex flex-col text-base leading-6">
            <SectionTitle title="Get job notifications" />
            <p className="mt-4 leading-7 text-zinc-200">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 mt-6">
              <label htmlFor="emailInput" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="emailInput"
                className="flex-grow justify-center items-start px-4 py-3 text-gray-400 bg-white border border-solid border-zinc-200"
                placeholder="Email Address"
                aria-label="Email Address"
              />
              <button className="justify-center px-6 py-3 font-bold text-center text-white whitespace-nowrap bg-indigo-600">
                Subscribe
              </button>
            </form>
          </section>
        </header>
        <footer className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-between items-center mt-10 sm:mt-20 text-base font-medium leading-6 text-white">
          <div className="text-center sm:text-left">
            2021 @ carrer.io. All rights reserved.
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddac5565f16886e1ffde1d96d549eb0440cc328883ea806c8136d1709475ad8d?apiKey=946bf3455d5f470191c249fabc019131&"
            className="w-48 sm:w-64 max-w-full aspect-[7.69]"
            alt=""
          />
        </footer>
      </div>
    </div>
  );
};