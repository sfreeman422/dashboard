import React from 'react'

export default class Profile extends React.Component{
	constructor(){
		super();
	}
	_determineTimeofDay(){
	
	}
	render(){
		return(<div className="col-xs-12 centerText" id="profile">
				<img id="profilePicture" src={this.props.userPic}/>
				<h1>Welcome to Life.io, {this.props.firstName}.</h1>
				<h2>It is currently {this.props.time}</h2>
			</div>
		)
	}
}