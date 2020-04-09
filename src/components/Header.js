import React, { Component } from "react";
import {Data} from '../context/Data'
 
class Header extends Component {
    static contextType = Data 
    render(){
        const {CityName,CountryName,WeatherDescript,TemperatureCelsius} = this.context
        return(
        <>
        <h1 id="location" className="text-center display-4">
            {CityName}
            {CountryName}
        </h1>
        <div id="temperature" className="column2">
            {TemperatureCelsius}
            <i id="icon-thermometer" className="wi wi-thermometer"></i>
        </div>
        <div id="description" className="column2 description">
            <i id="icon-desc" className="wi wi-owm-200"></i>
            <p>{WeatherDescript}</p>
        </div>
        </>
        )
    }


}
export default Header