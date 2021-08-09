import React from 'react';
import cs from 'classnames';
import style from './InputPasswordIcon.module.css';

const InputPasswordIcon = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <React.Fragment>
      <div className={`position-relative ${props.styleContainer}`}>
        <input
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          id={props.id}
          type={showPassword === false ? 'password' : 'text'}
          name={props.name}
          value={props.value}
          className={`${cs(style.input)} ${props.className}`}
          placeholder={props.placeholder}
          min={props.min}
          max={props.max}
        />
        <span className={`${cs(style.labelEffect)} ${props.error ? 'border-danger' : ''}`}></span>
        <img
          className={cs(style.iconInput, props.error ? style.iconError : '')}
          width={props.width}
          height={props.height}
          src={props.img}
          alt="icon-input"
        />
        <img
          onClick={() => setShowPassword(!showPassword)}
          className={cs(style.iconPassword)}
          width={props.width}
          height={props.height}
          src={props.eyePassword}
          alt="icon-input"
        />
      </div>
    </React.Fragment>
  );
};

export default InputPasswordIcon;
