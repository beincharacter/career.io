import React, { useState, useEffect, useRef, useTransition } from 'react';
import { Link } from 'react-router-dom';

interface ImageComponentProps {
  mainSrc: string;
  secondarySrc: string;
  alt: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ mainSrc, secondarySrc, alt }) => (
  <img src={mainSrc} srcSet={`${mainSrc} 1x, ${secondarySrc} 2x`} alt={alt} />
);

interface NavItemProps {
  path: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ path, children, onClick }) => (
  <Link to={path} className="hover:text-indigo-600 transition-colors" onClick={onClick}>
    {children}
  </Link>
);

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  if (isPending) {
    console.log('Transition is pending...');
  }

  const toggleMenu = () => {
    startTransition(() => {
      setIsMenuOpen(!isMenuOpen);
    });
  };

  const closeMenu = () => {
    startTransition(() => {
      setIsMenuOpen(false);
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && event.target instanceof Node && !dropdownRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="relative flex justify-center px-4 md:px-24 py-4 items-center w-full">
      <nav className="flex gap-5 justify-between w-full max-w-7xl">
        <div className="flex gap-5 justify-center items-center">
          <div className="flex gap-2 py-0.5 cursor-pointer">
            <Link to="/">
              <ImageComponent
                mainSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fb2519901c303d7ddd84d96d21babc60e82a484fec5af3c9b76659348c2344be?apiKey=946bf3455d5f470191c249fabc019131&"
                secondarySrc="https://cdn.builder.io/api/v1/image/assets/TEMP/cbab65d9c4295ec5cdfdc76a81cb8df841e29d1a6d2552fd2e7100782bdd1d96?apiKey=946bf3455d5f470191c249fabc019131&"
                alt=""
              />
            </Link>
            <h1 className="text-2xl font-bold tracking-tight leading-9 text-slate-800">carrer.io</h1>
          </div>
          <div className="hidden md:flex gap-4 justify-center items-start pt-6 text-base font-medium leading-6 text-slate-600">
            <NavItem path="/find-jobs">Find Jobs</NavItem>
            <NavItem path="/find-companies">Browse Companies</NavItem>
          </div>
        </div>
        <div className="hidden md:flex gap-4 justify-between py-3.5 pl-6 text-base font-bold leading-6 text-center">
          <Link to="/auth/login" className="my-auto text-indigo-600">Login</Link>
          <Link to="/auth/signup" className="justify-center px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">Sign Up</Link>
        </div>
        <button
          className="md:hidden text-slate-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      <div 
        ref={dropdownRef}
        className={`absolute top-full left-0 right-0 bg-white z-20 shadow-lg md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          transitionProperty: 'max-height, opacity',
          transitionDuration: '300ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="py-4 px-4">
          <div className="flex flex-col gap-4 text-base font-medium leading-6 text-slate-600">
            <NavItem path="/find-jobs" onClick={closeMenu}>Find Jobs</NavItem>
            <NavItem path="/find-companies" onClick={closeMenu}>Browse Companies</NavItem>
          </div>
          <div className="flex flex-col gap-4 mt-4 text-base font-bold leading-6">
            <Link to="/auth/login" className="text-indigo-600 hover:text-indigo-700 transition-colors" onClick={closeMenu}>Login</Link>
            <Link to="/auth/signup" className="justify-center px-6 py-3 text-white bg-indigo-600 text-center rounded-md hover:bg-indigo-700 transition-colors" onClick={closeMenu}>Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;