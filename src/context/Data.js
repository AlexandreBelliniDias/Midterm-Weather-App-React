import React, { createContext, Component} from 'react';
export const Data = createContext();

class DataProvider extends Component {
    state = {
        CityName: 'Vancouver',
        WeatherDescript: '',
        TemperatureCelsius: '',
        FeelsLike:'',
        MinTemperatureCel:'',
        MaxTemperatureCel:'',
        Humidity:'',
        WindSpeed:'',
        Visibility:'',
        Sunrise:'',
        Sunset:'',
        Clouds:'',
        CityInput:'Vancouver'
    }
    InputChange = (event) =>{
        this.setState({
          CityInput: event.target.value
        })
    }
    handleSubmit = (event) => {
        this.componentDidMount ()
        event.preventDefault()
    }
    toCelsius = (number) =>{
       return Math.round(number -273.15);
    }
    toKM = (number) =>{
       return Math.round(number / 1000)
    }
    fixDate = (number) =>{
        let dt = new Date(number * 1000)
        return dt.getHours() + ":" + ('0' + dt.getMinutes()).substr(-2)
    }
    async componentDidMount () {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.CityInput + '&APPID=58a79b5362d491e694efaa88209d5241'
        const response = await fetch(url)
        const json = await response.json()
      
        this.setState({
        CityName: json.name,
        CountryName: json.sys.country,
        WeatherDescript: json.weather[0].description,
        TemperatureCelsius: this.toCelsius(json.main.temp),
        FeelsLike: this.toCelsius(json.main.feels_like),
        MinTemperatureCel: this.toCelsius(json.main.temp_min),
        MaxTemperatureCel: this.toCelsius(json.main.temp_max),
        Humidity:json.main.humidity,
        WindSpeed: json.wind.speed,
        Visibility: this.toKM(json.visibility),
        Sunrise: this.fixDate(json.sys.sunrise),
        Sunset: this.fixDate(json.sys.sunset),
        Clouds:json.clouds.all
        })
    }
    
    render (){
    return(
    <Data.Provider value = {{...this.state, InputChange: this.InputChange, handleSubmit: this.handleSubmit }}>
        {this.props.children}
    </Data.Provider>
    );
    }
}

export default DataProvider;