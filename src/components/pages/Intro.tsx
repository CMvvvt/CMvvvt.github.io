import '../../styles/intro.scss';
import Avatar from '../Avatar';
import similan from '../../assets/similan.jpg';
import Icons from '../Icons';
const LightSpeed = require('react-reveal/LightSpeed');

function Intro() {
  return (
    <div className="intro">
      <div className="header">
        <div>
          <h3>Hi, This is Ming.</h3>
          <br />
          <p>From Sichuan, China.</p>
          <p>
            I'm currently a graduate student @
            <a href="https://www.northeastern.edu/" target="_blank">
              Northeastern University
            </a>{' '}
            in Seattle, WA.
          </p>
        </div>

        <Avatar imageUrl={similan} name="profile" />

        <h5 className="prefix">He/Him</h5>
      </div>
      <br />
      <br />

      <p>
        I used to intern @
        <a href="https://www.mi.com/global/" target="_blank">
          Xiaomi
        </a>{' '}
        as a software developer.
      </p>
      <p>
        This summer I will have some fun @
        <a href="https://about.facebook.com/meta/" target="_blank">
          Meta
        </a>
        .
      </p>

      <LightSpeed left>
        <p className="check">Check my other pages:</p>
      </LightSpeed>
      <Icons />
    </div>
  );
}

export default Intro;
