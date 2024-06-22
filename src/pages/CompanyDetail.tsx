import * as React from "react";

type InfoItemProps = {
  icon: string;
  label: string;
  value: string;
};

export const CompanyDetail = () => {
    return (
        <>
        <HeroHeader />
        </>
    )
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => (
  <div className="flex gap-4">
    <div className="flex justify-center items-center p-2.5 my-auto w-11 h-11 bg-white rounded-[50px]">
      <img loading="lazy" src={icon} alt="" className="w-6 aspect-square" />
    </div>
    <div className="flex flex-col text-base leading-6">
      <div className="text-slate-600">{label}</div>
      <div className="font-semibold text-slate-800">{value}</div>
    </div>
  </div>
);

const HeroHeader: React.FC = () => {
  const companyInfo = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a74f0865b1e8a0476abce2073ceccbadd361a64511a430b1f09884cc7e8b0bc3?apiKey=946bf3455d5f470191c249fabc019131&", label: "Founded", value: "July 31, 2011" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdb3057de9ae7f2270edc999b1710752f4c173f0d79f39524a597ec47c1edfa6?apiKey=946bf3455d5f470191c249fabc019131&", label: "Employees", value: "4000+" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/63e17c9becfeb1e95f13ad6037d26d2864566d21e479b48681fc75d0ca295977?apiKey=946bf3455d5f470191c249fabc019131&", label: "Location", value: "20 countries" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/91fa92b67357b67caa5b7d4cf141009c844efab93be2ab3a427c7ceac8b2ad6c?apiKey=946bf3455d5f470191c249fabc019131&", label: "Industry", value: "Payment Gateway" },
  ];

  return (
    <div className="flex flex-col justify-center">
      <main className="flex flex-col pb-20 w-full bg-slate-50 max-md:max-w-full">
        <section className="flex flex-col self-center mt-11 w-full max-w-[999px] max-md:mt-10 max-md:max-w-full">
          <nav className="text-base leading-6 text-slate-800 max-md:max-w-full">
            <a href="#" className="text-slate-500">Home</a> /
            <a href="#" className="text-slate-500"> Companies</a> /
            <span> Nomad</span>
          </nav>
          <article className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f6ea01f18f0db44f713756ea67d0012ffb6df819c476deb9adedd96ac50ba59?apiKey=946bf3455d5f470191c249fabc019131&" alt="Stripe company logo" className="shrink-0 max-w-full aspect-square w-[189px] max-md:mt-6" />
              </div>
              <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start self-stretch my-auto max-md:mt-9 max-md:max-w-full">
                  <div className="flex gap-3">
                    <h2 className="text-5xl font-semibold leading-[52.8px] text-slate-800 max-md:text-4xl">
                      Stripe
                    </h2>
                    <span className="justify-center px-3 py-1 my-auto text-base leading-6 text-center text-indigo-600 border border-indigo-600 border-solid">
                      43 Jobs
                    </span>
                  </div>
                  <a href="https://stripe.com" className="mt-3 text-base font-semibold leading-6 text-indigo-600">
                    https://stripe.com
                  </a>
                  <div className="flex gap-5 justify-between self-stretch mt-6 max-md:flex-wrap">
                    {companyInfo.map((item, index) => (
                      <InfoItem key={index} {...item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};