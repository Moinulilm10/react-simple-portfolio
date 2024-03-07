import githubIcon from "../../assets/github-icon.svg";
import linkIcon from "../../assets/share-icon.svg";
import "../../styles/Project.css";

const Project = () => {
  return (
    <div id="feature-project" className="project-section">
      <div>
        <h1 className="flex justify-center text-[36px] font-normal">Project</h1>
      </div>
      <section className="feature-project-flex">
        <div className="box"></div>

        <div className="feature-project-text">
          <h3 className="text-[18px] font-normal">Project Name</h3>
          <p className="text-[14px] font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
            architecto debitis expedita, necessitatibus nulla tempore officia
            sed placeat minima earum temporibus magni.
          </p>
          <hr />
          <div className="flex flex-row gap-2 text-[12px]">
            <span>Html</span>
            <span>CSS</span>
            <span>JS</span>
          </div>
          <div className="flex flex-row gap-2">
            <img width="15px" src={githubIcon} alt="github" />
            <a href="#">
              <img width="15px" height="15px" src={linkIcon} alt="share-icon" />
            </a>
          </div>
        </div>
      </section>

      <section className="feature-project-flex">
        <div className="feature-project-text">
          <h3 className="text-[18px] font-normal">Project Name</h3>
          <p className="text-[14px] font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
            architecto debitis expedita, necessitatibus nulla tempore officia
            sed placeat minima earum temporibus magni.
          </p>
          <hr />
          <div className="flex flex-row gap-2 text-[12px]">
            <span>Html</span>
            <span>CSS</span>
            <span>JS</span>
          </div>
          <div className="flex flex-row gap-2">
            <img width="15px" src={githubIcon} alt="github" />
            <a href="#">
              <img width="15px" height="15px" src={linkIcon} alt="share" />
            </a>
          </div>
        </div>
        <div className="box"></div>
      </section>
    </div>
  );
};

export default Project;
