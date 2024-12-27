import React, { useState, useEffect } from "react";
import axios from "axios";
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiFog } from "react-icons/wi";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [city, setCity] = useState("Goiânia");
  const [theme, setTheme] = useState("light");

  const apiKey = "208cbf8f7fa2a1ca94da899a9e3fa29a";

  const weatherTranslations = {
    "clear sky": "Céu limpo",
    "few clouds": "Poucas nuvens",
    "scattered clouds": "Nuvens dispersas",
    "broken clouds": "Nuvens fragmentadas",
    "light rain": "Chuva leve",
    "moderate rain": "Chuva moderada",
    rain: "Chuva",
    thunderstorm: "Tempestade",
    snow: "Neve",
    mist: "Névoa",
    "overcast clouds": "Nublado",
  };

  // Busca o clima atual
  const fetchCurrentWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Erro ao buscar clima atual:", error.message);
    }
  };

  // Busca previsão para os próximos 5 dias (filtra datas únicas)
  const fetchForecast = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
      );
      const forecastList = response.data.list;

      // Filtra apenas um bloco de previsão por dia
      const uniqueDays = {};
      const filteredForecast = forecastList.filter((item) => {
        const date = item.dt_txt.split(" ")[0];
        if (!uniqueDays[date]) {
          uniqueDays[date] = true;
          return true;
        }
        return false;
      });

      setForecastData(filteredForecast.slice(0, 5)); // Pega os próximos 5 dias
    } catch (error) {
      console.error("Erro ao buscar previsão futura:", error.message);
    }
  };

  // Busca clima baseado em geolocalização
  const fetchWeatherByLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
          );
          setWeatherData(response.data);
        } catch (error) {
          console.error("Erro ao buscar com geolocalização:", error.message);
        }
      });
    } else {
      alert("Geolocalização não suportada pelo navegador.");
    }
  };

  useEffect(() => {
    fetchCurrentWeather();
    fetchForecast();
    const hour = new Date().getHours();
    setTheme(hour >= 6 && hour <= 18 ? "light" : "dark");
  }, []);

  const renderIcon = (weather) => {
    switch (weather) {
      case "Clear":
        return <WiDaySunny className="icon" />;
      case "Clouds":
        return <WiCloud className="icon" />;
      case "Rain":
        return <WiRain className="icon" />;
      case "Snow":
        return <WiSnow className="icon" />;
      default:
        return <WiFog className="icon" />;
    }
  };

  return (
    <div className={`app ${theme}`}>
      <h1>Previsão do Tempo</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Digite a cidade"
      />
      <div className="buttons-container">
        <button onClick={() => { fetchCurrentWeather(); fetchForecast(); }}>
          Buscar
        </button>
        <button onClick={fetchWeatherByLocation}>Usar minha localização</button>
      </div>

      {weatherData && (
        <div className="weather-info">
          {renderIcon(weatherData.weather[0].main)}
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Umidade: {weatherData.main.humidity}%</p>
          <p>
            Clima:{" "}
            {weatherTranslations[weatherData.weather[0].description] ||
              weatherData.weather[0].description}
          </p>
        </div>
        
      )}

      {forecastData.length > 0 && (
        <div className="forecast">
          
          {forecastData.map((item, index) => (
            <div key={index} className="forecast-item">
              <p>{new Date(item.dt_txt).toLocaleDateString("pt-BR")}</p>
              <p>Temp: {item.main.temp}°C</p>
              <p>
                Clima:{" "}
                {weatherTranslations[item.weather[0].description] ||
                  item.weather[0].description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Weather;
