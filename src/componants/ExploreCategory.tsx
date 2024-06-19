import * as React from "react";

type CategoryCardProps = {
  imageUrl: string;
  title: string;
  jobsAvailable: number;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ imageUrl, title, jobsAvailable }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <article
      className={`flex flex-col grow p-8 mx-auto w-full hover cursor-pointer ${
        isHovered ? "text-white" : "bg-white border border-solid border-zinc-200"
      } max-md:px-5 max-md:mt-8`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img loading="lazy" src={imageUrl} alt={`${title} category icon`} className="w-12 aspect-square" />
      <h3 className={`mt-8 text-2xl font-semibold leading-7 ${isHovered ? "" : "text-slate-800"}`}>{title}</h3>
      <div className={`flex gap-4 px-px mt-3 text-lg leading-7 ${isHovered ? "" : "text-slate-500"}`}>
        <span>{jobsAvailable} jobs available</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1883c3f970080ef24d10fc7219940fa5e85397d2971645cdf958557da632f345?apiKey=946bf3455d5f470191c249fabc019131&"
          alt=""
          className="shrink-0 my-auto w-6 aspect-square"
        />
      </div>
    </article>
  );
};


const categories = [
  { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a01abc145073fd5b65fb3d1dc58238840cbb658773f211d0d8d09af01de22d34?apiKey=946bf3455d5f470191c249fabc019131&', title: 'Design', jobsAvailable: 235 },
  { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/27141bf69e23f978a1556de61779488da109b1ea437e4bff5b04f190a0d09448?apiKey=946bf3455d5f470191c249fabc019131&', title: 'Sales', jobsAvailable: 756 },
  { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/725ec1ebf514ce5bf1e0d3fd4643e5d12e7d0be9df9055a0aaa58517d0e147f9?apiKey=946bf3455d5f470191c249fabc019131&', title: 'Marketing', jobsAvailable: 140, isFeatured: true },
  { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8fd16790b68f40a71b145e338cf893de0a3959b21b52bacbc73c2156c0de9211?apiKey=946bf3455d5f470191c249fabc019131&', title: 'Finance', jobsAvailable: 325 },
  { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9b06cae18e90c02ffde152882439e6366cc3ee48f814452c3761e0125765374b?apiKey=946bf3455d5f470191c249fabc019131&', title: 'Technology', jobsAvailable: 436 },
  { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/908f62770de21708a8b20f6eb6a62947b053e853319c72bf62ad4b80a0145f78?apiKey=946bf3455d5f470191c249fabc019131&', title: 'Engineering', jobsAvailable: 542 },
  { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/17fdb8063d6a36e4da0bf57f73d91c05b92b7a56df3f83dd44ecf2cd9f02568c?apiKey=946bf3455d5f470191c249fabc019131&', title: 'Business', jobsAvailable: 211 },
  { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bb1a39c94f25450a37f1e05134e17f4ce94d861523ff8394fdf9b55cf92cba70?apiKey=946bf3455d5f470191c249fabc019131&', title: 'Human Resource', jobsAvailable: 346 },
];

export const ExploreCategory: React.FC = () => {
  return (
    <section className="flex flex-col px-24 justify-end items-center pt-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1192px] max-md:max-w-full">
        <header className="flex gap-2.5 justify-between w-full font-semibold max-md:flex-wrap max-md:max-w-full">
          <h1 className="text-5xl text-sky-400 leading-[52.8px] max-md:max-w-full max-md:text-4xl">
            Explore by <span className="text-sky-400">category</span>
          </h1>
          <nav className="flex gap-4 self-end mt-7 text-base leading-6 text-center text-indigo-600">
            <a href="#" className="tab-index-0">Show all jobs</a>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/247d3677732c680ee4f270e0de17e72780a5526fa8c7aeefd90199d2c241fe60?apiKey=946bf3455d5f470191c249fabc019131&" alt="" className="shrink-0 self-start w-6 aspect-square" />
          </nav>
        </header>
        <section className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {categories.slice(0, 4).map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </section>
        <section className="mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {categories.slice(4).map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default ExploreCategory;