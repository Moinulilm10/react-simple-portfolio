import { useContext, useState } from "react";
import moon from "../../assets/icons/moon.svg";
import sun from "../../assets/icons/sun.svg";
import { ThemeContext } from "../../context";
import "../../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="sticky flex flex-wrap items-center justify-between p-10 ">
      <div className="flex items-center flex-shrink-0 mr-6  dark:bg-primary/[7%] lg:mr-20 md:ml-44">
        <p>Portfolio</p>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow justify-between lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-lg lg:flex-row md:ml-[110px] nav-link-list">
          <a
            href="#"
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 text-white-200 md:ml-[25px]"
          >
            About
          </a>
          <a
            href="#"
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 text-white-200 md:ml-[25px]"
          >
            Experience
          </a>
          <a
            href="#"
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 text-white-200 md:ml-[25px]"
          >
            Projects
          </a>
          <a
            href="#"
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 text-white-200 md:ml-[25px]"
          >
            Contact
          </a>
        </div>
        <div className="flex gap-2 mt-2 md:mr-24 md:mt-0">
          <button className="inline-flex items-center px-4 py-2 text-sm dark:bg-primary/[7%] border rounded hover:bg-[#dfdfdf] hover:border-none">
            Hire me
          </button>
          <button className="inline-flex items-center px-4 py-2 text-sm  dark:bg-primary/[7%] border rounded hover:bg-[#dfdfdf] hover:border-none">
            Resume
          </button>
          <div className=" ml-8 dark:bg-primary/[7%] bg-primary/20 rounded p-2">
            <a href="#" onClick={() => setDarkMode((darkMode) => !darkMode)}>
              <img
                src={darkMode ? sun : moon}
                width="25"
                height="25"
                alt="moon"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
