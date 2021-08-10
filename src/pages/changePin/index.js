import React from 'react';
import { Button, PinContainer, PinInput } from '../../components/base';
import Style from './pin.module.css';
const ChangePin = () => {
  const [pin, setPin] = React.useState({
    pin1: '',
    pin2: '',
    pin3: '',
    pin4: '',
    pin5: '',
    pin6: '',
  });
  const pinChangeHandler = (e) => {
    setPin((oldValue) => {
      return { ...oldValue, [e.target.name]: parseInt(e.target.value) ? parseInt(e.target.value) : '' };
    });
  };
  return (
    <>
      <div className="wrapperContent">
        <p className="text_18 bold c-grey">Change PIN</p>
        <p className="text_16 c-dark desciptionContentBox">
          Enter your current 6 digits Zwallet PIN below to continue to the next steps.
        </p>
        <div className={Style.containerPin}>
          <PinContainer>
            <PinInput type="text" name="pin1" value={pin.pin1} onChange={pinChangeHandler} />
            <PinInput type="text" name="pin2" value={pin.pin2} onChange={pinChangeHandler} />
            <PinInput type="text" name="pin3" value={pin.pin3} onChange={pinChangeHandler} />
            <PinInput type="text" name="pin4" value={pin.pin4} onChange={pinChangeHandler} />
            <PinInput type="text" name="pin5" value={pin.pin5} onChange={pinChangeHandler} />
            <PinInput type="text" name="pin6" value={pin.pin6} onChange={pinChangeHandler} />
          </PinContainer>
          <Button disabled styling="bg__primary text-18 c-white" style={{ marginTop: '90px', width: '100%' }}>
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChangePin;
