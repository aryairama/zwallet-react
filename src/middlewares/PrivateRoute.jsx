import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavigationMenu from './NavigationMenu';
import { NavbarAuth, Sidebar, Footer, Sidebar2, Footer2 } from '../components/module';
const PrivateRoute = ({ component: Component, ...rest }) => {
  document.body.style.backgroundColor = '#473AD10F';
  const [show, setShow] = React.useState(false);
  const {
    user: { auth, user },
  } = useSelector((state) => state);
  let access = false;
  for (let i = 0; i < rest.roles.length; i++) {
    if (user.roles === rest.roles[i]) {
      access = true;
      break;
    } else if (user.roles !== rest.roles[i]) {
      access = false;
    }
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth) {
          return <Redirect to="/login" />;
        } else if (!access) {
          return <Redirect to="/login" />;
        } else if (auth && access && !user.PIN) {
          return <Redirect to="/pin" />;
        } else if (auth && access) {
          return (
            <React.Fragment>
              <NavbarAuth onClick={() => setShow(!show)} />
              {rest.version === 1 && (
                <React.Fragment>
                  <Sidebar show={show} menu={<NavigationMenu roles={user.roles} />}>
                    <Component {...props} />
                  </Sidebar>
                  <Footer />
                </React.Fragment>
              )}
              {rest.version === 2 && (
                <React.Fragment>
                  <Sidebar2 show={show} menu={<NavigationMenu roles={user.roles} />}>
                    <Component {...props} />
                  </Sidebar2>
                  <Footer2 />
                </React.Fragment>
              )}
            </React.Fragment>
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
