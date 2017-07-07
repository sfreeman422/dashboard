import React from 'react'

export default class Calendar extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(<div className="col-xs-4 centerText" id="calendar">
			<i className={`icon icon-${this.props.day}`}/>
			<h2>Your next task is to code more</h2>
		</div>);
	};
}