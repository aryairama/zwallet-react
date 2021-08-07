import React, { Fragment } from "react";
import Login from "./pages/login";
import LandingPages from "./pages/LandingPages";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPages}/>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
