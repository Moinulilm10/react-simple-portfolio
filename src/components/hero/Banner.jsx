import emoji from "react-easy-emoji";
import { RxDoubleArrowDown } from "react-icons/rx";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Banner = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-8 custom-padding mt-[185px]">
      <h1 className="text-[25px] md:text-[72px]  dark:bg-primary/[7%] font-normal leading-[43.57px] md:leading-[79.2px]">
        Hi, I&apos;m Moinul Islam{" "}
        <span className="wave-emoji">{emoji("👋")}</span>
      </h1>
      <p className="text-[20px] md:text-[36px] dark:bg-primary/[7%] leading-[29.05px] font-light">
        I design and build things.
      </p>
      <RxDoubleArrowDown
        className="w-8 h-8 mt-10 cursor-pointer animate-bounce"
        onClick={handleScrollDown}
      />
      <Link to="/quotes">
        <button className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
          Show Quotes
        </button>
      </Link>
    </div>
  );
};

export default Banner;
