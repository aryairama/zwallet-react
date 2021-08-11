import React from 'react';
import Style from './pin.module.css';
const PinInput = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      pattern="[0-9]{1}"
      maxLength="1"
      onChange={props.onChange}
      onFocus={props.onFocus}
      className={Style.pin}
    />
  );
};

export default PinInput;
