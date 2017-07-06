import React from 'react'
import moment from 'moment'

import Profile from './Children/Profile.js'
import Weather from './Children/Weather.js'
import Calendar from './Children/Calendar.js'
import Time from './Children/Time.js'
import keys from '../../private/keys.js'

export default class Main extends React.Component{
	constructor(){
		super();
		this.state = {
			//Calendar component Data
			time: moment().format("hh:mm"+"a"),
			date: moment().format("MMMM Do YYYY"),
			day: moment().format("D"),
			month: moment().format("MMMM"),
			today: moment().format("dddd"),
			//Profile component data
			firstName: 'Steve',
			userPic: "http://stevefreeman.io/images/profile.png",
			//Weather Component data
			userLoc: "loading..",
			hasWeatherData: false,
			sunrise: "loading...",
			sunset: "loading...",
			weather: "loading...",
			temperature: "loading...",
			weatherPic: "loading..."
			//More states as we determine which services we want to integrate here. 
		}
		this._getTime = this._getTime.bind(this);
		this._getLocation = this._getLocation.bind(this);
		this._locationThenWeather = this._locationThenWeather.bind(this)
	}
	//Gets the time for the clock component
	_getTime(){
		this.setState({
			time: moment().format("hh:mm"+"a"),
			date: moment().format("MMMM Do YYYY"),
			today: moment().format("dddd")
		});
	}
	//Gets location from the browser for weather and other components.
	_getLocation(){
		return new Promise((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const location = {
							lat: position.coords.latitude,
							long: position.coords.longitude
						};
						return resolve(location);
					},
					(error) => {
						return reject(error);
					});
			});
	}
	_locationThenWeather(){
			let currentMinute = moment().format("mm");
			//If the current time isnt an o'clock or if weather data isnt already included, we run the code to get location and get the weather forecast. 
			if(currentMinute == "00" || this.state.hasWeatherData == false){
				return new Promise((resolve, reject) => {
					return this._getLocation().then((locationObject) => {
						if (!locationObject) {
							const error = "Location was undefined!";
							return reject(error);
						}
						// Makes the API call to weatherunderground, then assigns forecast, time and weather icon data to the corresponding states. 
						$.ajax({
							url: "https://api.wunderground.com/api/"+keys.wunderground+"/hourly/q/"+locationObject.lat+","+locationObject.long+".json"
							}).done((response) =>{
								this.setState({
									weather: response.hourly_forecast[0].condition,
									temperature: response.hourly_forecast[0].temp.english+"F",
									weatherPic: response.hourly_forecast[0].icon
								});
								this.setState({hasWeatherData: true});
							});
						//Gets the location from the reverse geocode api provided by Google. This enables us to show the actual name of the location that the user is in. 
						$.ajax({
							url: "https://maps.googleapis.com/maps/api/geocode/json?latlng="+locationObject.lat+","+locationObject.long+"&sensor=true"
						}).done((geoloc) =>{
							this.setState({
								userLoc: geoloc.results[0].address_components[2].short_name+", "+ geoloc.results[0].address_components[4].short_name
							});
						});
						//Get the sunrise/sunset data
						$.ajax({
							url:"https://api.wunderground.com/api/"+keys.wunderground+"/astronomy/q/"+locationObject.lat+","+locationObject.long+".json"
						}).done((sundata)=>{
							let sunriseString = "0"+sundata.sun_phase.sunrise.hour+":"+sundata.sun_phase.sunrise.minute+"am";
							let sunsetString = "0"+(sundata.sun_phase.sunset.hour-12)+":"+sundata.sun_phase.sunset.minute+"pm";
							let sunriseMoment = moment(sunriseString, "hh:mm:a");
							let sunsetMoment = moment(sunsetString, "hh:mm:a");
							this.setState({
								sunrise: sunriseMoment,
								sunset: sunsetMoment
							});
						})
						return resolve(locationObject);
					})
					.catch((error) => {
						return reject(error);
					});
				});
			}
		}
	componentDidMount(){
		this._locationThenWeather();
		this._getTime();
		//Runs the locationThenWeather function every 60 seconds. We do this to avoid 6 API calls within the one minute in which we are at a :00 time. 
		let weatherInterval = setInterval(this._locationThenWeather, 60000);
		//Get the time every 1/10 of a second, this will also setState for time to the current time. 
		let timeInterval = setInterval(this._getTime, 100);
	}
	render(){
		return(<div className="content">
				<div className="row">
					<Profile firstName={this.state.firstName} userPic={this.state.userPic} time={this.state.time}/>
				</div>
				<div className="row">
					<Weather location = {this.state.userLoc} weather={this.state.weather} temperature={this.state.temperature} weatherPic={this.state.weatherPic} sunrise={this.state.sunrise} sunset={this.state.sunset}/>
					<Calendar day={this.state.day} month={this.state.month}/>
				</div>
		</div>);
	};
}