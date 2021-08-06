import React, { Fragment } from "react";
import Login from "./pages/login";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
