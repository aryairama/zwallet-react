import React from 'react';
import cs from 'classnames';
import style from './NavbarAuth.module.css';
import { Link } from 'react-router-dom';
import iconNotif from '../../../assets/img/icons/notification.svg';
import iconProfile from '../../../assets/img/avatar/8.png';
import sideBarIcon from '../../../assets/img/icons/list.svg';
import { useSelector } from 'react-redux';

const NavbarAuth = (props) => {
  const { user } = useSelector((state) => state.user);
  return (
    <nav
      className={`navbar py-0 navbar-light bg-white shadow-sm fixed-top ${props.styleNavbar} ${style.navbarZwallet}`}
    >
      <div className="container-sm">
        <Link to="/" className={`navbar-brand ${props.navbarBrand}`}>
          <p className={cs(style.textZwallet)}>Zwallet</p>
        </Link>
        <div
          className={`d-flex flex-row flex-wrap flex-grow-0 justify-content-md-around justify-content-end ${cs(
            style.containerMenu
          )}`}
        >
          <div className="d-flex dropdown">
            <img
              src={user.image ? `${process.env.REACT_APP_API_URL}/${user.image}` : iconProfile}
              width="40px"
              data-bs-toggle="dropdown"
              height="40px"
              alt="iconProfile"
            />
            <ul className="dropdown-menu d-md-none dropdown-menu-end" aria-labelledby="dropdownMenu2">
              <li className="d-flex flex-column dropdown-item">
                <div className={cs(style.profileName)}>{`${user.first_name} ${user.last_name}`}</div>
                <div className="small ">+6285334016482</div>
              </li>
              <div className="dropdown-divider"></div>
              <li className="dropdown-item py-0 my-0">
                <div className="d-flex">
                  <img width="20px" height="25px" src={iconNotif} alt="" />
                  <p className="ms-1">Notification</p>
                </div>
              </li>
            </ul>
            <div className={`ms-2 profile-info d-flex flex-column flex-wrap d-md-block d-none ${cs(style['mt-n1'])}`}>
              <div className={cs(style.profileName)}>{`${user.first_name} ${user.last_name}`}</div>
              <div className="small ">{user.phone_number}</div>
            </div>
          </div>
          <div className="d-md-block d-none">
            <img src={iconNotif} alt="" />
          </div>
          <div onClick={props.onClick} className="iconNavbar ms-md-0 ms-3 d-lg-none d-block">
            <img width="25px" height="25px" src={sideBarIcon} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAuth;
