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
import ChangePin from './pages/changePin';
import NewPin from './pages/newPin';
import AddPhoneNumber from './pages/addPhoneNumber';
import InputAmount from './pages/inputAmount';
import Confirmation from './pages/confirmation';
import PrivateRoutePin from './middlewares/PrivateRoutePin';
import Home from './pages/home';
import TransactionHistory from './pages/transactionHistory';
import OptionTopup from './pages/optionTopup';
import DirectTransfer from './pages/optionTopup/DirectTransfer';
import StatusTranser from './pages/statusTransfer';
import ManageTopUp from './pages/manageTopUp';
import DetailTopUp from './pages/detailTopUp';
import PaymentGateway from './pages/optionTopup/PaymentGateway'
function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={LandingPages} />
        <PublicRoute restricted={true} path="/login" component={Login} />
        <PublicRoute restricted={true} path="/register" component={Register} />
        <PublicRoute restricted={true} path="/forgot-password" component={ForgotPassword} />
        <PublicRoute restricted={true} path="/resetpassword/:token" component={ResetPassword} />
        <Route path="/verified-accounts/:token" component={verifiedAccounts} />
        <PrivateRoutePin roles={['member']} path="/pin" component={CreatePin} />
        <Route path="/pin-success" component={PinSuccess} />
        <PrivateRoute roles={['member', 'admin']} path="/dashboard" version={2} component={Home} />
        <PrivateRoute roles={['member']} version={2} path="/topup" component={HowToTopUp} />
        <PrivateRoute roles={['member']} version={2} path="/transfer" component={SearchReceiver} />
        <PrivateRoute roles={['member','admin']} version={2} path="/personal-info" component={PersonalInfo} />
        <PrivateRoute roles={['member','admin']} version={2} path="/change-password" component={ChangePassword} />
        <PrivateRoute roles={['member','admin']} version={2} path="/manage-phone-number" component={ManagePhone} />
        <PrivateRoute roles={['member','admin']} version={2} path="/profile" component={Profile} />
        <PrivateRoute roles={['member','admin']} version={2} path="/edit-profile" component={EditProfile} />
        <PrivateRoute roles={['member']} version={2} path="/change-pin" component={ChangePin} />
        <PrivateRoute roles={['member']} version={2} path="/new-pin" component={NewPin} />
        <PrivateRoute roles={['member','admin']}version={2} path="/add-phone-number" component={AddPhoneNumber} />
        <PrivateRoute roles={['member']} version={2} path="/input-amount/:user_id" component={InputAmount} />
        <PrivateRoute roles={['member','admin']} version={2} path="/transaction-history" component={TransactionHistory} />
        <PrivateRoute roles={['member']} version={2} path="/confirmation-transfer/:user_id" component={Confirmation} />
        <PrivateRoute roles={['member']} version={2} path="/option-topup" component={OptionTopup} />
        <PrivateRoute roles={['member']} version={2} path="/option-transfer" component={DirectTransfer} />
        <PrivateRoute roles={['member']} version={2} path="/option-payment-gateway" component={PaymentGateway}/>
        <PrivateRoute
          roles={['member','admin']}
          version={2}
          path="/status-transfer/:transaction_id"
          component={StatusTranser}
        />
        <PrivateRoute roles={['admin']} version={2} path="/manage-topup" component={ManageTopUp} />
        <PrivateRoute roles={['admin']} version={2} path="/detail-topup/:id" component={DetailTopUp} />
      </Switch>
    </Fragment>
  );
}

export default App;
