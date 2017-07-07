import React from 'react';
import dummyData from '../../../private/dummyData.js'
let filteredArray = [];
let newObject = {};
export default class Productivity extends React.Component{
    constructor(){
        super();
        this.state ={
            fakeData: dummyData
        }
        this._buildArray = this._buildArray.bind(this);
    }
    _buildArray(){
        //Holds the test data from an API call I made using postman. This will eventually hold real data
        //Once the site is live. 
        let testData = this.state.fakeData;
        console.log(testData);
        //Iterate through the data and create a filtered array of objects that only includes 
        //date, all distracting and all productive. This data will be used to build out a chart. 
        for(var i = 0; i < testData.length; i++){
            //Takes our newObject decalred in the global scope and builds it out with all the necessary details.
                newObject.date = testData[i].date,
                newObject.all_distracting_hours = ((testData[i].all_distracting_hours*-2)+testData[i].all_distracting_hours),
                newObject.all_productive_hours = testData[i].all_productive_hours,
                newObject.dailyProductivityResult = Math.round((newObject.all_productive_hours + newObject.all_distracting_hours)*100)/100
            //Pushes newObject into our filteredArray for easy access. 
            filteredArray.push(
                newObject
                );
        }
        //For testing to determine what is in the array and how the data is strcutured.
        //We will make use of this array to build out the chart. 
        for(var i = 0; i < filteredArray.length; i ++){
            console.log(filteredArray[i]);
        }
        
    }
    componentWillMount(){
        this._buildArray();
    }
    render(){
        return(<div className="col-xs-12 centerText">

               </div>
            )
    }
}