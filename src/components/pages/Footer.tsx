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
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          <Typescript className={item} />{' '}
        </a>
        <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
          <Sass className={item} />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <ReactIcon className={item} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
