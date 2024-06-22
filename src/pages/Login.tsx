import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransitionWrapper from '../componants/PageTransitionWrapper';

type LoginButtonProps = {
  icon: string;
  text: string;
};

const LoginButton: React.FC<LoginButtonProps> = ({ icon, text }) => (
  <button className="flex justify-center items-center px-4 py-3 w-full font-bold text-center text-indigo-600 border border-indigo-200 border-solid leading-[160%]">
    <div className="flex gap-2.5">
      <img loading="lazy" src={icon} alt="" className="shrink-0 my-auto w-5 aspect-square" />
      <span>{text}</span>
    </div>
  </button>
);

type InputFieldProps = {
  label: string;
  placeholder: string;
  type?: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, type = 'text' }) => (
  <div className="mb-6">
    <label className="block mb-1 font-semibold leading-[160%] text-slate-600">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 text-gray-400 bg-white border border-solid border-zinc-200 leading-[160%]"
    />
  </div>
);

const Login: React.FC = () => {
  const [role, setRole] = useState<'jobSeeker' | 'company'>('jobSeeker');
  const [inProp, setInProp] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setInProp(false);
    setTimeout(() => navigate('/'), 500); // Adjust timeout to match the CSS transition duration
  };

  return (
    <PageTransitionWrapper inProp={inProp}>
      <div className="bg-white absolute top-0 left-0 h-screen w-screen flex justify-center items-center">
        <button onClick={handleClose} className="absolute top-4 left-4 p-2 text-gray-600 hover:text-gray-900">
          &times;
        </button>
        <section className="flex flex-col justify-center items-center ml-5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto text-base max-md:mt-10 max-md:max-w-full">
            <nav className="flex gap-0 justify-center self-center font-semibold text-indigo-600 leading-[160%]">
              <button
                className={`justify-center px-3 py-2 ${role === 'jobSeeker' ? 'bg-violet-100' : 'bg-white'}`}
                onClick={() => setRole('jobSeeker')}
              >
                Job Seeker
              </button>
              <button
                className={`justify-center px-3 py-2 whitespace-nowrap ${role === 'company' ? 'bg-violet-100' : 'bg-white'}`}
                onClick={() => setRole('company')}
              >
                Company
              </button>
            </nav>
            <h2 className="self-center mt-6 text-3xl font-semibold leading-10 text-center text-gray-800">
              Welcome Back, {role === 'jobSeeker' ? 'Job Seeker' : 'Company'}
            </h2>
            <LoginButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/658919a91bc4a1aeac93a88e3d5d8b4e8b0b1fbdeb08bcd4217797c2acfd7964?apiKey=946bf3455d5f470191c249fabc019131&" text="Login with Google" />
            <div className="flex gap-5 items-center py-1.5 mt-6 text-center text-gray-800 leading-[160%] max-md:flex-wrap">
              <div className="shrink-0 self-stretch my-auto h-px border border-solid bg-zinc-200 border-zinc-200 w-[109px]" />
              <div className="flex-auto self-stretch">Or login with email</div>
              <div className="shrink-0 self-stretch my-auto h-px border border-solid bg-zinc-200 border-zinc-200 w-[184px]" />
            </div>
            <form>
              <InputField label="Email Address" placeholder="Enter email address" type="email" />
              <InputField label="Password" placeholder="Enter password" type="password" />
              <label className="flex gap-4 items-center mt-6 leading-[160%] text-slate-600">
                <input type="checkbox" className="w-6 h-6 border-2 border-indigo-600 border-solid" />
                <span>Remember me</span>
              </label>
              <button type="submit" className="w-full px-6 py-3 mt-6 font-bold text-center text-white whitespace-nowrap bg-indigo-600 leading-[160%]">
                Login
              </button>
            </form>
            <p className="flex gap-2 mt-6 max-md:flex-wrap">
              <span className="text-gray-800 leading-[160%]">Don't have an account?</span>
              <a href="#" className="font-semibold text-center text-indigo-600 leading-[150%]">Sign Up</a>
            </p>
          </div>
        </section>
      </div>
    </PageTransitionWrapper>
  );
};

export default Login;
