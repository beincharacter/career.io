import React from 'react';
import { useNavigate } from 'react-router-dom';

type CompanyCardProps = {
  logo: string;
  jobCount: number;
  name: string;
  description: string;
  tags: string[];
};

const CompanyCard: React.FC<CompanyCardProps> = ({ logo, jobCount, name, description, tags }) => {
  const navigate = useNavigate();

  return (
    <article className="flex flex-col grow p-6 mx-auto w-full bg-white border border-solid border-zinc-200 leading-[160%] max-md:px-5 max-md:mt-8"
      onClick={() => navigate("/company") }
    >
      <header className="flex gap-5 justify-between text-base text-indigo-600">
        <img loading="lazy" src={logo} alt={`${name} logo`} className="shrink-0 aspect-square w-[88px]" />
        <span className="justify-center self-start px-3 py-1 bg-slate-50">{jobCount} Jobs</span>
      </header>
      <h2 className="mt-4 text-2xl font-semibold leading-7 text-slate-800">{name}</h2>
      <p className="mt-4 text-lg leading-7 text-slate-600">{description}</p>
      <div className="flex gap-4 mt-4 text-sm font-semibold">
        {tags.map((tag, index) => (
          <span key={index} className={`justify-center px-2.5 py-1.5 rounded-[80px] ${
            tag === 'Business Service' ? 'text-amber-400 border border-amber-400 border-solid' :
            tag === 'Technology' ? 'text-red-400 bg-red-400 bg-opacity-10' :
            'text-indigo-600 bg-indigo-600 bg-opacity-10'
          }`}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

const companyData: CompanyCardProps[] = [
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/4824cca40ccfa48eb465fd1bf87d9cafbf481d16614d35ea10093a21888f3b28?apiKey=946bf3455d5f470191c249fabc019131&",
    jobCount: 3,
    name: "Nomad",
    description: "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).",
    tags: ["Business Service"]
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/2546364cc67f5389dc03766b5c764c78d3685c2844a9941bd8c5d6dfbfffda9b?apiKey=946bf3455d5f470191c249fabc019131&",
    jobCount: 3,
    name: "Discord",
    description: "We'd love to work with someone like you. We care about creating a delightful experience.",
    tags: ["Business Service"]
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/965e9998b1b76169993d7a42e38548d0fb52ec1ab18fadba96d06003e96fcad5?apiKey=946bf3455d5f470191c249fabc019131&",
    jobCount: 3,
    name: "Maze",
    description: "We're a passionate bunch working from all over the world to build the future of rapid testing together.",
    tags: ["Business Service"]
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/e744303552c2492f6540668f7f3569210047b180fea1994644d30f788757616c?apiKey=946bf3455d5f470191c249fabc019131&",
    jobCount: 3,
    name: "Udacity",
    description: "Udacity is a new type of online university that teaches the actual programming skills.",
    tags: ["Business Service"]
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/74173221399e7228fcaa279397ac1c2e9636db58c0e6db2b670c6845cfd5dc10?apiKey=946bf3455d5f470191c249fabc019131&",
    jobCount: 3,
    name: "Webflow",
    description: "Webflow is the first design and hosting platform built from the ground up for the mobile age.",
    tags: ["Business Service", "Technology"]
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/af76ac78d6b4ef6b2d116ab59872fae8327c44e677c643ea869c0c5dc3e20672?apiKey=946bf3455d5f470191c249fabc019131&",
    jobCount: 3,
    name: "Foundation",
    description: "Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.",
    tags: ["Business Service", "Crypto"]
  }
];

const RecommendedCompanies: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-16 pt-20 bg-white max-md:px-5">
      <div className="flex flex-col w-full max-w-[1192px] max-md:max-w-full">
        <h1 className="self-start text-3xl font-semibold leading-10 text-slate-800 max-md:max-w-full">
          Recommended Companies
        </h1>
        <p className="self-start mt-2 text-base leading-6 text-slate-500 max-md:max-w-full">
          Based on your profile, company preferences, and recent activity
        </p>
        <div className="mt-8 max-md:max-w-full">
          <div className="flex flex-wrap  gap-5 max-md:flex-col max-md:gap-0">
            {companyData.map((company, index) => (
              <div key={index} className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                <CompanyCard {...company} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedCompanies;