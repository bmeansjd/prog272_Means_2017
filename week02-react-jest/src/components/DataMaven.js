/*

 */
import Address from './Address';
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'





 class DataMaven extends Component {

    render() {
        return (
             <Router><Route exact path="/" component={Address}/></Router>
        );
    }
 }




 export default DataMaven;