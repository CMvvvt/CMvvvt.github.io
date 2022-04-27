import * as React from 'react';
import { item, items } from '../dict';
import '../styles/icons.scss';

function IconInfo({ item, key }: { item: item; key: number }) {
  return (
    <div className="social" key={key}>
      <a href={item.link} target="_blank">
        <i className={item.name}></i>
      </a>
    </div>
  );
}

function makeItems(items: item[]) {
  console.log(items[0].title);
  return items.map((item) => {
    return <IconInfo item={item} key={item.id} />;
  });
}

function Icons() {
  const [icons, setIcons] = React.useState<item[]>(items);
  return <div className="icons">{makeItems(icons)}</div>;
}

export default Icons;
