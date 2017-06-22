import React from 'react'

export default class Profile extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(<div className="row">
				<h1>Welcome to Life.io, {this.props.firstName}.</h1>
			</div>
		)
	}
}