import React from "react";
import { Route, Switch } from "react-router-dom";
import BirraContainer from "../src/components/BirraApp/BirraContainer";
// import BirraObjetivo from "./components/BirraApp/BirraObjetivo";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={BirraContainer} />
        {/* <Route exact path="/objetivo" component={BirraObjetivo} /> */}
      </Switch>
    </div>
  );
}

export default Routes;
