import React from "react";
import { Link } from "react-router-dom";

import "../../styles/BirraApp/BirraHeader.scss";

function BirraHeader() {
  return (
    <div className="Birra-header">
      {/* <div className="Birra-header__content">
        <div className="Birra-header__wrapper-link" key="1">
          <Link className="Birra-header__content-link" to="/">
            Home
          </Link>
        </div>
        <div className="Birra-header__wrapper-link" key="2">
          <Link className="Birra-header__content-link" to="/objetivo">
            Objetivo
          </Link>
        </div>
      </div> */}
    </div>
  );
}
export default BirraHeader;
