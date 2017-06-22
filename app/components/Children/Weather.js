import React from 'react'

export default class Weather extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(<div className="row">
			<h1>This section will display the weather. Currently it is: {this.props.weather}</h1>
		</div>);
	};
}