import React, { Fragment } from "react";
import Login from "./pages/login";

import { Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Route path="/login" component={Login} />
    </Fragment>
  );
}

export default App;
