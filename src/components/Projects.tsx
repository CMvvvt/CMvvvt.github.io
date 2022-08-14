import '../styles/project.scss';
import * as React from 'react';
import { projectItems, projectType } from '../dict';
import Container from 'react-bootstrap/Container';
const Fade = require('react-reveal/Fade');

function Project({ item }: { item: projectType }) {
  return (
    <>
      <Fade right={item.id === '1'} left={item.id === '0'}>
        <div className="project-items">
          <Container>
            <img className="items-img" src={item.src} alt={item.src} />
            <div className="item-desc">
              {item.description}
              <br />
            </div>

            <div className={item.title}>
              <a href={item.url} target="_blank" rel="noreferrer">
                <div className="text">View</div>
              </a>
            </div>

            <div className="container">
              <h5>{item.title}</h5>
            </div>
          </Container>
        </div>
      </Fade>
    </>
  );
}

function Projects() {
  const [items] = React.useState<projectType[]>(projectItems);
  return (
    <div className="projects-layout">
      {items.map((item) => {
        return <Project item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Projects;
