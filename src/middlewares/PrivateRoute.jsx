import React from 'react';
import { Route } from 'react-router-dom';
import { NavbarAuth, Sidebar, Footer, Sidebar2, Footer2 } from '../components/module';

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
                <Sidebar show={show}>
                  <Component {...props} />
                </Sidebar>
                <Footer />
              </React.Fragment>
            )}
            {rest.version === 2 && (
              <React.Fragment>
                <Sidebar2 show={show}>
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
