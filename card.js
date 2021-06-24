import React from 'react';
import {Button} from 'semantic-ui-react'
import moment from 'moment';
import './styles.css'
const refresh = () =>{
      window.location.reload();
}

const weatherCard = ({weatherData}) => (
      <div className="main">
            <div className="header">
            <h2>City: {weatherData.name}</h2>
            <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh}/>
            </div>            
            <p className="temp-full">{weatherData.main.temp_max}&deg;C/{weatherData.main.temp_min}&deg;C</p>
                  <div className="flex">
                        <p className="desc">{weatherData.weather[0].description}</p>
                        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p> 
                  </div>
                  <div className="flex">
                        <p className="temp">Temperature: {weatherData.main.temp} &deg;C</p>
                        <p className="temp">Humidity: {weatherData.main.humidity}%</p>
                  </div>
                  <div className="flex">
                        <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                        <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                  </div>   
                  <div className="a">
                  <div className="flex">
                        <p>Pressure: {weatherData.main.pressure} pa</p>
                        <p>Visibility: {(weatherData.visibility)/1000} Km</p>                        
                  </div>              
                  <div className="flex">
                        <p>Wind: {weatherData.wind.speed} m/s</p>
                        <p>Temperature feel: {weatherData.main.feels_like} &deg;C</p>                     
                  </div>
                  </div>
            </div>
)
export default weatherCard;