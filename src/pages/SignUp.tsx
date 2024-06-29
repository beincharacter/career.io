import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TransitionWrapper from '../componants/TransitionWrapper';
import { auth, provider, signInWithPopup } from '../Firebase';

type UserData = {
  email: string;
  password: string;
  login_type: 'manual' | 'google';
  createdAt: string;
  updatedAt: string;
  name: string;
  user_type: 'organisation' | 'candidate';
}

type InputFieldProps = {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, type = 'text', value, onChange }) => (
  <div className="mb-6">
    <label className="block mb-1 font-semibold leading-[160%] text-slate-600">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 text-gray-400 bg-white border border-solid border-zinc-200 leading-[160%]"
    />
  </div>
);

const Signup: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    email: '',
    password: '',
    login_type: 'manual',
    createdAt: '',
    updatedAt: '',
    name: '',
    user_type: 'candidate'
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inProp, setInProp] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setInProp(false);
    setTimeout(() => navigate('/'), 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    
    const now = new Date().toISOString();
    const finalUserData = {
      ...userData,
      createdAt: now,
      updatedAt: now
    };

    console.log("Registering user:", finalUserData);
    // Here you would typically send this data to your backend or Firebase
    // For now, we'll just log it and navigate
    navigate("/dashboard/organization");
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const now = new Date().toISOString();
      const googleUserData: UserData = {
        email: result.user.email || '',
        password: '',
        login_type: 'google',
        createdAt: now,
        updatedAt: now,
        name: result.user.displayName || '',
        user_type: userData.user_type
      };
      console.log("Google Sign Up:", googleUserData);
      // Here you would typically send this data to your backend
      navigate("/dashboard/organization");
    } catch (error) {
      console.error("Error logging in with Google: ", error);
    }
  };

  return (
    <TransitionWrapper inProp={inProp}>
      <div className="bg-white absolute top-0 left-0 h-screen w-screen flex justify-center items-center">
        <button onClick={handleClose} className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900 text-[30px]">
          &times;
        </button>
        <section className="flex flex-col justify-center items-center ml-5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto text-base max-md:mt-10 max-md:max-w-full">
            <nav className="flex gap-0 justify-center self-center font-semibold text-indigo-600 leading-[160%] pb-4">
              <button
                className={`justify-center px-3 py-2 ${userData.user_type === 'candidate' ? 'bg-violet-100' : 'bg-white'}`}
                onClick={() => setUserData(prev => ({ ...prev, user_type: 'candidate' }))}
              >
                Job Seeker
              </button>
              <button
                className={`justify-center px-3 py-2 whitespace-nowrap ${userData.user_type === 'organisation' ? 'bg-violet-100' : 'bg-white'}`}
                onClick={() => setUserData(prev => ({ ...prev, user_type: 'organisation' }))}
              >
                Company
              </button>
            </nav>

            <button className="flex justify-center items-center px-4 py-3 w-full font-bold text-center text-indigo-600 border border-indigo-200 border-solid leading-[160%]"
              onClick={handleGoogleSignUp}
            >
              <div className="flex gap-2.5">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/658919a91bc4a1aeac93a88e3d5d8b4e8b0b1fbdeb08bcd4217797c2acfd7964?apiKey=946bf3455d5f470191c249fabc019131&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
                <span>Sign Up with Google</span>
              </div>
            </button>

            <div className="flex items-center py-1.5 mt-6 text-center text-gray-800 leading-[160%] max-md:flex-wrap">
              <div className="shrink-0 self-stretch my-auto h-px border border-solid bg-black border-black w-full" />
            </div>
            <form onSubmit={handleRegister}>
              <InputField label="Name" placeholder="Enter your name" value={userData.name} onChange={handleInputChange} />
              <InputField label="Email Address" placeholder="Enter email address" type="email" value={userData.email} onChange={handleInputChange} />
              <InputField label="Password" placeholder="Enter password" type="password" value={userData.password} onChange={handleInputChange} />
              <InputField label="Confirm Password" placeholder="Confirm password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              <label className="flex gap-4 items-center mt-6 leading-[160%] text-slate-600">
                <input type="checkbox" className="w-6 h-6 border-2 border-indigo-600 border-solid" />
                <span>I agree to the terms and conditions</span>
              </label>
              <button type="submit" className="w-full px-6 py-3 mt-6 font-bold text-center text-white whitespace-nowrap bg-indigo-600 leading-[160%]">
                Sign Up
              </button>
            </form>
            <p className="flex gap-2 mt-6 max-md:flex-wrap">
              <span className="text-gray-800 leading-[160%]">Already have an account?</span>
              <button className="font-semibold text-center text-indigo-600 leading-[150%]" onClick={() => navigate("/auth/login")}>Login</button>
            </p>
          </div>
        </section>
      </div>
    </TransitionWrapper>
  );
};

export default Signup;