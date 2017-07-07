import React from 'react'

export default class Sun extends React.Component{
	constructor(){
		super();
    }
    //Warning: the sunriseData and sunsetData divs are not going to be responsive when configured this way.
    //We will need to implement Flexbox here to make this happen. 
	render(){
		return(<div className="col-xs-4 centerText" id="sun">
                <div className="sunData">
                    <div className="sunriseData">
                        <i className="wi wi-horizon-alt"/>
                        <h1>{this.props.sunrise}</h1>
                    </div>
                    <div className="sunsetData">
                        <i className="wi wi-horizon"/>
                        <h1>{this.props.sunset}</h1>
                    </div>
                </div>
			</div>
		)
	}
}