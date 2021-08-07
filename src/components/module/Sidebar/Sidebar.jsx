import React from 'react';
import cs from 'classnames';
import style from './Sidebar.module.css';
const Sidebar = (props) => {
  return (
    <div className={cs(style.wrapper)}>
      <div className={`container ${style.container}`}>
        <div className={`${cs(style.sidebar)} ${props.show ? style['sidebar-active'] : ''}`}>
          <div className={`card shadow-sm border-0 ${style.sidebarContent}`}>
            <div className="card-body"></div>
          </div>
        </div>
        <div className={`${cs(style['main-content'])} ${props.show ? style['main-slide'] : ''}`}>
          {props.version === 1 && (
            <div className={`card card shadow-sm border-0 ${style.mainComponent}`}>
              <div className="card-body">{props.children}</div>
            </div>
          )}
          {props.version === 2 && <div className={style.mainComponent}>{props.children}</div>}
        </div>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  version: 1,
};

export default Sidebar;