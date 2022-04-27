import * as React from 'react';
import { ReactComponent as Typescript } from '../../assets/typescript-icon.svg';
import { ReactComponent as Sass } from '../../assets/sass-icon.svg';
import { ReactComponent as ReactIcon } from '../../assets/react-icon.svg';
import '../../styles/footer.scss';

function Footer() {
  const item: string = 'item';
  return (
    <div className="tech-stack">
      <p>This website used these tools.</p>
      <div>
        <Typescript className={item} />
        <Sass className={item} />
        <ReactIcon className={item} />
      </div>
    </div>
  );
}

export default Footer;
