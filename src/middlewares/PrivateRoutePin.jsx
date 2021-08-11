import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutePin = ({ component: Component, ...rest }) => {
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
          return <Component {...props} />;
        } else if (auth && access && user.PIN && user.PIN.length === 6) {
          return <Redirect to="/dashboard" />;
        }
      }}
    />
  );
};

export default PrivateRoutePin;
