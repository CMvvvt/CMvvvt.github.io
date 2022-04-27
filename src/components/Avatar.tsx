import * as React from 'react';
import '../styles/avatar.scss';

type propsType = {
  imageUrl: string;
  name: string;
};

function Avatar({ imageUrl, name }: propsType) {
  return (
    <React.Fragment>
      <div className="avatar">
        {imageUrl && <img src={imageUrl} alt={name} />}
        {imageUrl === '' && name !== '' && <div>{name}</div>}
      </div>
    </React.Fragment>
  );
}

export default Avatar;
