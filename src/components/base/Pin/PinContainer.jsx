import React from 'react';
import Style from './pin.module.css';

const PinContainer = (props) => {
  return <div className={Style.pinContainer}>{props.children}</div>;
};

export default PinContainer;
