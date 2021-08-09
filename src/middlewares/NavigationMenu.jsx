import React from 'react';
import { Sidebarmenu } from '../components/module';
import iconDashboard from '../assets/img/icons/sidebar/grid.svg';
import iconTransfer from '../assets/img/icons/sidebar/arrow-up.svg';
import iconTopup from '../assets/img/icons/sidebar/plus.svg';
import iconProfile from '../assets/img/icons/sidebar/user.svg';
import iconLogout from '../assets/img/icons/sidebar/log-out.svg';
const NavigationMenu = (props) => {
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
        <Sidebarmenu to="/profile" iconMenu={iconLogout}>
          Logout
        </Sidebarmenu>
      </div>
    </React.Fragment>
  );
};

export default NavigationMenu;
