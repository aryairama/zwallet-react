import React, { Fragment } from 'react';
import Login from './pages/login';
import LandingPages from './pages/LandingPages';
import Register from './pages/register';
import ForgotPassword from './pages/forgotpassword';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './middlewares/PrivateRoute';
import PublicRoute from './middlewares/PublicRoute';
import CreatePin from './pages/createPin';
import verifiedAccounts from './pages/verifiedAccounts';
import PinSuccess from './pages/confirmPin';
import SearchReceiver from './pages/searchReceiver';
import HowToTopUp from './pages/howToTopUp';
import PersonalInfo from './pages/personalnfo';
import ChangePassword from './pages/changePassword';
import ManagePhone from './pages/managePhoneNumber';
import Profile from './pages/profile';
import EditProfile from './pages/editProfile';
import ResetPassword from './pages/ResetPassword';
function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={LandingPages} />
        <PublicRoute restricted={true} path="/login" component={Login} />
        <PublicRoute restricted={true} path="/register" component={Register} />
        <PublicRoute
          restricted={true}
          path="/forgot-password"
          component={ForgotPassword}
        />
        <PublicRoute
          restricted={true}
          path="/resetpassword/:token"
          component={ResetPassword}
        />
        <Route path="/verified-accounts/:token" component={verifiedAccounts} />
        <Route path="/pin" component={CreatePin} />
        <Route path="/pin-success" component={PinSuccess} />
        <PrivateRoute
          roles={['member', 'admin']}
          path="/dashboard"
          version={2}
          component={() => <p></p>}
        />
        <PrivateRoute
          roles={['member']}
          version={2}
          path="/how-to"
          component={HowToTopUp}
        />
        <PrivateRoute
          roles={['member']}
          version={2}
          path="/search-receiver"
          component={SearchReceiver}
        />
        <PrivateRoute
          roles={['member']}
          version={2}
          path="/personal-info"
          component={PersonalInfo}
        />
        <PrivateRoute
          roles={['member']}
          version={2}
          path="/change-password"
          component={ChangePassword}
        />
        <PrivateRoute
          roles={['member']}
          version={2}
          path="/manage-phone-number"
          component={ManagePhone}
        />
        <PrivateRoute
          roles={['member']}
          version={2}
          path="/profile"
          component={Profile}
        />
        <PrivateRoute
          roles={['member']}
          version={2}
          path="/edit-profile"
          component={EditProfile}
        />
      </Switch>
    </Fragment>
  );
}

export default App;
