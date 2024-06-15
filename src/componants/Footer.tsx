import * as React from "react";

type SectionTitleProps = {
  title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <div className="text-lg font-semibold text-white">{title}</div>
);

type ListItemProps = {
  items: string[];
};

const ListItem: React.FC<ListItemProps> = ({ items }) => (
  <>
    {items.map((item, index) => (
      <div key={index} className="mt-4">
        {item}
      </div>
    ))}
  </>
);

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-16 pb-10 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1192px] max-md:max-w-full">
        <header className="flex gap-5 justify-between items-start max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col">
            <div className="flex gap-2 self-start text-2xl font-bold tracking-tight leading-9 text-white whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/55ed716f2ecb93e15165543d53b843197bdcbce846ff7f67c4083c1654ce3e89?apiKey=946bf3455d5f470191c249fabc019131&"
                className="shrink-0 w-8 aspect-square"
                alt=""
              />
              <div className="flex-auto">JobHuntly</div>
            </div>
            <p className="mt-10 text-base leading-7 text-zinc-200">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>
          <nav className="flex flex-col self-stretch text-base leading-6 text-zinc-200">
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
          <nav className="flex flex-col mt-1 text-base leading-6 text-zinc-200">
            <SectionTitle title="Resources" />
            <ListItem items={["Help Docs", "Guide", "Updates", "Contact Us"]} />
          </nav>
          <section className="flex flex-col text-base leading-6">
            <SectionTitle title="Get job notifications" />
            <p className="mt-7 leading-7 text-zinc-200">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <form className="flex gap-2 mt-11 max-md:mt-10">
              <label htmlFor="emailInput" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="emailInput"
                className="justify-center items-start px-4 py-3 text-gray-400 bg-white border border-solid border-zinc-200 max-md:pr-5"
                placeholder="Email Address"
                aria-label="Email Address"
              />
              <button className="justify-center px-6 py-3 font-bold text-center text-white whitespace-nowrap bg-indigo-600 max-md:px-5">
                Subscribe
              </button>
            </form>
          </section>
        </header>
        <footer className="flex gap-5 mt-32 text-base font-medium leading-6 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto my-auto">
            2021 @ JobHuntly. All rights reserved.
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddac5565f16886e1ffde1d96d549eb0440cc328883ea806c8136d1709475ad8d?apiKey=946bf3455d5f470191c249fabc019131&"
            className="shrink-0 w-64 max-w-full aspect-[7.69]"
            alt=""
          />
        </footer>
      </div>
    </div>
  );
};