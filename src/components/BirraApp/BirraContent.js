import React, { useState } from "react";
import BirraForm from "./BirraForm";
import BirraUsers from "./BirraUsers";

import "../../styles/BirraApp/BirraContent.scss";

const BirraContent = ({ getWeather }) => {
  const dataUsers = [
    { id: 1, firstName: "Oswaldo", lastName: "Alvarez", age: 25 },
    { id: 2, firstName: "Joesias", lastName: "Alvarez", age: 54 },
    { id: 3, firstName: "Yuliana", lastName: "Alvarez", age: 20 },
    { id: 4, firstName: "Yuly", lastName: "Delgado", age: 52 },
    { id: 5, firstName: "Olga", lastName: "Rodriguez", age: 75 },
  ];
  const [users, setUsers] = useState(dataUsers);
  return (
    <div className="Birra-content">
      <div className="Birra-components">
        <BirraForm getWeather={getWeather} users={users} />
        <BirraUsers dataUsers={dataUsers} users={users} setUsers={setUsers} />
      </div>
    </div>
  );
};
export default BirraContent;
