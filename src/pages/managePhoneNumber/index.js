import React from 'react';
import '../../assets/css/color.css';
import '../../assets/css/typography.css';
import Card from '../../components/base/card';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deletePhoneNumber } from '../../configs/actions/userAction';

const ManagePhone = (props) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  return (
    <>
      <div className="wrapperContent">
        <p className="text-18 bold">Personal Information</p>
        <p className="text-16 c-dark desciptionContentBox">
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </p>
        <Card type="managePhone" title="Primary" content={user.phone_number} onClick={() => dispatch(deletePhoneNumber(props.history))}/>
      </div>
    </>
  );
};

export default ManagePhone;
