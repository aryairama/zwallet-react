import React from 'react';
// import { useSelector } from 'react-redux';
import Edit from '../../assets/img/icons/edit.svg';
import Style from './profile.module.css';
import Avatar from '../../assets/img/avatar/1.png';
import { Link } from 'react-router-dom';
import Arrow from '../../assets/img/icons/arrow-left.svg';
const Profile = () => {
  // const user = useSelector((state) => state.user.user);
  return (
    <>
      <div className="wrapperContent">
        <div className={Style.contentProfile}>
          <div className={Style.dataProfile}>
            <img src={Avatar} alt="userImage" />
            <div className={Style.editFlex}>
              <img src={Edit} alt="edit" />
              <p className="text_16 c-dark">edit</p>
            </div>
            <p className="text_18 bold c-grey">Robert Chandler</p>
            <p className="text_16 c-dark">+62 813-9387-7946</p>
          </div>
          <Link to="/personal-info" className={Style.buttonChoice}>
            <p className='text_18 bold c-grey'>Personal Information</p>
            <img src={Arrow} alt="arrow" />
          </Link>
          <Link to="/change-password" className={Style.buttonChoice}>
            <p className='text_18 bold c-grey'>Change Password</p>
            <img src={Arrow} alt="arrow" />
          </Link>
          <Link to="/change-pin" className={Style.buttonChoice}>
            <p className='text_18 bold c-grey'>Change PIN</p>
            <img src={Arrow} alt="arrow" />
          </Link>
          <Link to="/login" className={Style.buttonChoice}>
            <p className='text_18 bold c-grey'>Logout</p>
            <img src={Arrow} alt="arrow" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
