import React, { Component } from 'react';
import './App.css';
import Routes from './route.jsx';
import ReactDOM from 'react-dom';


class App extends Component {
  render() {
    return (

      <div  className="App">
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
        
 
        <Routes /><br/> <br/>
      
      </div>
    );
  }
}

export default  App;