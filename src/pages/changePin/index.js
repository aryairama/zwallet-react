import React from 'react';
import { Button } from '../../components/base';
import Pin from '../../components/base/Pin';
import Style from './pin.module.css';
const ChangePin = () => {
  return (
    <>
      <div className="wrapperContent">
        <p className="text_18 bold c-grey">Change PIN</p>
        <p className="text_16 c-dark desciptionContentBox">Enter your current 6 digits Zwallet PIN below to continue to the next steps.</p>
        <div className={Style.containerPin}>
          <Pin></Pin>
          <Button styling="bg__primary text-18 c-white" style={{ marginTop: '40px', marginBottom: '40px' }}>
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChangePin;
