/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { profile } from '../configs/actions/userAction';

const PublicRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  React.useEffect(async () => {
    await dispatch(profile());
  }, []);
  const {
    user: { auth },
  } = useSelector((state) => state);
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <React.Fragment>
            {!rest.restricted && <Component {...props} />}
            {!auth && rest.restricted && <Component {...props} />}
            {auth && rest.restricted && <Redirect to="/dashboard" />}
          </React.Fragment>
        );
      }}
    />
  );
};

export default PublicRoute;
