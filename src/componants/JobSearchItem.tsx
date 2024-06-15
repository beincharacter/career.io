import React from 'react';

type JobSearchItemProps = {
  iconSrc: string;
  description: string;
  inputId?: string;
  placeholder: string;
  hasDropdownIcon?: boolean;
};

const JobSearchItem: React.FC<JobSearchItemProps> = ({
  iconSrc,
  description,
  inputId,
  placeholder,
  hasDropdownIcon,
}) => (
  <div className="flex flex-1 gap-4 px-4 text-slate-500">
    <img src={iconSrc} alt={description} className="shrink-0 my-auto w-6 aspect-square" />
    <div className="flex flex-col flex-1 justify-between pt-5">
      {inputId ? (
        <>
          <label htmlFor={inputId} className="sr-only">
            {description}
          </label>
          <input
            id={inputId}
            placeholder={placeholder}
            aria-label={description}
            className="bg-transparent border-0 px-0 py-2 text-slate-800 placeholder-slate-400 focus:ring-0"
          />
        </>
      ) : (
        <span className="flex gap-5 justify-between">
          <span>{placeholder}</span>
          {hasDropdownIcon && (
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ceaea7452a10fb9ba305e14e244e5f9f93d5d70bd93dfa98ef7c51aae884a18?apiKey=946bf3455d5f470191c249fabc019131&"
              alt=""
              className="shrink-0 my-auto w-4 aspect-square"
            />
          )}
        </span>
      )}
      <div className="shrink-0 mt-2.5 h-px bg-zinc-200" />
    </div>
  </div>
);

export default JobSearchItem;