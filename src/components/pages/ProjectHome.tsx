import '../../styles/project.scss';
import Projects from '../Projects';
import Footer from './Footer';
const LightSpeed = require('react-reveal/LightSpeed');

function ProjectHome() {
  return (
    <div className="project-page">
      <LightSpeed left>
        <p>Here are some random projects:)</p>
      </LightSpeed>
      <Projects />
      <Footer />
    </div>
  );
}

export default ProjectHome;
