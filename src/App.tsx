import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from './components/Container';
import Intro from './components/Intro';
import NavBar from './components/NavBar';

//Conventional props
function Heading({ title }: { title?: string }) {
  return <h1>{title}</h1>;
}

//
function HeadingWithContent({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <h1>{children}</h1>;
}

// default props
const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};

// Functional props
function TextWithNumber({
  header,
  children,
}: {
  header?: (num: number) => React.ReactNode;
  children: (num: number) => React.ReactNode;
}) {
  const [state, setState] = React.useState(1);

  return (
    <div>
      <h2>{header?.(state)}</h2>
      <div>{children(state)}</div>
      <div>
        <button onClick={() => setState(state + 1)}>Add</button>
      </div>
    </div>
  );
}

function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => React.ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Intro></Intro>
    </div>
  );
}

export default App;
