import React, { Component } from "react";
import {Data} from '../context/Data'

class SearchBar extends Component {
    static contextType = Data 
    render(){
        const {CityInput} = this.context
        const {InputChange} = this.context
        const {handleSubmit} = this.context
        return(
        <form onSubmit={handleSubmit}>
            <div id="searchBar">
                <input id = "cityInput" type = "text" placeholder = "Enter city name" value = {CityInput} onChange = {InputChange}></input>
                <button type='submit'>Search</button>
            </div>
        </form>
        )
    }
}
export default SearchBar