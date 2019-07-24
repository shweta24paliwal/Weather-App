import React,{Components} from 'react';


function ShowWeatherDetails(props){
    let data = null;
    const weather = props.weatherDetails;
        if(weather){
            var minTemp = Math.ceil(weather.main.temp_min-273.15);
            var maxTemp = Math.ceil(weather.main.temp_max-273.15);
            var tempCel = Math.ceil(weather.main.temp-273.15);
            data =(
                <div className="weather-detail">
                    <h3 className='heading'>Weather details of: {weather.name}[{weather.sys.country}]</h3>
                    <p><span className='entity'>Temp: </span>{tempCel} <span className='celsius'>Degree/celsius</span></p>
                    <p><span className='entity'>Min. Temp: </span>{minTemp} <span className='celsius'>Degree/celsius</span></p>
                    <p><span className='entity'>Max. Temp: </span>{maxTemp} <span className='celsius'>Degree/celsius</span></p>
                    <p><span className='entity'>Humidity is: </span>{weather.main.humidity}</p>
                    <p><i>{weather.weather[0].description}</i></p>
                </div>
            )
        }
        return data
            

    
}
export default ShowWeatherDetails