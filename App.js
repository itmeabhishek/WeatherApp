import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {useState,useEffect} from 'react';
import WeatherCard from './card.js';
import {Dimmer,Loader} from 'semantic-ui-react'
//import axios from 'axios';
function App() {
  const [lat,setLat] = useState([]);
  const [long,setLong] = useState([]);
  const [data,setData] = useState([]);
  const API_KEY = `5c572bcde53c20999b20daddf2482231`;
  useEffect(()=>{
    const fetchData = async() =>{
    navigator.geolocation.getCurrentPosition((position)=>{
     setLat(position.coords.latitude);
     setLong(position.coords.longitude);
   });  
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`)
  const response = await api_call.json();
  console.log(response)
  setData(response)  
  }
  fetchData();
  //console.log(`Latitude: ${lat}, Longitude: ${long}`);
  },[lat,long]);
  return (
    <div className="App">
    {/* <label>Location</label>
    <input type="text"/> */}
    {(typeof data.main != 'undefined')?(
    <WeatherCard weatherData={data}/>
  ):(<div> <Dimmer active><Loader>Loading...</Loader></Dimmer> </div>)}
    </div>
  );
}

export default App;
