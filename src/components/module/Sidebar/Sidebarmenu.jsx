import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Sidebarmenu.module.css';
const Sidebarmenu = (props) => {
  return (
    <React.Fragment>
      {props.type === 'link' && (
        <NavLink exact={true} activeClassName={style.active} to={props.to} className={style.wrapper}>
          <img src={props.iconMenu} className={style.iconMenu} alt="iconMenu" />
          <div className={style.textMenu}>{props.children}</div>
        </NavLink>
      )}
      {props.type === 'button' && (
        <button onClick={props.onClick} className={`${style.wrapper} border-0 bg-transparent`}>
          <img src={props.iconMenu} className={style.iconMenu} alt="iconMenu" />
          <div className={style.textMenu}>{props.children}</div>
        </button>
      )}
    </React.Fragment>
  );
};

Sidebarmenu.defaultProps = {
  type: 'link',
};
export default Sidebarmenu;
