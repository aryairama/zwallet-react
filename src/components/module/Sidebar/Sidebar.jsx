import React from 'react';
import cs from 'classnames';
import style from './Sidebar.module.css';
const Sidebar = (props) => {
  return (
    <div className={cs(style.wrapper)}>
      <div className={`container ${style.container}`}>
        <div className={`${cs(style.sidebar)} ${props.show ? style['sidebar-active'] : ''}`}>
          <div className={`card shadow-sm border-0 ${style.sidebarContent}`}>
            <div className="card-body px-0 d-flex flex-column justify-content-between">{props.menu}</div>
          </div>
        </div>
        <div className={`${cs(style['main-content'])} ${props.show ? style['main-slide'] : ''}`}>
          <div className={style.mainComponent}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
