import React from 'react'

export default class Calendar extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(<div className="row">
			<h1>This section will display the calendar. Your next task is to:  {this.props.calendar}</h1>
		</div>);
	};
}