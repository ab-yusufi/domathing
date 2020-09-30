import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';


import Header from './layout/Header';
import Footer from './layout/Footer';
import Geoemetry from './Components/Geometry/Geometry';

const App = () => {
  var algebra = require('algebra.js');
  var expr = new algebra.Expression("x");
  expr = expr.subtract(3);
  expr = expr.add("x");
 
  console.log(expr.toString());

  return (
    <div>
      <Header/>
      <Geoemetry/>
      <Footer/>
    </div>
  );
}

export default App;
