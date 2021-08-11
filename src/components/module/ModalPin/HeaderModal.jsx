import React from 'react';
import closeIcon from '../../../assets/img/icons/x.svg';
const HeaderModal = (props) => {
  return (
    <React.Fragment>
      <div>Enter PIN to Transfer</div>
      <img
        style={{ cursor: 'pointer' }}
        onClick={props.onClick}
        width="30px"
        height="30px"
        src={closeIcon}
        alt="icon-close"
      />
    </React.Fragment>
  );
};

export default HeaderModal;
