import "../../styles/Experience.css";

const Experience = () => {
  return (
    <div id="experience" className="experience-main-div">
      <div>
        <h1 className="flex justify-center text-[36px] font-normal">
          Experience
        </h1>
      </div>

      <section className="flex-container-experience">
        <div className="flex-container-experience-div-1">
          <h3 className="text-[12px] md:text-[16px] font-normal">
            Frontend Engineer
          </h3>
          <p className="text-[14px]">Abc inc.</p>
          <hr className="mt-4" />
          <p className="text-[12px]">Nov 2023 - Jan 2024</p>
        </div>
        <div className="vertical1"></div>

        <ul className="flex-container-experience-ul-1">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. libero,
            incidunt nobis fuga repudiandae sunt! Dolorem, iure odit!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. libero,
            incidunt nobis fuga repudiandae sunt! Dolorem, iure odit!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. libero,
            incidunt nobis fuga repudiandae sunt! Dolorem, iure odit!
          </li>
        </ul>
      </section>

      {/* <section className="flex-container-experience">
        <ul className="flex-container-experience-ul-2">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. libero,
            incidunt nobis fuga repudiandae sunt! Dolorem, iure odit!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. libero,
            incidunt nobis fuga repudiandae sunt! Dolorem, iure odit!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. libero,
            incidunt nobis fuga repudiandae sunt! Dolorem, iure odit!
          </li>
        </ul>
        <div className="flex-container-experience-div-2">
          <h3 className="text-[12px] md:text-[16px] font-normal">
            Frontend Engineer
          </h3>
          <p className="text">Abc inc.</p>
          <hr className="mt-4" />
          <p>Apr 2018 - Dec 2022</p>
        </div>
        <div className="vertical2"></div>
      </section> */}
    </div>
  );
};

export default Experience;

//styleName: heading-4;
