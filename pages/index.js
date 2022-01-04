import React, { useState } from 'react';
import Nav from '../components/Nav.jsx';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Cards from '../components/Cards.jsx';
const apiKey = '95ec01f8b61f542bd3d75bc4a0bf4394';

export default function Home() {
  const [cities, setCities] = useState([]);
  console.log(cities.length);

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
    console.log(cities.length);
  }

  async function onSearch(cityToSearch) {
    try {
      let jsonCity = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&units=metric&appid=${apiKey}`
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

      cities.some((e) => e.name === city.name)
        ? Swal.fire({
            title: 'Error!',
            text: "You've already searched for that city!",
            icon: 'warning',
            confirmButtonText: 'Alright',
          })
        : setCities((oldCities) => [...oldCities, city]);
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'The city was not found.',
        icon: 'error',
        confirmButtonText: 'Alright',
      });
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
