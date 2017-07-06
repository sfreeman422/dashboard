import React from 'react'

export default class Calendar extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(<div className="col-xs-4 centerText" id="calendar">
			<div className="calDisplay">
				<h1>{this.props.day}</h1>
				<h2>{this.props.month}</h2>
			</div>
			<h2>Your next task is to code more</h2>
		</div>);
	};
}