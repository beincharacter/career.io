import React from 'react';

type ImageComponentProps = {
  mainSrc: string;
  secondarySrc: string;
  alt: string;
};

export const ImageComponent: React.FC<ImageComponentProps> = ({ mainSrc, secondarySrc, alt }) => (
  <div className="flex overflow-hidden relative flex-col justify-center items-center w-8 aspect-square">
    <img loading="lazy" src={mainSrc} alt={alt} className="object-cover absolute inset-0 size-full" />
    <img loading="lazy" src={secondarySrc} alt={alt} className="w-full aspect-square" />
  </div>
);