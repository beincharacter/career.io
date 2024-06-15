import * as React from "react";

interface CompanyLogoProps {
  src: string;
  alt: string;
  aspectRatio: string;
  width: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ src, alt, aspectRatio, width }) => (
  <img loading="lazy" src={src} alt={alt} className={`shrink-0 max-w-full ${aspectRatio}`} style={{ width }} />
);

const CarouselComponent: React.FC = () => {
  const companies = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/56563d017030a3ede8202147fb09263732306dd7e15fad14f54dd8037a47dbd8?apiKey=946bf3455d5f470191c249fabc019131&", alt: "Company 1 logo", aspectRatio: "aspect-[3.85]", width: "[154px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/67f3f08ee66c6b64f4e2c5b5e8c2ccf348d87df10ae7486dd233f5339173963e?apiKey=946bf3455d5f470191c249fabc019131&", alt: "Company 2 logo", aspectRatio: "aspect-[2.56]", width: "[82px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a30688e63fbab46e91d12167ec6a861c6d169afd1c3e5f4babedad50ba128d6?apiKey=946bf3455d5f470191c249fabc019131&", alt: "Company 3 logo", aspectRatio: "aspect-[7.69]", width: "[183px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b014237c00ee61e88a856d0782e8724e3cbb1bf14b978bee3ffb8d0350e3a0ff?apiKey=946bf3455d5f470191c249fabc019131&", alt: "Company 4 logo", aspectRatio: "aspect-[4.17]", width: "[116px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b05b9a1a9363f1a3b9842be50df994608c934dd3de5128341186f524ae00ee57?apiKey=946bf3455d5f470191c249fabc019131&", alt: "Company 5 logo", aspectRatio: "aspect-[3.33]", width: "[108px]" }
  ];

  return (
    <section className="flex px-24 justify-center items-center py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full  max-md:max-w-full">
        <p className="text-lg leading-7 text-gray-400 max-md:max-w-full">Companies we helped grow</p>
        <div className="flex gap-5 justify-between items-start mt-8 max-md:flex-wrap max-md:max-w-full">
          {companies.map((company, index) => (
            <CompanyLogo key={index} {...company} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselComponent;