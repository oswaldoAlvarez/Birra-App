import React from "react";
import { useSelector } from "react-redux";

import "../../styles/BirraApp/BirraForm.scss";

const BirraForm = ({ getWeather, users }) => {
  const { weatherInfo } = useSelector((state) => state.front);
  const getBirra = () => {
    //Desde acá se podrá saber cuantas birras por persona comprar.//
    let temp = weatherInfo.main.temp;
    if (temp < 20) {
      return `Se deberán comprar 0.75ml de birra por persona.`;
    } else if (temp <= 24) {
      return `Se deberán comprar 1 litro de birra por persona.`;
    } else if (temp > 24) {
      return `Se deberán comprar 2 litros de birra por persona.`;
    }
  };

  const howManyBirrasBuy = () => {
    //Desde acá se podrá saber cuantos sixpacks comprar para la MeetUp.//
    let arrayEspacios = users.length;
    let temp = weatherInfo.main.temp;
    let menor20 = arrayEspacios * 0.75;
    let menorIgual24 = arrayEspacios * 1;
    let mayor24 = arrayEspacios * 2;
    if (temp < 20) {
      return `En este caso deberás comprar ${Math.ceil(
        menor20 / 6
      )} sixpacks para la MeetUp.`;
    } else if (temp <= 24) {
      return `En este caso deberás comprar ${Math.ceil(
        Math.ceil(menorIgual24 / 6)
      )} sixpacks para la MeetUp.`;
    } else if (temp > 24) {
      return `En este caso deberás comprar ${Math.ceil(
        Math.ceil(mayor24 / 6)
      )} sixpacks para la MeetUp.`;
    }
  };

  return (
    <form className="formWrapper" onSubmit={getWeather}>
      <div className="formulario">
        <div className="formTitle">
          <div className="titleWeatherApp">
            {weatherInfo
              ? `Temperatura de hoy en ${weatherInfo.name} es:`
              : "Presiona para saber Temperatura y cantidad de birras a comprar."}
          </div>
        </div>
        <input
          type="text"
          name="city"
          placeholder="Inserta Ciudad..."
          className="inputForm"
          autoFocus
          required
        />
        <button className="btnForm">Consultar</button>
      </div>
      {weatherInfo ? (
        <div className="general_info">
          <div>
            <div>
              <b className="margin-r5">Localización:</b>
              {weatherInfo ? weatherInfo.name : ""}
            </div>
            <div>
              <b className="margin-r5">Temperatura:</b>
              {weatherInfo ? weatherInfo.main.temp + "°C" : ""}
            </div>
            <div>
              <b className="margin-r5">Birras por persona :</b>
              {getBirra()}
            </div>
          </div>
          <div>
            <div style={{ marginBottom: 15 }}>
              <b className="margin-r5">Sixpacks a comprar:</b>
              {howManyBirrasBuy()}
            </div>
            <button className="btnForm" onClick={howManyBirrasBuy()}>
              Recalcular
            </button>
          </div>
        </div>
      ) : (
        <div className="general-info__addInfo">
          <div className="general-info_addInfo-city">
            Por favor ingresa una ciudad de Argentina.
          </div>
        </div>
      )}
    </form>
  );
};
export default BirraForm;
