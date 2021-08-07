import React from "react";
import cs from "classnames";
import style from "./InputText.module.css";

const InputTextIcon = (props) => {
  return (
    <React.Fragment>
      <div className={`position-relative mb-3 ${props.styleContainer}`}>
        <input
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          id={props.id}
          type={props.type}
          name={props.name}
          value={props.value}
          className={`${cs(style.input)} ${props.className}`}
          placeholder={props.placeholder}
          min={props.min}
          max={props.max}
        />
        <span
          className={`${cs(style.labelEffect)} ${props.labelEffect}`}
        ></span>
        <img
          className={cs(style.iconInput)}
          width={props.width}
          height={props.height}
          src={props.img}
          alt="icon-input"
        />
      </div>
    </React.Fragment>
  );
};

InputTextIcon.defaultProps = {
  icon: false,
};

export default InputTextIcon;