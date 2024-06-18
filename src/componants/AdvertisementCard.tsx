import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ children, className, onClick, type = 'button' }) => (
    <button type={type} className={`px-6 py-3 font-bold text-center ${className}`} onClick={onClick}>
        {children}
    </button>
);

export const AdvertisementCard: React.FC = () => (
    <section className="flex justify-center w-full pt-20">

        <section className="flex overflow-hidden relative text-white flex-col items-start px-20 mx-20 py-20 w-full fill-indigo-600 max-w-[1350px] max-md:px-5 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a2cff666f585c87871a78af498e75810290ad0b0dcc5e5effed627eec78e35f?apiKey=946bf3455d5f470191c249fabc019131&" alt="" className="object-cover absolute inset-0 size-full" />
            <h1 className="relative mt-3.5 text-5xl font-semibold leading-[53px] w-[364px] max-md:text-4xl max-md:leading-[49px]">
                Start posting jobs today
            </h1>
            <p className="relative mt-6 font-medium">Start posting jobs for only $10.</p>
            <Button className="mt-6 mb-3 relative text-indigo-600 bg-white max-md:px-5">Sign Up For Free</Button>
        </section>
    </section>
);
