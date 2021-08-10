import React from 'react';
import { PinContainer, PinInput } from '../../components/base';
import LayoutAuth from '../../components/module/LayoutAuth';
import { Button } from '../../components/base';
import { useDispatch } from 'react-redux';
import { createPin } from '../../configs/actions/userAction';
const CreatePin = (props) => {
  const dispatch = useDispatch();
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
  const disabledButton = () => {
    return pin.pin1 && pin.pin2 && pin.pin3 && pin.pin4 && pin.pin5 && pin.pin6;
  };
  return (
    <>
      <LayoutAuth>
        <p className="text-24">
          Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.
        </p>
        <div>
          <p className="text-16 c-grey" style={{ opacity: '60%' }}>
            Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell
            anyone about your Zwallet account password and the PIN.
          </p>
        </div>
        <PinContainer>
          <PinInput type="text" name="pin1" value={pin.pin1} onChange={pinChangeHandler} />
          <PinInput type="text" name="pin2" value={pin.pin2} onChange={pinChangeHandler} />
          <PinInput type="text" name="pin3" value={pin.pin3} onChange={pinChangeHandler} />
          <PinInput type="text" name="pin4" value={pin.pin4} onChange={pinChangeHandler} />
          <PinInput type="text" name="pin5" value={pin.pin5} onChange={pinChangeHandler} />
          <PinInput type="text" name="pin6" value={pin.pin6} onChange={pinChangeHandler} />
        </PinContainer>
        <Button
          onClick={() => dispatch(createPin(pin, props.history))}
          disabled={disabledButton() ? false : true}
          styling="bg__primary text-18 c-white"
          style={{ marginTop: '90px', width: '100%' }}
        >
          Confirm
        </Button>
      </LayoutAuth>
    </>
  );
};

export default CreatePin;
