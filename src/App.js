import React, { Fragment } from "react";
import Login from "./pages/login";
import Register from "./pages/register";

import { Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Fragment>
  );
}

export default App;
