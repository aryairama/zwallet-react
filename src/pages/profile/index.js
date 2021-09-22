import React from 'react';
// import { useSelector } from 'react-redux';
import Edit from '../../assets/img/icons/edit.svg';
import Style from './profile.module.css';
import Avatar from '../../assets/img/avatar/default.png';
import { Link } from 'react-router-dom';
import Arrow from '../../assets/img/icons/arrow-left.svg';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../configs/actions/userAction';
const Profile = (props) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <div className="wrapperContent">
        <div className={Style.contentProfile}>
          <div className={Style.dataProfile}>
            <img
              className="rounded-circle"
              width="110px"
              height="110px"
              src={user.image ? `${process.env.REACT_APP_API_URL}/${user.image}` : Avatar}
              alt="userImage"
            />
            <div className={Style.editFlex}>
              <img src={Edit} alt="edit" />
              <Link to="/edit-profile" className="text_16 c-dark">
                edit
              </Link>
            </div>
            <div className="text_18 bold c-grey">{`${user.first_name} ${user.last_name}`}</div>
            <div className="text_16 c-dark">{user.phone_number}</div>
          </div>
          <Link to="/personal-info" className={Style.buttonChoice}>
            <p className="text_18 bold c-grey">Personal Information</p>
            <img src={Arrow} alt="arrow" />
          </Link>
          <Link to="/change-password" className={Style.buttonChoice}>
            <p className="text_18 bold c-grey">Change Password</p>
            <img src={Arrow} alt="arrow" />
          </Link>
          {user?.roles === 'member' && (
            <Link to="/change-pin" className={Style.buttonChoice}>
              <p className="text_18 bold c-grey">Change PIN</p>
              <img src={Arrow} alt="arrow" />
            </Link>
          )}
          <div
            onClick={() => dispatch(logout(props.history))}
            style={{ cursor: 'pointer' }}
            className={Style.buttonChoice}
          >
            <p className="text_18 bold c-grey">Logout</p>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
