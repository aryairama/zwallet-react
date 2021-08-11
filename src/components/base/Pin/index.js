import React, {useState} from 'react';
import Style from './pin.module.css';

const Pin = () => {
  const [pin, setpin] = useState({
    pin1: 0,
    pin2: 0,
    pin3: 0,
    pin4: 0,
    pin5: 0,
    pin6: 0,
  });
  const handleInput = (e) => {
    setpin((oldValue) => {
      return { ...oldValue, [e.target.name]: parseInt(e.target.value) ? parseInt(e.target.value) : '' };
    });
  };
  return (
    <>
      <div className={Style.pinContainer}>
        <input
          type="text"
          name="pin1"
          value={pin.pin1}
          pattern="[0-9]{1}"
          maxlength="1"
          onChange={handleInput}
          className={Style.pin}
        />
        <input
          type="text"
          name="pin2"
          value={pin.pin2}
          pattern="[0-9]{1}"
          maxlength="1"
          onChange={handleInput}
          className={Style.pin}
        />
        <input
          type="text"
          name="pin3"
          value={pin.pin3}
          pattern="[0-9]{1}"
          maxlength="1"
          onChange={handleInput}
          className={Style.pin}
        />
        <input
          type="text"
          name="pin4"
          value={pin.pin4}
          pattern="[0-9]{1}"
          maxlength="1"
          onChange={handleInput}
          className={Style.pin}
        />
        <input
          type="text"
          name="pin5"
          value={pin.pin5}
          pattern="[0-9]{1}"
          maxlength="1"
          onChange={handleInput}
          className={Style.pin}
        />
        <input
          type="text"
          name="pin6"
          value={pin.pin6}
          pattern="[0-9]{1}"
          maxlength="1"
          onChange={handleInput}
          className={Style.pin}
        />
      </div>
    </>
  );
};

export default Pin;
