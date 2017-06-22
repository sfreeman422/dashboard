import React from 'react'
import Weather from './Children/Weather.js'
import Calendar from './Children/Calendar.js'

export default class Main extends React.Component{
	constructor(){
		super();
		this.state = {
			calendar: "do something",
			weather: "95 degrees and rising"
			//More states as we determine which services we want to integrate here. 
		}
	}
	render(){
		return(<div className="content">
			<div className="row">
				<h1> Welcome, to the first iteration of the dashboard</h1>
			</div>
			<Weather weather={this.state.weather}/>
			<Calendar calendar={this.state.calendar}/>
		</div>);
	};
}