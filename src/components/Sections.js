import React, { Component } from "react";
import {Data} from '../context/Data'

class FeelsLike extends Component {
  static contextType = Data 
    render(){
      const {FeelsLike} = this.context
        return(
        <div className="column">
          <div id="feels_like" className="section col-4 text-center">
            <i className="wi wi-thermometer-internal"></i> 
            <span> 
              Feels like
              <br></br>
              {FeelsLike} 
            </span>
          </div>
        </div>
        )
    }
}

class TempMin extends Component {
  static contextType = Data 
    render(){
      const {MinTemperatureCel} = this.context
        return(
          <div className="column">
            <div id="temp_min" className="section col-4 text-center">
              <i className="wi wi-thermometer-exterior"></i>
              <span>
                Min
                <br></br>
                {MinTemperatureCel}
              </span>
            </div>
          </div>
        )
    }
}

class TempMax extends Component {
  static contextType = Data 
  render(){
    const {MaxTemperatureCel} = this.context
      return(
        <div className="column">
          <div id="temp_max" className="section col-4 text-center">
          <i className="wi wi-thermometer"></i>
          <span>
            Max
            <br></br>
            {MaxTemperatureCel}
            </span>
          </div>
      </div>
      )
  }
}

class Humidity extends Component {
  static contextType = Data 
  render(){
    const {Humidity} = this.context
      return(
        <div className="column">
          <div id="humidity" className="section col-4 text-center">
            <i className="wi wi-humidity"></i>
            <span>
              Humidity
              <br></br>
              {Humidity}
            </span>
          </div>
        </div>
      )
  }
}

class Wind extends Component {
  static contextType = Data 
  render(){
    const {WindSpeed} = this.context
      return(
        <div className="column">
          <div id="wind" className="section col-4 text-center">
            <i className="wi wi-strong-wind"></i>
            <span>
              Wind Speed
              <br></br>
              {WindSpeed}
            </span>
          </div>
        </div>
      )
  }
}

class Visibility extends Component {
  static contextType = Data 
  render(){
    const {Visibility} = this.context
      return(
        <div className="column">
          <div id="visibility" className="section col-4 text-center">
            <i className="wi wi-alien"></i>
              <span>
                Visibility
                <br></br>
                {Visibility}
              </span>
          </div>
        </div>
      )
  }
}

class Sunrise extends Component {
  static contextType = Data 
  render(){
    const {Sunrise} = this.context
      return(
        <div className="column">
          <div id="sunrise" className="section col-4 text-center">
            <i className="wi wi-direction-up"></i>
              <span>
                Sunrise
                <br></br>
                {Sunrise}
              </span>
          </div>
        </div>
      )
  }
}

class Sunset extends Component {
  static contextType = Data 
  render(){
    const {Sunset} = this.context
      return(
        <div className="column">
          <div id="sunset" className="section col-4 text-center">
            <i className="wi wi-direction-down"></i>
            <span>
              Sunset
              <br></br>
              {Sunset}
              </span>
          </div>
        </div>
      )
  }
}

class Clouds extends Component {
  static contextType = Data 
  render(){
    const {Clouds} = this.context
      return(
        <div className="column">
          <div id="clouds" className="section col-4 text-center">
            <i className="wi wi-cloud"></i>
            <span>
              Clouds
              <br></br>
              {Clouds}
              </span>
          </div>
        </div>
      )
  }
}
export {FeelsLike, TempMin, TempMax, Humidity, Wind, Visibility, Sunrise, Sunset, Clouds}