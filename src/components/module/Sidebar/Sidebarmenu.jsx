import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Sidebarmenu.module.css';
const Sidebarmenu = (props) => {
  return (
    <NavLink exact={true} activeClassName={style.active} to={props.to} className={style.wrapper}>
      <img src={props.iconMenu} className={style.iconMenu} alt="iconMenu" />
      <div className={style.textMenu}>{props.children}</div>
    </NavLink>
  );
};

export default Sidebarmenu;
