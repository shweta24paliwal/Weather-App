import React,{Component} from 'react';
import axios from 'axios';
import ShowWeatherDetails from './ShowWeatherDetails'
import './Weather.css';

class WeatherApp extends Component{
    constructor(){
        super();
        this.state = {
            cityName: "",
            weatherData: null,
            status:null,
            show :true
        }
    }
    getWeatherData = ()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=042b887e28554da2d8e874056ba63f1e`)
        .then((response)=>{
            console.log(response)
            this.setState({
                weatherData:response.data,
                status:response.status
            })
        })
       
        .catch((err)=>{
            this.setState({
                status:404,
                cityName:'',
                weatherData:null
            })
        })
    }
    inputHandler = (e)=>{
        this.setState({
            show:false,
            cityName: e.target.value
        })
    }
    
    render(){
       
        const weather = this.state.weatherData;
        return(
            <div className='main-container'>
                <input type="text"
                    className="search-bar"
                    placeholder="Enter city name!!"
                    value={this.state.cityName}
                    onChange={this.inputHandler}
                />
                <button onClick={this.getWeatherData} className='search-btn'>Search</button>
               
               {this.state.status ===404 &&<div>
                    <h3>City not found. Please try another city.</h3>
               </div>}
               {this.state.status && this.state.weatherData &&<ShowWeatherDetails weatherDetails={weather}/>}
            </div>
        )
    }
}
export default WeatherApp