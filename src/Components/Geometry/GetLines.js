import React, { useState } from 'react'

const GetLines = () => {
    //TODO: all forms of line
    const [forms, setForms] = useState({
      formChoice: 'Slope-Intercept Form',
      slope: null,
      y_intercept: null,
      p: null,
      theta: null,
      x1: null,
      y1: null,
      z1: null,
      x2: null,
      y2: null,
      z2: null,
    })

    const [result, setResult] = useState({
      lineEqu: null,
    })
 
    const {formChoice, slope, y_intercept, p, theta, x1, y1, z1, x2, y2, z2} = forms
    const {lineEqu} = result

    const handleChange = name => e => {
      setForms({...forms, [name]: e.target.value})
    }

    

    const handleLineEquation = () => {
      
      if(formChoice === 'Slope-Intercept Form'){
        
        const lineEqu = slope + 'x - y + ' + y_intercept + ' = 0';
        setResult({...result, lineEqu})
      
      }
      else if(formChoice === 'Point-Slope Form'){

        const lineEqu = slope + 'x - y + ' + String(Number(y1) - (Number(slope) * Number(x1))) + ' = 0';
        setResult({...result, lineEqu});

      } else if(formChoice === 'Two-Point Form'){

        const lineEqu = String(Number(y1) - Number(y2)) + 
            'x + ' + String(Number(x1) - Number(x2)) + "y +" + 
            String((Number(y1) * (Number(x1) - Number(x2))) - (Number(x1) * (Number(y1) - Number(y2)))) + 
            " = 0"
        setResult({...result, lineEqu})

      } 
    } 

    return (
      <div className="card border-primary rounded text-center">
        <div className="card-body">
          <div className="card-title">
            <h1>Get Lines</h1>
            <h4>Select Line Form and Enter the required info</h4>
            <p className="text-info">(Empty will be considered as 0)</p>
          </div>
          
          <div class="dropdown">
            <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {formChoice}
            </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#"
            onClick={(e) => {
              setForms({...forms, formChoice: 'Point-Slope Form'})
            }}>Point-Slope Form</a>
            <a class="dropdown-item" href="#" 
            onClick={(e) => {
              setForms({...forms, formChoice: 'Slope-Intercept Form'})
            }}
            >Slope-Intercept Form</a>
            <a class="dropdown-item" href="#"
            onClick={(e) => {
              setForms({...forms, formChoice: 'Two-Point Form'})
            }}
            >Two-Point Form</a>
            <a class="dropdown-item" href="#"
            onClick={(e) => {
              setForms({...forms, formChoice: 'Normal Form'})
            }}
            >Normal Form</a>
          </div>
        </div>
          <div className="card-text">
            <div className="container">
              {/* Input */}
              {formChoice === 'General Form' || formChoice === 'Slope-Intercept Form' ? 
                (
                <div className="row">
                <div className="col-12">
                <div className="input-group my-2 mt-3">
                  <div className="input-group-prepend">
                    <span className='input-group-text bg-primary text-white'>Slope (m)</span>
                  </div>
                  <input 
                    type="number" 
                    className="form-control"
                    value={slope}
                    onChange={handleChange("slope")}
                    />
                </div>
                </div>
                <div className="col-12">
                <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <span className='input-group-text bg-primary text-white'>y-intercept (c)</span>
                  </div>
                  <input 
                    type="number"
                    className="form-control"
                    value={y_intercept}
                    onChange={handleChange("y_intercept")}
                    />
                </div>
                </div>
              </div>
                )
                : 
                (null)}
              
              {formChoice === 'Two-Point Form' ? 
                (
                  <div className="row">
                
                <div className="col-6">
                <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <span className='input-group-text bg-primary text-white'>x<sub>1</sub></span>
                  </div>
                  <input 
                    type="number" 
                    className="form-control"
                    value={x1}
                    onChange={handleChange("x1")}
                    />
                </div>
                <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <span className='input-group-text bg-primary text-white'>y<sub>1</sub></span>
                  </div>
                  <input 
                    type="number"
                    className="form-control"
                    value={y1}
                    onChange={handleChange("y1")}
                    />
                </div>
                
                </div>
                <div className="col-6">
                <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <span className='input-group-text bg-primary text-white'>x<sub>2</sub></span>
                  </div>
                  <input 
                    type="number"
                    className="form-control"
                    value={x2}
                    onChange={handleChange("x2")}
                    />
                </div>
                <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <span className='input-group-text bg-primary text-white'>y<sub>2</sub> </span>
                  </div>
                  <input 
                    type="number"
                    className="form-control"
                    value={y2}
                    onChange={handleChange("y2")}
                    />
                </div>
                </div>
              </div>
                )
                : 
                (null)}

              {formChoice === 'Point-Slope Form' ? 
                (
                  <div className="row">
                
                <div className="col-12">
                <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <span className='input-group-text bg-primary text-white'>x<sub>1</sub></span>
                  </div>
                  <input 
                    type="number" 
                    className="form-control"
                    value={x1}
                    onChange={handleChange("x1")}
                    />
                </div>
                <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <span className='input-group-text bg-primary text-white'>y<sub>1</sub></span>
                  </div>
                  <input 
                    type="number"
                    className="form-control"
                    value={y1}
                    onChange={handleChange("y1")}
                    />
                </div>
                </div>
                <div className="col-12">
                <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <span className='input-group-text bg-primary text-white'>Slope (m)</span>
                  </div>
                  <input 
                    type="number"
                    className="form-control"
                    value={slope}
                    onChange={handleChange("slope")}
                    />
                </div>
                </div>
              </div>
                )
                : 
                (null)}

              {formChoice === 'Normal Form' ? 
                (
                <div className="row">
                <div className="col-12">
                <div className="input-group my-2 mt-3">
                  <div className="input-group-prepend">
                    <span className='input-group-text bg-primary text-white'>
                      p (⊥<sup>r_   </sup>Dis. from Origin)
                      </span>
                  </div>
                  <input 
                    type="number" 
                    className="form-control"
                    value={p}
                    onChange={handleChange("p")}
                    />
                </div>
                </div>
                <div className="col-12">
                <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <span className='input-group-text bg-primary text-white'>θ (Angle with +ve X-Axis)</span>
                  </div>
                  <input 
                    type="number"
                    className="form-control"
                    value={theta}
                    onChange={handleChange("theta")}
                    />
                </div>
                </div>
              </div>
                )
                : 
                (null)}
              
              {/* Get Result */}
              
                <div className="row">
                <div className="col-12">
                  <button 
                    className="btn btn-outline-primary btn-block"
                    onClick={handleLineEquation}
                    >
                      Get Line Equation
                    </button>
                </div>
              </div>
              
              
            </div>
            {/* Display Result */}
            <div className="row mt-3">
              <div className="col-12">
                {lineEqu ? (<h2 className="result">Equation of line is <br/>{lineEqu}</h2>) : (null)}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
}

export default GetLines
