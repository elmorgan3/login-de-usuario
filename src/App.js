import React, { Component } from 'react';
import './App.css';

import {
   Route, BrowserRouter as Router
} from 'react-router-dom';

import Login from "./views/Login";
import Home from "./views/Home";

// Este componente usa el ReactRouter para hacer las rutas a los diferentes componentes.
class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <Route exact path="/" component={Login}/>
               <Route path="/home" component={Home}/>
            </div>
         </Router>
      );
   }
}

export default App;
