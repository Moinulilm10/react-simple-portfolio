import emoji from "react-easy-emoji";
import { RxDoubleArrowDown } from "react-icons/rx";
import "../../styles/Navbar.css";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-8 p-28 md:p-56 bg-[#1f1f]">
      <h1 className="text-[36px] md:text-[72px] text-[#1F1F1F] font-normal leading-[43.57px] md:leading-[79.2px]">
        Hi, I&apos;m Moinul Islam{" "}
        <span className="wave-emoji">{emoji("👋")}</span>
      </h1>
      <p className="text-[20px] md:text-[36px] text-[#000000] leading-[29.05px] font-light">
        I design and build things.
      </p>
      <RxDoubleArrowDown className="w-8 h-8 mt-10 cursor-pointer" />
    </div>
  );
};

export default Banner;

// 150px, 255px, 150px, 255px
