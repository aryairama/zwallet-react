import React from 'react';
import { Route } from 'react-router-dom';
import { NavbarAuth, Sidebar,Footer } from '../components/module';

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
            <Sidebar show={show} version={rest.version}>
              <Component {...props} />
            </Sidebar>
            <Footer />
          </React.Fragment>
        );
      }}
    />
  );
};

export default PrivateRoute;
