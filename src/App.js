import React from 'react';
import {FeelsLike, TempMin, TempMax, Humidity, Wind, Visibility, Sunrise, Sunset, Clouds} from './components/Sections'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import DataProvider from './context/Data'

class App extends React.Component {
 
render(){
  return(
  <>
  <DataProvider>
  <SearchBar />
	<div className="container">
    <div className="weather-head">
		  <Header />
    </div>
		<div className="weather-body">
			<div className="row">
        <FeelsLike />
        <TempMin />
        <TempMax />
			</div>
			<div className="row">
        <Humidity />
        <Wind />
        <Visibility />
			</div>
			<div className="row">
				<Sunrise />
				<Sunset />
				<Clouds />
			</div>
		</div>
	</div>
  </DataProvider>
  </>
  );
}
}

export default App;
