import React from 'react';
import { Sidebarmenu } from '../components/module';
import iconDashboard from '../assets/img/icons/sidebar/grid.svg';
import iconTransfer from '../assets/img/icons/sidebar/arrow-up.svg';
import iconTopup from '../assets/img/icons/sidebar/plus.svg';
import iconProfile from '../assets/img/icons/sidebar/user.svg';
import iconLogout from '../assets/img/icons/sidebar/log-out.svg';
import { useDispatch } from 'react-redux';
import { logout } from '../configs/actions/userAction';
import { useHistory } from 'react-router-dom';
const NavigationMenu = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="menu">
        <Sidebarmenu to="/dashboard" iconMenu={iconDashboard}>
          Dashboard
        </Sidebarmenu>
        <Sidebarmenu to="/transfer" iconMenu={iconTransfer}>
          Transfer
        </Sidebarmenu>
        <Sidebarmenu to="/topup" iconMenu={iconTopup}>
          Topup
        </Sidebarmenu>
        <Sidebarmenu to="/profile" iconMenu={iconProfile}>
          Profile
        </Sidebarmenu>
      </div>
      <div className="logout">
        <Sidebarmenu type="button" onClick={() => dispatch(logout(history))} iconMenu={iconLogout}>
          Logout
        </Sidebarmenu>
      </div>
    </React.Fragment>
  );
};

export default NavigationMenu;
