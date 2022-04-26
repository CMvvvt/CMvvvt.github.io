import * as React from 'react';
import Container from './Container';
import '../styles/intro.scss';
import Avatar from './Avatar';
import similan from '../assets/similan.jpg';
import Icons from './Icons';

function Intro() {
  return (
    <Container>
      <div className="header">
        <div>
          <h3>Hi, This is Ming.</h3>
          <br />
          <p>
            I'm currently a graduate student @
            <a href="https://www.northeastern.edu/" target="_blank">
              Northeastern University
            </a>
          </p>

          <p>
            I am from Sichuan, China, and got my bachelor degree @
            <a href="https://www.scu.edu.cn/" target="_blank">
              Sichuan University
            </a>
          </p>
        </div>
        <Avatar imageUrl={similan} name="profile" />
        <h5 className="prefix">He/Him</h5>
      </div>
      <Icons />
    </Container>
  );
}

export default Intro;
