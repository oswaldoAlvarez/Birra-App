import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../src/store/configStore";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";

const Application = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
