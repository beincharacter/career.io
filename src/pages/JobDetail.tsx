import * as React from "react";

type JobDetailProps = {
  title: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  niceToHaves: string[];
  appliedCount: number;
  capacity: number;
  applyBefore: string;
  jobPostedOn: string;
  jobType: string;
  salary: string;
  categories: string[];
  requiredSkills: string[];
};

type ListItemProps = {
  text: string;
};

const ListItem: React.FC<ListItemProps> = ({ text }) => (
  <li className="flex gap-2 mt-2 max-md:flex-wrap">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a4148df581ac7f9babc5c5a7e267f6ed9a2b7798adeb3ae71d7a3d5122c71f7?apiKey=946bf3455d5f470191c249fabc019131&" alt="" className="shrink-0 self-start w-5 aspect-square" />
    <span className="max-md:max-w-full">{text}</span>
  </li>
);

const JobDetail: React.FC<JobDetailProps> = ({
//   title,
  description,
  responsibilities,
  qualifications,
  niceToHaves,
  appliedCount,
  capacity,
  applyBefore,
  jobPostedOn,
  jobType,
  salary,
  categories,
  requiredSkills,
}) => {
  return (
    <main className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="w-full max-w-[1192px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base leading-6 text-slate-600 max-md:mt-10 max-md:max-w-full">
              <h1 className="text-3xl font-semibold leading-10 text-slate-800 max-md:max-w-full">
                Description
              </h1>
              <p className="mt-4 leading-7 max-md:max-w-full">{description}</p>
              <h2 className="mt-10 text-3xl font-semibold leading-10 text-slate-800 max-md:max-w-full">
                Responsibilities
              </h2>
              <ul>
                {responsibilities.map((responsibility, index) => (
                  <ListItem key={index} text={responsibility} />
                ))}
              </ul>
              <h2 className="mt-10 text-3xl font-semibold leading-10 text-slate-800 max-md:max-w-full">
                Who You Are
              </h2>
              <ul>
                {qualifications.map((qualification, index) => (
                  <ListItem key={index} text={qualification} />
                ))}
              </ul>
              <h2 className="mt-10 text-3xl font-semibold leading-10 text-slate-800 max-md:max-w-full">
                Nice-To-Haves
              </h2>
              <ul>
                {niceToHaves.map((niceToHave, index) => (
                  <ListItem key={index} text={niceToHave} />
                ))}
              </ul>
            </div>
          </section>
          <aside className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
              <h2 className="text-3xl font-semibold leading-10 text-slate-800">
                About this role
              </h2>
              <div className="flex flex-col p-4 mt-6 w-full bg-slate-50">
                <div className="text-base font-semibold leading-6 text-center text-slate-500">
                  <span className="text-slate-800">{appliedCount} applied</span>{" "}
                  <span className="text-slate-500">of {capacity} capacity</span>
                </div>
                <div className="flex gap-0 mt-2">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className={`flex-1 shrink-0 h-2 ${
                        index < appliedCount / 2 ? "bg-emerald-300" : "bg-zinc-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <dl className="mt-6 text-base leading-6">
                <div className="flex gap-5 justify-between mt-6">
                  <dt className="text-slate-600">Apply Before</dt>
                  <dd className="font-semibold text-slate-800">{applyBefore}</dd>
                </div>
                <div className="flex gap-5 justify-between mt-6">
                  <dt className="text-slate-600">Job Posted On</dt>
                  <dd className="font-semibold text-slate-800">{jobPostedOn}</dd>
                </div>
                <div className="flex gap-5 justify-between mt-6">
                  <dt className="text-slate-600">Job Type</dt>
                  <dd className="font-semibold text-slate-800">{jobType}</dd>
                </div>
                <div className="flex gap-5 justify-between mt-6">
                  <dt className="text-slate-600">Salary</dt>
                  <dd className="font-semibold text-gray-800">{salary}</dd>
                </div>
              </dl>
              <hr className="mt-10 border-zinc-200" />
              <h2 className="mt-10 text-3xl font-semibold leading-10 text-slate-800">
                Categories
              </h2>
              <div className="flex gap-2 mt-6 text-sm font-semibold leading-6 whitespace-nowrap">
                {categories.map((category, index) => (
                  <span
                    key={index}
                    className={`justify-center px-2.5 py-1.5 ${
                      index === 0
                        ? "text-amber-400 bg-orange-400 bg-opacity-10"
                        : "text-emerald-300 bg-emerald-300 bg-opacity-10"
                    } rounded-[80px]`}
                  >
                    {category}
                  </span>
                ))}
              </div>
              <hr className="mt-10 border-zinc-200" />
              <h2 className="mt-12 text-3xl font-semibold leading-10 text-slate-800 max-md:mt-10">
                Required Skills
              </h2>
              <div className="flex flex-wrap gap-2.5 mt-5 text-base leading-6 text-indigo-600">
                {requiredSkills.map((skill, index) => (
                  <span key={index} className="justify-center px-3 py-1 bg-slate-50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default function JobDetailComponent() {
  const jobDetails: JobDetailProps = {
    title: "Social Media Marketing Expert",
    description: "Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.",
    responsibilities: [
      "Community engagement to ensure that is supported and actively represented online",
      "Focus on social media content development and publication",
      "Marketing and strategy support",
      "Stay on top of trends on social media platforms, and suggest content ideas to the team",
      "Engage with online communities",
    ],
    qualifications: [
      "You get energy from people and building the ideal work environment",
      "You have a sense for beautiful spaces and office experiences",
      "You are a confident office manager, ready for added responsibilities",
      "You're detail-oriented and creative",
      "You're a growth marketer and know how to run campaigns",
    ],
    niceToHaves: [
      "Fluent in English",
      "Project management skills",
      "Copy editing skills",
    ],
    appliedCount: 5,
    capacity: 10,
    applyBefore: "July 31, 2021",
    jobPostedOn: "July 1, 2021",
    jobType: "Full-Time",
    salary: "$75k-$85k USD",
    categories: ["Marketing", "Design"],
    requiredSkills: ["Project Management", "Copywriting", "Social Media Marketing", "English", "Copy Editing"],
  };

  return (
    <>
    
    <HeroHeader />
    <JobDetail {...jobDetails} />;
    <PerksAndBenefits />
    <CompanyDetailCard />
    {/* <FindJobsComponent /> */}
    </>
  )
}



const HeroHeader: React.FC = () => {
    return (
      <div className="flex flex-col justify-center">
        <div className="flex flex-col pb-20 w-full bg-slate-50 max-md:max-w-full">
          <main className="flex flex-col self-center px-5 mt-11 w-full max-w-[1190px] max-md:mt-10 max-md:max-w-full">
            <nav className="text-base leading-6 text-gray-800 max-md:max-w-full">
              <span className="text-gray-800">Home / Companies / Nomad / </span>
              Social Media Assistant
            </nav>
            <section className="flex gap-5 justify-between p-6 mt-12 w-full bg-white border border-solid border-zinc-200 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 justify-center max-md:flex-wrap">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/17227c23fbb77f341745b345100ffd857a76f1edce7cadcc1b58e4f4454c7a45?apiKey=946bf3455d5f470191c249fabc019131&" alt="Company logo" className="shrink-0 aspect-[0.97] w-[88px]" />
                <div className="flex flex-col justify-center my-auto">
                  <h1 className="text-3xl font-semibold leading-10 text-slate-800">
                    Social Media Assistant
                  </h1>
                  <div className="flex gap-2 justify-between mt-2 text-xl leading-8 text-slate-600">
                    <span>Stripe</span>
                    <span>Paris, France</span>
                    <span>Full-Time</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between py-px my-auto text-lg font-bold leading-7 text-center text-white whitespace-nowrap">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/533201d80a17a8282266fe5538ed591b8c3b89b93d81462ebbf6b0ff9565fa1c?apiKey=946bf3455d5f470191c249fabc019131&" alt="" className="shrink-0 my-auto w-8 aspect-[0.97]" />
                <button className="justify-center px-14 py-3.5 bg-indigo-600 max-md:px-5">
                  Apply
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  };

type BenefitProps = {
  icon: string;
  title: string;
  description: string;
};

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => (
  <article className="flex flex-col justify-center rounded max-md:mt-8">
    <img loading="lazy" src={icon} alt="" className="w-12 aspect-square" />
    <h3 className="mt-6 text-xl font-semibold leading-6 text-slate-800">{title}</h3>
    <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
  </article>
);

const benefits: BenefitProps[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e87ddf2a6047d4dd1f56769a498a92be8a1f33e974df05104b37feed987f6a1?apiKey=946bf3455d5f470191c249fabc019131&",
    title: "Full Healthcare",
    description: "We believe in thriving communities and that starts with our team being happy and healthy.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/08ef45de529a39b00500bd5ac3edbc86c8a5afabf0573b02c1df317f9470ae32?apiKey=946bf3455d5f470191c249fabc019131&",
    title: "Unlimited Vacation",
    description: "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/895fb4f899e4429be588f466a331bbfce996508f2c0839043e4c9c387ce99304?apiKey=946bf3455d5f470191c249fabc019131&",
    title: "Skill Development",
    description: "We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5cf3c0f00f561c3af34ffd70ef5d9903c000113a34f74bc70902bc490f391de8?apiKey=946bf3455d5f470191c249fabc019131&",
    title: "Team Summits",
    description: "Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6add72c721f30eb031b0461ea89dbb4f6bde9234e60e39ffb13c7cc1e442e3d?apiKey=946bf3455d5f470191c249fabc019131&",
    title: "Remote Working",
    description: "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/acadd3052170ec4671e070396481aad1c862904ed9c49c0c3168a49343268eb7?apiKey=946bf3455d5f470191c249fabc019131&",
    title: "Commuter Benefits",
    description: "We're grateful for all the time and energy each team member puts into getting to work every day.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7890d9cd78fbf700e8d52bc655b4883f9371733536247b59c1460dcbf61569c0?apiKey=946bf3455d5f470191c249fabc019131&",
    title: "We give back.",
    description: "We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two.",
  },
];

const PerksAndBenefits: React.FC = () => {
  return (
    <section className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="flex flex-col w-full max-w-[1192px] max-md:max-w-full">
        <h2 className="text-3xl font-semibold leading-10 text-slate-800 max-md:max-w-full">
          Perks & Benefits
        </h2>
        <p className="mt-2 text-base leading-6 text-slate-600 max-md:max-w-full">
          This job comes with several perks and benefits
        </p>
        <div className="mt-6 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 max-md:flex-col max-md:gap-0">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                <Benefit {...benefit} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

type ReadMoreLinkProps = {
  text: string;
  iconSrc: string;
};

const ReadMoreLink: React.FC<ReadMoreLinkProps> = ({ text, iconSrc }) => (
  <div className="flex gap-4 mt-1 text-base leading-6 text-center text-indigo-600">
    <div>{text}</div>
    <Image src={iconSrc} alt="" className="shrink-0 self-start w-6 aspect-square" />
  </div>
);

type CompanyInfoProps = {
  logoSrc: string;
  name: string;
  description: string;
  readMoreText: string;
  readMoreIconSrc: string;
};

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  logoSrc,
  name,
  description,
  readMoreText,
  readMoreIconSrc,
}) => (
  <section className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
    <header className="flex gap-5 justify-between items-center self-start font-semibold">
      <Image src={logoSrc} alt={`${name} logo`} className="shrink-0 w-16 aspect-square" />
      <div className="flex flex-col">
        <h1 className="text-3xl leading-10 text-slate-800">{name}</h1>
        <ReadMoreLink text={readMoreText} iconSrc={readMoreIconSrc} />
      </div>
    </header>
    <p className="mt-8 text-base leading-7 text-slate-600 max-md:max-w-full">
      {description}
    </p>
  </section>
);

const CompanyDetailCard: React.FC = () => {
  return (
    <main className="flex justify-center items-center px-16 py-20 bg-white rounded-lg max-md:px-5">
      <div className="w-full max-w-[1192px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <CompanyInfo
              logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c4454a13889865e4ddda250f32c4cf3d652e251f3325cf7e1658e54f8b0df755?apiKey=946bf3455d5f470191c249fabc019131&"
              name="Stripe"
              description="Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use our software to accept payments and manage their businesses online."
              readMoreText="Read more about Stripe"
              readMoreIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/dc6ff9dfc719e08ad2d1005d148e9aeb6b2345dccddbb607af626b85069b6c78?apiKey=946bf3455d5f470191c249fabc019131&"
            />
          </div>
          <aside className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/351e70c2d0cf84204316c2ac77333e41b4d5043c5433a57a5fa450239f035b6a?apiKey=946bf3455d5f470191c249fabc019131&"
                    alt="Stripe product showcase"
                    className="grow w-full aspect-[1.15] max-md:mt-5"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center max-md:mt-5">
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0096ae5d939d92321de0295ea26495529d84ca47cb1815f43b51250307e2e700?apiKey=946bf3455d5f470191c249fabc019131&"
                      alt="Stripe feature 1"
                      className="aspect-[1.2] w-[157px]"
                    />
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/344ad0e769948690ad38151250a6ef51224f94f253e88235262893a6daf6db76?apiKey=946bf3455d5f470191c249fabc019131&"
                      alt="Stripe feature 2"
                      className="mt-4 aspect-[1.2] w-[157px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};