/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M22 48.3V27.8l-6.9 5.6-2.5-3.1 7.3-5.9-7.3-5.4 2.4-3.2 7 5.2V-.3L38.9 14 26.3 24.3 39 33.8 22 48.3zm4-19.2v10.6l6.6-5.6-6.6-5zm0-20.8v11.1l6.7-5.4L26 8.3z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconBluetooth";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
