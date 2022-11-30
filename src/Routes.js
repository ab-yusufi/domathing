import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

import Geometry from './Components/Geometry/Geometry';
import Home from './Components/Core/Home';

const Routes = () => {
    return(
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/> 
          <Route path="/geometry" exact  component={Geometry}/>
        </Switch>
      </Router>  
    )
    


}

export default Routes