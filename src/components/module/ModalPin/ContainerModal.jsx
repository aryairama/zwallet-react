import React from 'react';

const ContainerModal = (props) => {
  return (
    <div
      className="modal fade"
      id={props.id}
      ref={props.forwadedRef}
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className={`modal-dialog ${props.styleDialog}`}>
        <div className={`modal-content ${props.styleContent}`}>
          {props.header && <div className={`modal-header ${props.styleHeader}`}>{props.header}</div>}
          {props.body && <div className={`modal-body ${props.styleBody}`}>{props.body}</div>}
          {props.footer && <div className={`modal-footer ${props.styleFooter}`}>{props.footer}</div>}
        </div>
      </div>
    </div>
  );
};

export default ContainerModal;
