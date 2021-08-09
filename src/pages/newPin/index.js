import React from 'react';
import { Button } from '../../components/base';
import Pin from '../../components/base/Pin';
import Style from '../changePin/pin.module.css';
const NewPin = () => {
  return (
    <>
      <div className="wrapperContent">
        <p className="text_18 bold c-grey">Change PIN</p>
        <p className="text_16 c-dark desciptionContentBox">Type your new 6 digits security PIN to use in Zwallet.</p>
        <div className={Style.containerPin}>
          <Pin></Pin>
          <Button styling="bg__primary text-18 c-white" style={{ marginTop: '40px', marginBottom: '40px' }}>
            Change PIN
          </Button>
        </div>
      </div>
    </>
  );
};

export default NewPin;
