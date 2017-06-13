/**
 * Created by bcuser on 6/12/17.
 */
/**
 * Created by charlie on 4/8/17.
 */

import React from 'react';
import './App.css';

class Input extends React.Component {

    constructor() {
        super();
        this.state = {userInput: ''}
    }

    handleUserInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    };

    render()  {
        return (
            <div className="App">
                <h1>User Input Demo</h1>
                <p>Enter some text and it will be mirrored back</p>
                <input
                    type="text"
                    onChange={this.handleUserInput}
                    value={this.state.userInput}/>
                <p>{this.state.userInput}</p>
            </div>
        );
    }
}

export default Input;

/*
 var React = require('react');
 var ReactDOM = require('react-dom');
 var Input = React.createClass({
 getInitialState: function() {
 return {userInput: ''}
 },
 handleUserInput: function(e) {
 this.setState({
 userInput: e.target.value
 })
 },
 render: function () {
 return (
 <div>
 <input type="text" onChange={this.handleUserInput} value={this.state.userInput} />
 <h1>{this.state.userInput}</h1>
 </div>
 );
 }
 });
 ReactDOM.render(
 <Input />,
 document.getElementById('app')
 );
 */