import React from 'react';
import InputPhoneIcon from '../../components/base/Input/InputPhoneIcon';
import Phone from '../../assets/img/icons/phoneInput.svg';
import Style from './phone.module.css';
import { Button } from '../../components/base';
import SimpleReactValidator from 'simple-react-validator';
const AddPhoneNumber = () => {
  const validator = React.useRef(new SimpleReactValidator({ className: 'small text-danger' }));
  return (
    <>
      <div className="wrapperContent">
        <p className="text_18 bold c-grey">Add Phone Number</p>
        <p className="text_16 c-dark desciptionContentBox">
          Add at least one phone number for the transfer ID so you can start transfering your money to another user.
        </p>
        <form className={Style.phoneWrapper}>
          <InputPhoneIcon img={Phone} width="21px" height="21px" placeholder="Enter your phone number" name="phone" />
          <Button
            disabled={validator.current.allValid() ? false : true}
            styling="bg__primary text-18 c-white"
            style={{ marginTop: '40px', marginBottom: '40px' }}
          >
            Change Phone Number
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddPhoneNumber;
