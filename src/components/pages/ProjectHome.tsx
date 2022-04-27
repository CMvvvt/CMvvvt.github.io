import '../../styles/project.scss';
import Projects from '../Projects';
const LightSpeed = require('react-reveal/LightSpeed');

function ProjectHome() {
  return (
    <div className="project-page">
      <div className="split-left left"></div>
      <div className="split-middle middle">
        <br />
        <br />
        <br />
        <LightSpeed left>
          <p>Here are some random projects:)</p>
          <br />
        </LightSpeed>
        <Projects />
      </div>
      <div className="split-right right"></div>
    </div>
  );
}

export default ProjectHome;
