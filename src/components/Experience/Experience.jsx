import "./Experience.scss";
import diceus_icon from "../../assets/diceus_logo.png";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h1 className="experience-title">Experience</h1>

      <div className="experience-card">
        <div className="company-logo">
          <img src={diceus_icon} alt="DICEUS" />
        </div>

        <div className="company-info">
          <div className="company-header">
            <div>
              <h1>DICEUS</h1>
              <p>Frontend Developer</p>
            </div>

            <p>May 2025 - May 2026</p>
          </div>

          <ul>
            <li>
              Built responsive and reusable UI components.
            </li>
            <li>
              Delivered frontend features according to project requirements.
            </li>
            <li>
              Investigated, debugged, and resolved software defects.
            </li>
            <li>
              Developed new application modules and enhanced existing ones.
            </li>
            <li>
              Reviewed team contributions to ensure code quality and consistency.
            </li>
          </ul>

          <div className="tech-stack">
            <span>Angular</span>
            <span>TypeScript</span>
            <span>RxJS</span>
            <span>SCSS</span>
            <span>Angular Material</span>
            <span>StoryBook</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;