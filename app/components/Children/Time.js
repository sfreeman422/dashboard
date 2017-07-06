import React from 'react'

export default class Weather extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(<div className="row" id="time">
			<h1>{this.props.time}</h1>
            <h2>{this.props.date}</h2>
            <h3>{this.props.day}</h3>
		</div>);
	};
}