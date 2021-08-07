import React, { Fragment } from "react";
import Login from "./pages/login";
import LandingPages from "./pages/LandingPages";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotpassword";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <Fragment>
        <Switch>
          <Route exact path="/" component={LandingPages}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>      
    </Fragment>
  );
}

export default App;
