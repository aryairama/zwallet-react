import React, { Fragment } from 'react';
import Login from './pages/login';
import LandingPages from './pages/LandingPages';
import Register from './pages/register';
import ForgotPassword from './pages/forgotpassword';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './middlewares/PrivateRoute';
import PublicRoute from './middlewares/PublicRoute';
import CreatePin from './pages/createPin';
import PinSuccess from './pages/confirmPin';
function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={LandingPages} />
        <PublicRoute restricted={true} path="/login" component={Login} />
        <PublicRoute restricted={true} path="/register" component={Register} />
        <PublicRoute restricted={true} path="/forgot-password" component={ForgotPassword} />
        <Route path="/pin" component={CreatePin} />
        <Route path="/pin-success" component={PinSuccess} />
        <PrivateRoute roles={['member', 'admin']} path="/dashboard" version={2} component={() => <p></p>} />
      </Switch>
    </Fragment>
  );
}

export default App;
