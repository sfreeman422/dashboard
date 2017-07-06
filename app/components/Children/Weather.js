import React from 'react'

export default class Weather extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(<div className="row" id="weather">
			<h1>This section will display the weather. Currently it is: {this.props.temperature}</h1>
			<h2>The weather is: {this.props.weather}</h2>
			<h3>And the weather picture should be: {this.props.weatherPic}</h3>
			<h4>You are in: {this.props.location}</h4>
		</div>);
	};
}