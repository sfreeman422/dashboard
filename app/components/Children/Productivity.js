import React from 'react';

export default class Productivity extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(<div className="col-xs-12 centerText">
                {this.props.stats}
               </div>
            )
    }
}