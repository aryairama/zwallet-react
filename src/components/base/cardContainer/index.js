import React from 'react';
import style from './cardContainer.module.css';
import cs from 'classnames';

function Index(props) {
  return (
    <>
      <div
        className={`${cs(style.cardWrapper)} ${props.className} `}
        style={props.style}
      >
        {props.children}
      </div>
    </>
  );
}

export default Index;
