import React from 'react'
import moment from 'moment'

export default class Weather extends React.Component{
	constructor(){
		super();
		this._determineWeatherIcon = this._determineWeatherIcon.bind(this); 
	}
		_determineWeatherIcon(weatherProp){
		let sunrise = moment(this.props.sunrise,"hh:mm:a");
		let sunset = moment(this.props.sunset,"hh:mm:a");
		let currentTime = moment(this.props.currentTime,"hh:mm:a");
		let isNight;
		if((currentTime).isAfter(sunset) || (currentTime).isBefore(sunrise)){
			isNight = true; 
		}
		else{
			isNight = false; 
		}

		if(weatherProp == "chanceflurries"){
			if(isNight == false)return "wi wi-day-snow"
				else return "wi wi-night-snow"
		}
		else if(weatherProp == "chancerain"){
			if(isNight == false)return "wi wi-day-rain"
				else return "wi wi-night-rain"
		}
		else if(weatherProp == "chancesleet"){
			if(isNight == false)return "wi wi-day-sleet"
				else return "wi wi-night-sleet"
		}
		else if(weatherProp == "chancesnow"){
			if(isNight == false)return "wi wi-day-snow"
				else return "wi wi-night-snow"
		}
		else if(weatherProp == "chancestorms" || weatherProp == "chancetstorms"){
			if(isNight == false)return "wi wi-day-sprinkle"
				else return "wi wi-night-sprinkle"
		}
		else if(weatherProp == "clear"){
			if(isNight == false)return "wi wi-day-sunny"
				else return "wi wi-night-clear"
		}
		else if(weatherProp == "cloudy"){
			return "wi wi-cloud";
		}
		else if(weatherProp == "flurries"){
			if(isNight == false)return "wi wi-day-snow";
				else return "wi wi-night-snow"
		}
		else if(weatherProp == "fog"){
			if(isNight == false)return "wi wi-day-fog";
				else return "wi wi-night-fog"
		}
		else if(weatherProp == "hazy"){
			return "wi wi-day-haze";
		}
		else if(weatherProp == "mostlycloudy"){
			if(isNight == false)return "wi wi-cloudy";
				else return "wi wi-night-alt-cloudy"
		}
		else if(weatherProp == "mostlysunny"){
			if(isNight == false)return "wi wi-day-sunny-overcast";
				else return "wi wi-night-alt-cloudy"
		}
		else if(weatherProp == "partlycloudy"){
			if(isNight == false)return "wi wi-day-cloudy";
				else return "wi wi-night-alt-cloudy"
		}
		else if(weatherProp == "partlysunny"){
			if(isNight == false)return "wi wi-day-sunny-overcast";
				else return "wi wi-night-alt-cloudy"
		}
		else if(weatherProp == "sleet"){
			if(isNight == false)return "wi wi-day-sleet";
				else return "wi wi-night-sleet"
		}
		else if(weatherProp == "rain"){
			if(isNight == false)return "wi wi-day-rain";
				else return "wi wi-night-rain"
		}
		else if(weatherProp == "snow"){
			if(isNight == false)return "wi wi-day-snow";
				else return "wi wi-night-snow"
		}
		else if(weatherProp == "sunny"){
			if(isNight == false)return "wi wi-day-sunny";
				else return "wi wi-night-clear"
		}
		else if(weatherProp == "tstorms"){
			if(isNight == false)return "wi wi-day-storm-showers";
				else return "wi wi-night-alt-storm-showers"
		}
		else if(weatherProp == "unknown"){
			if(isNight == false)return "wi wi-day-cloudy-high";
				else return "wi wi-stars"
		}
		else if(weatherProp == "cloudy"){
			if(isNight == false)return "wi wi-day-cloudy";
				else return "wi wi-night-alt-cloudy"
		}
		else if(weatherProp == "partlycloudy"){
			if(isNight == false)return "wi wi-day";
				else return "wi wi-night-alt-cloudy"
		}
	}
	render(){
		return(<div className="col-xs-4 centerText" id="weather">
			<i className={this._determineWeatherIcon(this.props.weatherPic)}></i>
			<h1>{this.props.temperature} & {this.props.weather}</h1>
			<h3>{this.props.location}</h3>
		</div>);
	};
}