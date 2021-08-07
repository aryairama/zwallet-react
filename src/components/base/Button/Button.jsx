import React from "react";
import style from "./Button.module.css";
import cs from "classnames";
function Button(props) {
  if (props.icon) {
    return (
      <React.Fragment>
        <img
          className={cs(style.iconInput)}
          width={props.width}
          height={props.height}
          src={props.img}
          alt="btn-only-icon"
        ></img>
        <button
          onClick={props.onClick}
          disabled={props.disabled}
          className={`${cs(style.color, style.border, style.margin)} ${
            props.styling
          }`}
          style={props.style}
        ></button>
      </React.Fragment>
    );
  } else if (props.iconText) {
    return (
      <React.Fragment>
        <img
          className={cs(style.iconInput)}
          width={props.width}
          height={props.height}
          src={props.img}
          alt="btn-with-text-icon"
        ></img>
        <button
          onClick={props.onClick}
          disabled={props.disabled}
          className={`${cs(style.color, style.border, style.margin)} ${
            props.styling
          }`}
          style={props.style}
        >
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
        className={`${cs(style.color, style.border, style.margin)} ${
          props.styling
        }`}
        style={props.style}
      >
        {props.children}
      </button>
    </React.Fragment>
  );
}

export default Button;
