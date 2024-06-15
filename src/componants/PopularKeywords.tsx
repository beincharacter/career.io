import React from 'react';

type PopularKeywordsProps = {
  keywords: string[];
};

const PopularKeywords: React.FC<PopularKeywordsProps> = ({ keywords }) => (
  <div className="mt-4 text-gray-800 max-md:max-w-full text-[14px]">
    Popular:{' '}
    {keywords.map((keyword, index) => (
      <span key={index} className="text-[14px]">
        {keyword}
        {index < keywords.length - 1 && ', '}
      </span>
    ))}
  </div>
);

export default PopularKeywords;