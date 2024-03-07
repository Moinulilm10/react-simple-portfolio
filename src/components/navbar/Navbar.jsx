import {
  Bars3Icon,
  MoonIcon,
  PaperAirplaneIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className="sticky mx-auto max-w-7xl">
        <div className="flex justify-between w-5/6 mx-auto ">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-16 my-12">
            {/* logo */}
            <div>
              <a
                href="/"
                className="flex items-center gap-1 font-bold text-gray-700 "
              >
                <PaperAirplaneIcon className="w-6 h-6 text-primary" />
                <span>Mi.</span>
              </a>
            </div>
            {/* primary */}
            <div className="hidden gap-8 lg:flex ">
              <a href="#" className="">
                Home
              </a>
              <a href="#">About</a>
              <a href="#">Experience</a>
              <a href="#">Project</a>
              <a href="#">Contact </a>
            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            <div className="items-center hidden gap-10 xs:flex">
              <div className="items-center hidden gap-2 lg:flex">
                <MoonIcon className="w-6 h-6" />
                <SunIcon className="w-6 h-6" />
              </div>
              <div>
                <button className="">Free Trial</button>
              </div>
            </div>
            {/* Mobile navigation toggle */}
            <div className="flex items-center lg:hidden">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            <a href="#">About</a>
            <a href="#">Experience</a>
            <a href="#">Project</a>
            <a href="#">Contact </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
