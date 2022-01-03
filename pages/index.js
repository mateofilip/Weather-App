import React, { useState } from 'react';
import Nav from '../components/Nav.jsx';
import axios from 'axios';
import Cards from '../components/Cards.jsx';
const apiKey = '95ec01f8b61f542bd3d75bc4a0bf4394';

export default function Home() {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  }

  async function onSearch(cityToSearch) {
    try {
      let jsonCity = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&units=metric&appid=${apiKey}`
        // http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=95ec01f8b61f542bd3d75bc4a0bf4394
      );
      let cityData = jsonCity.data;

      const city = {
        id: cityData.id,
        min: Math.round(cityData.main.temp_min),
        max: Math.round(cityData.main.temp_max),
        img: cityData.weather[0].icon,
        wind: cityData.wind.speed,
        temp: Math.round(cityData.main.temp),
        name: cityData.name,
        weather: cityData.weather[0].main,
        clouds: cityData.clouds.all,
        latitud: cityData.coord.lat,
        longitud: cityData.coord.lon,
      };

      setCities((oldCities) => [...oldCities, city]);
    } catch (error) {
      alert('The city was not found');
    }
  }

  function onFilter(cityId) {
    let city = cities.filter((c) => c.id === parseInt(cityId));

    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  }

  return (
    <>
      <Nav onSearch={onSearch} />

      <main>
        <Cards cities={cities} onClose={onClose} />
      </main>
    </>
  );
}
