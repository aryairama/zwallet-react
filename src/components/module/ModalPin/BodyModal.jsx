import React from 'react';
import { PinContainer, PinInput, Button } from '../../base';
import { checkPin } from '../../../configs/actions/userAction';
import { transfer } from '../../../configs/actions/transferAction';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
const BodyModal = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    user: { user },
    transaction: { transaction },
  } = useSelector((state) => state);
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
  const clickHandler = async () => {
    try {
      if (user.phone_number && user.phone_number.length > 13) {
        const {data} = await dispatch(checkPin(pin));
        if (data.statusCode === 200) {
          await props.modalPinHide();
          await dispatch(transfer(transaction,history))
        }
      } else {
        await props.modalPinHide();
        swal('Error', 'Please add your mobile number before making a transfer', 'error');
        history.push('/add-phone-number');
      }
    } catch (error) {
      props.modalPinHide();
      swal('Error', error?.response?.data?.message, 'error');
    }
  };
  return (
    <React.Fragment>
      <div>Enter your 6 digits PIN for confirmation to continue transferring money. </div>
      <PinContainer>
        <PinInput type="text" name="pin1" value={pin.pin1} onChange={pinChangeHandler} />
        <PinInput type="text" name="pin2" value={pin.pin2} onChange={pinChangeHandler} />
        <PinInput type="text" name="pin3" value={pin.pin3} onChange={pinChangeHandler} />
        <PinInput type="text" name="pin4" value={pin.pin4} onChange={pinChangeHandler} />
        <PinInput type="text" name="pin5" value={pin.pin5} onChange={pinChangeHandler} />
        <PinInput type="text" name="pin6" value={pin.pin6} onChange={pinChangeHandler} />
      </PinContainer>
      <Button
        onClick={clickHandler}
        disabled={disabledButton() ? false : true}
        styling="bg__primary text-18 c-white text-center w-50 align-self-end"
        style={{ marginTop: '40px', padding: '14px 40px' }}
      >
        Continue
      </Button>
    </React.Fragment>
  );
};

export default BodyModal;
