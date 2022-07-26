import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
// 499d737b2bec38bd9d9551149102200a
// 현재 위치 기반의 날씨가 보인다.
// 날씨 정보에는 도시, 섭씨 , 화씨 날씨 상태가 있다.
// 5개의 버튼이 있다. 1개는 현재 위치 도시/ 나머지 4개 아무 도시
// 도시 버튼을 클릭할때마다 도시별 날씨가 나온다.
// 데이터를 들고오는 동안 로딩 스피너가 돈다.

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=499d737b2bec38bd9d9551149102200a&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherBycity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=499d737b2bec38bd9d9551149102200a&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity('');
    } else {
      setCity(city);
    }
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherBycity();
    }
  }, [city]);

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader
            color="#f88c6b"
            loading={loading}
            size={150}
          />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} handleCityChange={handleCityChange} City={city} />
        </div>
      )}
    </div>
  );
}

export default App;
