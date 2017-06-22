import React from 'react'
import Profile from './Children/Profile.js'
import Weather from './Children/Weather.js'
import Calendar from './Children/Calendar.js'

export default class Main extends React.Component{
	constructor(){
		super();
		this.state = {
			calendar: "do something",
			weather: "95 degrees and rising",
			firstName: 'Steve'
			//More states as we determine which services we want to integrate here. 
		}
	}
	render(){
		return(<div className="content">
			<Profile firstName={this.state.firstName} />
			<Weather weather={this.state.weather}/>
			<Calendar calendar={this.state.calendar}/>
		</div>);
	};
}