import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import WeatherBox from './component/WeatherBox';
import WeatherButton from "./component/WeatherButton";
// 499d737b2bec38bd9d9551149102200a
// 현재 위치 기반의 날씨가 보인다.
// 날씨 정보에는 도시, 섭씨 , 화씨 날씨 상태가 있다.
// 5개의 버튼이 있다. 1개는 현재 위치 도시/ 나머지 4개 아무 도시
// 도시 버튼을 클릭할때마다 도시별 날씨가 나온다.
// 데이터를 들고오는 동안 로딩 스피너가 돈다.

function App() {

  const [weather, setWeather] = useState(null);
  const [cityweather,setCityWeather] = useState(null);

  const getWeatherByCity = async(city)=> {
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=499d737b2bec38bd9d9551149102200a`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    setCityWeather(data);
  }

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon)
      getWeatherByCity(paris);
    });
  };

  const getWeatherByCurrentLocation = async(lat,lon)=> {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=499d737b2bec38bd9d9551149102200a&units=metric`
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);
  
  return <div>
    <div className="container">
    <WeatherBox weather={weather}/>
    <WeatherButton/>
    </div>
  </div>;
}

export default App;
