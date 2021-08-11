import React from 'react';
import InputPhoneIcon from '../../components/base/Input/InputPhoneIcon';
import Phone from '../../assets/img/icons/phoneInput.svg';
import Style from './phone.module.css';
import { Button } from '../../components/base';
import SimpleReactValidator from 'simple-react-validator';
import { useDispatch } from 'react-redux';
import { updatePhoneNumber } from '../../configs/actions/userAction';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';

const AddPhoneNumber = () => {
  const { user } = useSelector((state) => state.user);
  const history = useHistory()
  const dispatch = useDispatch()
  const [phone, setPhone] = React.useState('');

  const handleChange = (e) => {
    setPhone(e.target.value);
  }
  const submitHandler = async (e) => {
    try{
      e.preventDefault();
      const {data: {data}} = await dispatch(updatePhoneNumber(phone));
      dispatch({type: 'LOGIN', payload: {...user, phone_number: data}})
      swal('Success', 'Data update successfully', 'success');
      history.push('/personal-info')
    }catch(error){
      swal('Error', 'Failed to update phone number', 'error');
    }
  };
  const validator = React.useRef(new SimpleReactValidator({ className: 'small text-danger' }));
  return (
    <>
      <div className="wrapperContent">
        <p className="text_18 bold c-grey">Add Phone Number</p>
        <p className="text_16 c-dark desciptionContentBox">
          Add at least one phone number for the transfer ID so you can start transfering your money to another user.
        </p>
        <form className={Style.phoneWrapper} onSubmit={submitHandler}>
          <InputPhoneIcon img={Phone} width="21px" height="21px" placeholder="Enter your phone number" name="phone" onFocus={() => validator.current.showMessageFor('phone_number')} onChange={handleChange}/>
          {validator.current.message('phone_number', phone, 'required|min:11|max:12|numeric')}
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
