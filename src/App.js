import React from 'react';



const App = () => {
  var algebra = require('algebra.js');
  var expr = new algebra.Expression("x");
  expr = expr.subtract(3);
  expr = expr.add("x");
 
  console.log(expr.toString());

  return (
    <div>
    </div>
  );
}

export default App;
