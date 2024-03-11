import aboutImage from "../../assets/about.png";
import "../../styles/About.css";

const About = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-[50px] items-center bg-[#F2F2F2] custom-padding">
      <div className="">
        <h3 className="text-[30px] md:text-[36px] font-normal leading-[36px] md:leading-[44px]">
          About Me
        </h3>
      </div>
      <div className="flex items-center flex-col-reverse gap-[30px] md:gap-[79px] md:flex-row">
        <div className=" lg:w-[551px] lg:h-[351px]">
          <p className="text-sm font-normal leading-6 text-left md:leading-8 md:text-base ">
            I&apos;m a passionate front-end developer with a strong foundation
            in React.js, Tailwind CSS, and Next.js. I bring a blend of technical
            expertise and creative flair to the table, constantly seeking to
            craft user-centric and visually appealing web experiences.
            <br />
            <br />
            Though I&apos;m early in my journey, I&apos;ve already gained
            valuable experience through a 3-month internship, where I honed my
            skills in building responsive and interactive UIs. I&apos;m a fast
            learner and highly motivated, eager to contribute to challenging
            projects and continue pushing my abilities as a developer.
          </p>
        </div>
        <div>
          <img className="about-img" src={aboutImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
