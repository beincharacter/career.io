import { NavItem } from './NavItem';
import { ImageComponent } from './ImageComponent';

export function Header() {
  return (
    <header className="flex justify-center px-24 items-center w-full max-md:max-w-full">
      <nav className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-center max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-2 py-0.5 my-auto">
            <ImageComponent
              mainSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fb2519901c303d7ddd84d96d21babc60e82a484fec5af3c9b76659348c2344be?apiKey=946bf3455d5f470191c249fabc019131&"
              secondarySrc="https://cdn.builder.io/api/v1/image/assets/TEMP/cbab65d9c4295ec5cdfdc76a81cb8df841e29d1a6d2552fd2e7100782bdd1d96?apiKey=946bf3455d5f470191c249fabc019131&"
              alt=""
            />
            <h1 className="flex-auto text-2xl font-bold tracking-tight leading-9 text-slate-800">JobHuntly</h1>
          </div>
          <div className="flex gap-4 justify-center items-start pt-6 text-base font-medium leading-6 text-slate-600">
            <NavItem>Find Jobs</NavItem>
            <NavItem>Browse Companies</NavItem>
          </div>
        </div>
        <div className="flex gap-4 justify-between py-3.5 pl-6 text-base font-bold leading-6 text-center">
          <a href="/" className="my-auto text-indigo-600">Login</a>
          <a href="/" className="justify-center px-6 py-3 text-white bg-indigo-600 max-md:px-5">Sign Up</a>
        </div>
      </nav>
    </header>
  );
}