import React from 'react';
import style from './Button.module.css';
import cs from 'classnames';
import './Button.css';
function Button(props) {
  if (props.icon) {
    return (
      <React.Fragment>
        <button onClick={props.onClick} disabled={props.disabled} className={` ${props.styling}`} style={props.style}>
          <img
            className={`${cs(style.onlyIcon)}`}
            width={props.width}
            height={props.height}
            src={props.img}
            alt="btn-only-icon"
          ></img>
        </button>
      </React.Fragment>
    );
  } else if (props.iconText) {
    return (
      <React.Fragment>
        <button
          onClick={props.onClick}
          disabled={props.disabled}
          className={`${cs(style.color, style.border, style.margin, style.padding)} ${props.styling}`}
          style={props.style}
        >
          <img
            className={`${cs(style.iconText)} ${props.colorIcon}`}
            width={props.width}
            height={props.height}
            src={props.img}
            alt="btn-with-text-icon"
          ></img>
          {props.children}
        </button>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <button
        onClick={props.onClick}
        disabled={props.disabled}
        className={`${cs(style.color, style.border, style.margin)} ${props.styling}`}
        style={props.style}
      >
        {props.children}
      </button>
    </React.Fragment>
  );
}

export default Button;
