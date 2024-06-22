import React from 'react';
import TransitionWrapper from '../componants/TransitionWrapper';

// type JobCardProps = {
//   logo: string;
//   title: string;
//   company: string;
//   location: string;
//   jobType: string;
//   tags: string[];
// };

// const JobCard: React.FC<JobCardProps> = ({ logo, title, company, location, jobType, tags }) => (
//   <div className="px-10 py-6 mt-4 bg-white max-md:px-5 max-md:max-w-full">
//     <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//       <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
//         <img loading="lazy" src={logo} alt={`${company} logo`} className="shrink-0 w-16 aspect-square max-md:mt-10" />
//       </div>
//       <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
//         <div className="flex flex-col grow font-semibold leading-[160%] max-md:mt-10">
//           <h3 className="text-xl leading-6 text-slate-800">{title}</h3>
//           <div className="flex gap-2 justify-between py-px mt-2 text-base text-slate-600">
//             <span>{company}</span>
//             <span>{location}</span>
//           </div>
//           <div className="flex gap-2 mt-2 text-sm whitespace-nowrap">
//             <span className="justify-center px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">{jobType}</span>
//             <div className="shrink-0 w-px bg-zinc-200 h-[34px]" />
//             {tags.map((tag, index) => (
//               <span key={index} className={`justify-center px-2.5 py-1.5 text-${index % 2 === 0 ? 'amber-400' : 'indigo-600'} border border-${index % 2 === 0 ? 'amber-400' : 'indigo-600'} border-solid rounded-[80px]`}>
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

type TeamMemberProps = {
  image: string;
  name: string;
  role: string;
  socialIcon: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, role, socialIcon }) => (
  <div className="flex flex-col flex-1 p-6 bg-white rounded border border-solid border-zinc-200 max-md:px-5">
    <img loading="lazy" src={image} alt={name} className="self-center w-20 aspect-square" />
    <div className="mt-4 text-lg font-semibold text-slate-800">{name}</div>
    <div className="mt-1 text-base text-slate-500">{role}</div>
    <img loading="lazy" src={socialIcon} alt="Social media icon" className="self-center mt-4 aspect-[2.5] w-[60px]" />
  </div>
);

type BenefitProps = {
  icon: string;
  title: string;
  description: string;
};

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => (
  <div className="flex flex-col justify-center rounded max-md:mt-8">
    <img loading="lazy" src={icon} alt="" className="w-12 aspect-square" />
    <h3 className="mt-6 text-xl font-semibold leading-6 text-slate-800">{title}</h3>
    <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
  </div>
);

export const CompanyDetail: React.FC = () => {

  const teamMembers = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a0e40d30c155072baf7f2ce2e10958b553546597d07d480b956709700882dfd?apiKey=946bf3455d5f470191c249fabc019131&", name: "Célestin Gardinier", role: "CEO & Co-Founder", socialIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/da2f53e0587903ee6b97335e04c439484142b20ffcff20d1477f30e0baa0cbe1?apiKey=946bf3455d5f470191c249fabc019131&" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f8423eab9deef6d5552b4fe5bb303c635f7255ef471b4e37844663b0eaefd61?apiKey=946bf3455d5f470191c249fabc019131&", name: "Reynaud Colbert", role: "Co-Founder", socialIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/73d9aac56fc1882cad5cc4705f9b690dcac3857096734e15cb40e437c96c978d?apiKey=946bf3455d5f470191c249fabc019131&" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8dea9d96b7608f7d85223aae0a0d4267dc02fa3ff8d72ab6559af05abcc23463?apiKey=946bf3455d5f470191c249fabc019131&", name: "Arienne Lyon", role: "Managing Director", socialIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccb1b110d24963c9875bf8a0023c68cfc7eaa53dcb49843ab36688d8bbde4156?apiKey=946bf3455d5f470191c249fabc019131&" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e61a3ad84e9d34e084f8cab3dd1a34c12cfdbd5416d5d22301849b9e447d6c3c?apiKey=946bf3455d5f470191c249fabc019131&", name: "Bernard Alexander", role: "Managing Director", socialIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0f8cb5a5356059396814f14ba155865a8b4577e56e34d305a714a51f8c6912c?apiKey=946bf3455d5f470191c249fabc019131&" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/de159c0eaf2ac1152615aa55f561d038e7eccbc3d4313bd7317dbb5ac4029fd5?apiKey=946bf3455d5f470191c249fabc019131&", name: "Christine Jhonson", role: "Managing Director", socialIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/29400dac02576aa92b853cc011dd83797568a6259ce77822d8d22506eae698c8?apiKey=946bf3455d5f470191c249fabc019131&" },
  ];

  const benefits = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5798b2f0eb5b702193cb54c1629d5e0c2e0b8b57f6ec4d4f001c06e6e1a42030?apiKey=946bf3455d5f470191c249fabc019131&", title: "Full Healthcare", description: "We believe in thriving communities and that starts with our team being happy and healthy." },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f62a59e4b07c495a635e7caac7eddba1951a0ba8abea9fa9821b7bd811d149d7?apiKey=946bf3455d5f470191c249fabc019131&", title: "Unlimited Vacation", description: "We believe you should have a flexible schedule that makes space for family, wellness, and fun." },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/615df9d373c9b045f190f0634cd7cb5398ab22970bffb7f0178ab5dde093daa4?apiKey=946bf3455d5f470191c249fabc019131&", title: "Skill Development", description: "We believe in always learning and leveling up our skills. Whether it's a conference or online course." },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0eb85be012525680f3909847bd4db476b32fcab9f506aa1693495ca26d38407c?apiKey=946bf3455d5f470191c249fabc019131&", title: "Team Summits", description: "Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter." },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ec875bdb964ff898379b167ec25e118cdad041a743165206b0680623216b964?apiKey=946bf3455d5f470191c249fabc019131&", title: "Remote Working", description: "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it." },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3d84315a6325959b9c395d2556415bcf9ba78cbb292c624b8da77e61aadcc33?apiKey=946bf3455d5f470191c249fabc019131&", title: "Commuter Benefits", description: "We're grateful for all the time and energy each team member puts into getting to work every day." },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2056320ea873efd234e336314f15029b615f3addcbf39a14a48af486ecc1de7?apiKey=946bf3455d5f470191c249fabc019131&", title: "We give back.", description: "We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two." },
  ];

  return (

    <TransitionWrapper
      inProp={true}
    >
    <div className="flex flex-col bg-white">
      <main>
        <section className="flex flex-col pb-20 w-full bg-slate-50 max-md:max-w-full">
          <div className="flex flex-col self-center mt-11 w-full max-w-[999px] max-md:mt-10 max-md:max-w-full">
            <nav className="text-base leading-6 text-slate-800 max-md:max-w-full">
              <span className="text-slate-500">Home / Companies / </span>Nomad
            </nav>
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f6ea01f18f0db44f713756ea67d0012ffb6df819c476deb9adedd96ac50ba59?apiKey=946bf3455d5f470191c249fabc019131&" alt="Stripe logo" className="shrink-0 max-w-full aspect-square w-[189px] max-md:mt-6" />
                </div>
                <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-start self-stretch my-auto max-md:mt-9 max-md:max-w-full">
                    <div className="flex gap-3">
                      <h2 className="text-5xl font-semibold leading-[52.8px] text-slate-800 max-md:text-4xl">Stripe</h2>
                      <div className="justify-center px-3 py-1 my-auto text-base leading-6 text-center text-indigo-600 border border-indigo-600 border-solid">43 Jobs</div>
                    </div>
                    <a href="https://stripe.com" className="mt-3 text-base font-semibold leading-6 text-indigo-600">https://stripe.com</a>
                    <div className="flex gap-5 justify-between self-stretch mt-6 max-md:flex-wrap">
                      <div className="flex gap-4">
                        <div className="flex justify-center items-center p-2.5 my-auto w-11 h-11 bg-white rounded-[50px]">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a74f0865b1e8a0476abce2073ceccbadd361a64511a430b1f09884cc7e8b0bc3?apiKey=946bf3455d5f470191c249fabc019131&" alt="" className="w-6 aspect-square" />
                        </div>
                        <div className="flex flex-col text-base leading-6">
                          <div className="text-slate-600">Founded</div>
                          <div className="font-semibold text-slate-800">July 31, 2011</div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex justify-center items-center p-2.5 my-auto w-11 h-11 bg-white rounded-[50px]">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdb3057de9ae7f2270edc999b1710752f4c173f0d79f39524a597ec47c1edfa6?apiKey=946bf3455d5f470191c249fabc019131&" alt="" className="w-6 aspect-square" />
                        </div>
                        <div className="flex flex-col text-base leading-6 whitespace-nowrap">
                          <div className="text-slate-600">Employees</div>
                          <div className="font-semibold text-slate-800">4000+</div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex justify-center items-center p-2.5 my-auto w-11 h-11 bg-white rounded-[50px]">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/63e17c9becfeb1e95f13ad6037d26d2864566d21e479b48681fc75d0ca295977?apiKey=946bf3455d5f470191c249fabc019131&" alt="" className="w-6 aspect-square" />
                        </div>
                        <div className="flex flex-col text-base leading-6">
                          <div className="text-slate-600">Location</div>
                          <div className="font-semibold text-slate-800">20 countries</div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex justify-center items-center p-2.5 my-auto w-11 h-11 bg-white rounded-[50px]">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/91fa92b67357b67caa5b7d4cf141009c844efab93be2ab3a427c7ceac8b2ad6c?apiKey=946bf3455d5f470191c249fabc019131&" alt="" className="w-6 aspect-square" />
                        </div>
                        <div className="flex flex-col text-base leading-6">
                          <div className="text-slate-600">Industry</div>
                          <div className="font-semibold text-slate-800">Payment Gateway</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="w-full max-w-[1192px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                  <h2 className="text-3xl font-semibold leading-10 text-slate-800 max-md:max-w-full">Company Profile</h2>
                  <p className="mt-4 text-base leading-7 text-slate-600 max-md:max-w-full">
                    Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe's software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.
                  </p>
                  <h3 className="self-start mt-6 text-3xl font-semibold leading-10 text-slate-800 max-md:max-w-full">Contact</h3>
                  <div className="flex gap-4 self-start mt-4 text-base font-medium leading-6 text-indigo-600 whitespace-nowrap max-md:flex-wrap">
                    <a href="http://b.io/ext_57-" className="flex gap-4 p-2 border border-indigo-600 border-solid">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/df40ac8ee09bc0797c2a3174d8935db8eb833aef6678fde80942fd7c277b7245?apiKey=946bf3455d5f470191c249fabc019131&" alt="" className="shrink-0 self-start w-6 aspect-square" />
                      <span>twitter.com/stripe</span>
                    </a>
                    <a href="http://b.io/ext_58-" className="flex gap-4 p-2 border border-indigo-600 border-solid">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ef6c0ce6b7faf956f184b4e99abb00884477f167ba9ebef1b757af0edb25d15?apiKey=946bf3455d5f470191c249fabc019131&" alt="" className="shrink-0 self-start w-6 aspect-square" />
                      <span>facebook.com/StripeHQ</span>
                    </a>
                  </div>
                  <a href="http://b.io/ext_59-" className="flex gap-4 self-start p-2 mt-4 text-base font-medium leading-6 text-indigo-600 whitespace-nowrap border border-indigo-600 border-solid max-md:flex-wrap">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0211c17eace314fdbd54beee063f9030fc445b4f60a70b78446c3b9bc9bf4b5b?apiKey=946bf3455d5f470191c249fabc019131&" alt="" className="shrink-0 self-start w-6 aspect-square" />
                    <span>linkedin.com/company/stripe</span>
                  </a>
                  <div className="mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow justify-center max-md:mt-3 max-md:max-w-full">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/812d705dffe8f1a1586cda1a3e46dcaba58a6e884d60d2501e7cea825c6fc409?apiKey=946bf3455d5f470191c249fabc019131&" alt="Company office" className="w-full aspect-[0.79] max-md:max-w-full" />
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch max-md:mt-3">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbdb4fd10d1bc2aee27b13de846003e5dc83c027fa379f42957dd9a3c96c657f?apiKey=946bf3455d5f470191c249fabc019131&" alt="Company workspace" className="w-full aspect-[1.35]" />
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a731c6eaa3bf4d8926f394bd08af6df8b463e53a822031e2acbf0c96a3df204e?apiKey=946bf3455d5f470191c249fabc019131&" alt="Company meeting room" className="mt-3 w-full aspect-[1.35]" />
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/de9f40afcf78c3624e6011e2bc65c257b848b44b5f6d7f5681d9da032ef1361b?apiKey=946bf3455d5f470191c249fabc019131&" alt="Company lounge area" className="mt-3 w-full aspect-[1.35]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col pt-2 text-base font-semibold leading-6 text-black max-md:mt-10">
                  <h3 className="self-start text-3xl leading-10 text-slate-800">Tech stack</h3>
                  <p className="mt-6 leading-7 text-slate-600">Learn about the technology and tools that Stripe uses.</p>
                  <div className="flex gap-2.5 pr-14 mt-4 text-slate-800 max-md:pr-5">
                    <div className="flex flex-col p-3">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/20f31bdedcf6d0d7ea3865466e2b7d9b866732684883bfeebf642926d0dec35d?apiKey=946bf3455d5f470191c249fabc019131&" alt="HTML 5 logo" className="self-center aspect-square w-[74px]" />
                      <div className="mt-2.5">HTML 5</div>
                    </div>
                    <div className="flex flex-col items-center p-3">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e6e4ec4e56f69cd49b8a6e0f37fc08577f0e6f81ea0c103b656e0755a4a73d6?apiKey=946bf3455d5f470191c249fabc019131&" alt="CSS 3 logo" className="aspect-square w-[74px]" />
                      <div className="mt-2.5">CSS 3</div>
                    </div>
                    <div className="flex flex-col p-3 whitespace-nowrap">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1902c3f21b220790facd6aadfd320e503e20e7d371b86dc947655ba9d94c4da1?apiKey=946bf3455d5f470191c249fabc019131&" alt="JavaScript logo" className="self-center aspect-[1.12] w-[83px]" />
                      <div className="mt-2.5">JavaScript</div>
                    </div>
                  </div>
                  <div className="flex gap-2.5 pr-14 mt-2 whitespace-nowrap text-slate-800 max-md:pr-5 max-md:mr-2.5">
                    <div className="flex flex-col items-center p-3">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8033ea40074d6be4d2485e63fed15ea54d8f15775ffe8d4f4c9998d0f2a04d5?apiKey=946bf3455d5f470191c249fabc019131&" alt="Ruby logo" className="aspect-square w-[74px]" />
                      <div className="mt-2.5">Ruby</div>
                    </div>
                    <div className="flex flex-col p-3">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/86bf74ab8b8b8437a4cd1af1d56423e6e0ca69e1600b708059fd6c5644869a42?apiKey=946bf3455d5f470191c249fabc019131&" alt="Mixpanel logo" className="self-center aspect-square w-[74px]" />
                      <div className="mt-2.5">Mixpanel</div>
                    </div>
                    <div className="flex flex-col p-3">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/808fc342390bd7313bb09f43ca3529f6c3598138e16cfc5c35cc10f431911c9a?apiKey=946bf3455d5f470191c249fabc019131&" alt="Framer logo" className="self-center aspect-square w-[74px]" />
                      <div className="mt-2.5">Framer</div>
                    </div>
                  </div>
                  <a href="#" className="flex gap-4 pr-8 mt-2 text-center text-indigo-600 max-md:pr-5">
                    <span>View tech stack</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/247d3677732c680ee4f270e0de17e72780a5526fa8c7aeefd90199d2c241fe60?apiKey=946bf3455d5f470191c249fabc019131&" alt="" className="shrink-0 self-start w-6 aspect-square" />
                  </a>
                  <hr className="shrink-0 mt-4 h-px border border-solid bg-zinc-200 border-zinc-200" />
                  <h3 className="mt-10 text-3xl leading-10 text-slate-800">Office Location</h3>
                  <p className="mt-4 text-slate-600">Stripe offices spread across 20 countries</p>
                  <div className="flex gap-3 self-start mt-6">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bde60e6e83d38ab58b49a2e74ac3649c0ff3e0e0e1b49eeffc543a29a29308ce?apiKey=946bf3455d5f470191c249fabc019131&" alt="United States flag" className="shrink-0 w-10 aspect-[1.33]" />
                    <div className="my-auto">United States</div>
                  </div>
                  <div className="flex gap-3 self-start mt-4 whitespace-nowrap">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/61efc3ec217df65e8b40219d36d24913e049a88c3b07f683e4fbd742a883d52a?apiKey=946bf3455d5f470191c249fabc019131&" alt="England flag" className="shrink-0 w-10 aspect-[1.33]" />
                    <div className="my-auto">England</div>
                  </div>
                  <div className="flex gap-3 self-start mt-4 whitespace-nowrap">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dacaaae37cf67584aa3a095035da1072385ede2ff4e58d5ddf8308ee078f1e9?apiKey=946bf3455d5f470191c249fabc019131&" alt="Japan flag" className="shrink-0 w-10 aspect-[1.33]" />
                    <div className="my-auto">Japan</div>
                  </div>
                  <div className="flex gap-3 self-start mt-4 whitespace-nowrap">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c9b09515afd0d7ec95edccd00a0034d32606cf0e0650eda507e04180cb41aa7?apiKey=946bf3455d5f470191c249fabc019131&" alt="Australia flag" className="shrink-0 w-10 aspect-[1.33]" />
                    <div className="my-auto">Australia</div>
                  </div>
                  <div className="flex gap-3 self-start mt-4 whitespace-nowrap">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/42787ad94c99e7dc4abe97121576826e91202d8eea3ec918ba55f61fb60ee7c4?apiKey=946bf3455d5f470191c249fabc019131&" alt="China flag" className="shrink-0 w-10 aspect-[1.33]" />
                    <div className="my-auto">China</div>
                  </div>
                  <a href="#" className="flex gap-4 self-start mt-6 text-center text-indigo-600">
                    <span>View countries</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/247d3677732c680ee4f270e0de17e72780a5526fa8c7aeefd90199d2c241fe60?apiKey=946bf3455d5f470191c249fabc019131&" alt="" className="shrink-0 self-start w-6 aspect-square" />
                  </a>
                  <hr className="shrink-0 mt-6 h-px border border-solid bg-zinc-200 border-zinc-200" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="shrink-0 self-center max-w-full h-px bg-zinc-200 w-[1192px]" />
        <section className="flex justify-center items-center px-16 py-20 w-full bg-white rounded-lg max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1192px] max-md:max-w-full">
            <div className="flex gap-5 justify-between font-semibold max-md:flex-wrap max-md:max-w-full">
              <h2 className="text-3xl leading-10 text-slate-800">Team</h2>
              <a href="#" className="my-auto text-base leading-6 text-center text-indigo-600">See all (47)</a>
            </div>
            <div className="flex gap-4 mt-3 text-center leading-[160%] max-md:flex-wrap">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>
        </section>
        <hr className="shrink-0 self-center max-w-full h-px bg-zinc-200 w-[1192px]" />
        <section className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1192px] max-md:max-w-full">
            <h2 className="text-3xl font-semibold leading-10 text-slate-800 max-md:max-w-full">Perks & Benefits</h2>
            <p className="mt-2 text-base leading-6 text-slate-600 max-md:max-w-full">This job comes with several perks and benefits</p>
            <div className="mt-6 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 max-md:flex-col max-md:gap-0">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                    <Benefit {...benefit} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    </TransitionWrapper>
  );
};

export default CompanyDetail;