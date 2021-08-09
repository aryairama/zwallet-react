import React from 'react';
import Card from '../../components/base/card';
import '../../assets/css/color.css';
import '../../assets/css/typography.css';
import {useSelector} from 'react-redux'
const PersonalInfo = () => {
  const user = useSelector(state => state.user.user)
  return (
    <>
      <div className="wrapperContent">
        <p className="text-18 bold">Personal Information</p>
        <p className="text-16 c-dark desciptionContentBox">
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </p>
        <Card type="stuff" title="First Name" content={user.first_name} />
        <Card type="stuff" title="Last Name" content={user.last_name} />
        <Card
          type="stuff"
          title="Verified E-mail"
          content={user.email}
        />
        <Card type="stuff" title="Phone Number" content={user.phone_number} />
      </div>
    </>
  );
};

export default PersonalInfo;
