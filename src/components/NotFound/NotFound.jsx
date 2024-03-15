import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/notfoundimage.png";

const NotFoundPage = () => {
  return (
    <div className="w-full h-full bg-[#ffffff]">
      <div className="flex flex-col items-center justify-center">
        <img src={NotFoundImage} alt="not-found-image" />
        <h3 className="text-[30px] font-semibold text-[#ffff]">
          <Link className="hover:border-b-2" to="/">
            Back to home page
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default NotFoundPage;
