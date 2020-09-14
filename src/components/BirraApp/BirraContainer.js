import React from "react";
import BirraHeader from "./BirraHeader";
import BirraContent from "./BirraContent";
import { useDispatch } from "react-redux";

import "../../styles/BirraApp/BirraContainer.scss";

const BirraContainer = () => {
  const dispatch = useDispatch();

  let getWeather = async (e) => {
    //Desde acá se puede conectar a la API del clima.
    e.preventDefault();
    const { city } = e.target.elements;
    const cityValue = city.value;
    const API_KEY = "eaa3d6d89c8b2d5ef5c7703276f29570";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},ar&appid=${API_KEY}&units=metric`;
    const response = await fetch(API_URL);
    const data = await response.json();
    try {
      if (data.main.temp) {
        dispatch({ type: "SET_WEATHER_INFO", payload: data });
      }
    } catch (error) {
      alert("Ingresá una ciudad de Argentina");
    }
  };

  return (
    <div className="Birra-container">
      <BirraHeader />
      <BirraContent getWeather={getWeather} />
    </div>
  );
};
export default BirraContainer;
