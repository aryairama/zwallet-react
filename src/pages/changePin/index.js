import React from 'react';
import { Button, PinContainer, PinInput } from '../../components/base';
import Style from './pin.module.css';
import { useDispatch } from 'react-redux';
import { checkPin as verifPin, updatePin } from '../../configs/actions/userAction';
import swal from 'sweetalert';
const ChangePin = (props) => {
  const dispatch = useDispatch();
  const [checkPin, setCheckPin] = React.useState(true);
  const initialPin = {
    pin1: '',
    pin2: '',
    pin3: '',
    pin4: '',
    pin5: '',
    pin6: '',
  };
  const [pin, setPin] = React.useState(initialPin);
  const [changePin, setChangePin] = React.useState(initialPin);
  const pinChangeHandler = (e) => {
    setPin((oldValue) => {
      return { ...oldValue, [e.target.name]: parseInt(e.target.value) ? parseInt(e.target.value) : '' };
    });
  };
  const changePinChangeHandler = (e) => {
    setChangePin((oldValue) => {
      return { ...oldValue, [e.target.name]: parseInt(e.target.value) ? parseInt(e.target.value) : '' };
    });
  };
  const disabledButton = (pinType) => {
    if (pinType === 'verifPin') {
      return pin.pin1 && pin.pin2 && pin.pin3 && pin.pin4 && pin.pin5 && pin.pin6;
    } else if (pinType === 'updatePin') {
      return changePin.pin1 && changePin.pin2 && changePin.pin3 && changePin.pin4 && changePin.pin5 && changePin.pin6;
    }
  };
  const onVerifPinHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(verifPin(pin));
      setCheckPin(false);
      swal('Verif Pin', 'Your pin is correct, please change your pin', 'success');
    } catch (error) {
      swal('Error', error.response.data.message, 'error');
    }
  };
  return (
    <>
      <div className="wrapperContent">
        <p className="text_18 bold c-grey">{checkPin === true ? 'Verif pin' : 'Change PIN'}</p>
        <p className="text_16 c-dark desciptionContentBox">
          Enter your current 6 digits Zwallet PIN below to continue to the next steps.
        </p>
        {checkPin ? (
          <form onSubmit={onVerifPinHandler} className={Style.containerPin}>
            <PinContainer>
              <PinInput type="text" name="pin1" value={pin.pin1} onChange={pinChangeHandler} />
              <PinInput type="text" name="pin2" value={pin.pin2} onChange={pinChangeHandler} />
              <PinInput type="text" name="pin3" value={pin.pin3} onChange={pinChangeHandler} />
              <PinInput type="text" name="pin4" value={pin.pin4} onChange={pinChangeHandler} />
              <PinInput type="text" name="pin5" value={pin.pin5} onChange={pinChangeHandler} />
              <PinInput type="text" name="pin6" value={pin.pin6} onChange={pinChangeHandler} />
            </PinContainer>
            <Button
              disabled={disabledButton('verifPin') ? false : true}
              styling="bg__primary text-18 c-white"
              style={{ marginTop: '90px', width: '100%' }}
            >
              Confirm
            </Button>
          </form>
        ) : (
          <form onSubmit={(e) => e.preventDefault()} className={Style.containerPin}>
            <PinContainer>
              <PinInput type="text" name="pin1" value={changePin.pin1} onChange={changePinChangeHandler} />
              <PinInput type="text" name="pin2" value={changePin.pin2} onChange={changePinChangeHandler} />
              <PinInput type="text" name="pin3" value={changePin.pin3} onChange={changePinChangeHandler} />
              <PinInput type="text" name="pin4" value={changePin.pin4} onChange={changePinChangeHandler} />
              <PinInput type="text" name="pin5" value={changePin.pin5} onChange={changePinChangeHandler} />
              <PinInput type="text" name="pin6" value={changePin.pin6} onChange={changePinChangeHandler} />
            </PinContainer>
            <Button
              onClick={() => {
                dispatch(updatePin(changePin,props.history));
                setChangePin(initialPin);
              }}
              disabled={disabledButton('updatePin') ? false : true}
              styling="bg__primary text-18 c-white"
              style={{ marginTop: '90px', width: '100%' }}
            >
              Change Pin
            </Button>
          </form>
        )}
      </div>
    </>
  );
};

export default ChangePin;
