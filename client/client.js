
// this import feature is ES6 syntax
import React from 'react'
import {render} from 'react-dom'
//var render = require('react-dom').render()
import App from '../components/App.js'

/*
* webpack is the build tool that allows you to go through your app, Gives entry point to cline.js
* Says it needs React, it needs render, import App
* Render App into the <div id="app></div>
* */
render (
    <App/>,
    document.getElementById('app')
)




