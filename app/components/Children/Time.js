import React from 'react'

export default class Time extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(<div className="col-xs-12 centerText" id="time">
			<span id="subTime">{this.props.time+" "}</span>
			<div className="row">
				<div className="col-xs-12 centerText">
					<span id="date">{this.props.date+" "}</span><span id="dayOfWeek">{this.props.today+" "}</span>
				</div>
			</div>
		</div>);
	};
}