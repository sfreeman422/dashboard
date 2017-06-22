import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

//Import the children
import Main from './components/Main.js'


ReactDOM.render(
	<BrowserRouter>
		<Route path="/" component={Main}/>
	</BrowserRouter>,
	document.getElementById("app")
)