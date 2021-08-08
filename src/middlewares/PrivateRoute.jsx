import React from 'react';
import { Route } from 'react-router-dom';
import { NavbarAuth, Sidebar, Footer, Sidebar2, Footer2, Sidebarmenu } from '../components/module';
import iconDashboard from '../assets/img/icons/sidebar/grid.svg';
import iconTransfer from '../assets/img/icons/sidebar/arrow-up.svg';
import iconTopup from '../assets/img/icons/sidebar/plus.svg';
import iconProfile from '../assets/img/icons/sidebar/user.svg';
import iconLogout from '../assets/img/icons/sidebar/log-out.svg';

const PrivateRoute = ({ component: Component, ...rest }) => {
  document.body.style.backgroundColor = '#473AD10F';
  const [show, setShow] = React.useState(false);
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <React.Fragment>
            <NavbarAuth onClick={() => setShow(!show)} />
            {rest.version === 1 && (
              <React.Fragment>
                <Sidebar
                  show={show}
                  menu={
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
                  }
                >
                  <Component {...props} />
                </Sidebar>
                <Footer />
              </React.Fragment>
            )}
            {rest.version === 2 && (
              <React.Fragment>
                <Sidebar2
                  show={show}
                  menu={
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
                  }
                >
                  <Component {...props} />
                </Sidebar2>
                <Footer2 />
              </React.Fragment>
            )}
          </React.Fragment>
        );
      }}
    />
  );
};

export default PrivateRoute;
