import * as React from 'react';
import '../styles/container.scss';

type propsTypes = {
  children: React.ReactNode;
};
function Container({ children }: propsTypes) {
  return <div className="container">{children}</div>;
}

export default Container;
