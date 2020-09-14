const initialState = {
  weatherInfo: {},
};

export default function (state, action) {
  switch (action.type) {
    case "SET_WEATHER_INFO":
      return { ...state, weatherInfo: action.payload };

    default:
      return { ...state };
  }
}
