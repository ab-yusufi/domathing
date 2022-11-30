import React, { useState } from 'react'

const Points = () => {

    const [points, setPoints] = useState({
      x1: null,
      y1: null,
      z1: null,
      x2: null,
      y2: null,
      z2: null,
      x: null,
      y: null,
      z: null,
      m: null,
      n: null
    })

    const [result, setResult] = useState({
      distance: null,
      midpoint: null,
      ditanceFromOrigin: null,
      sectionResult: null, 
    })

    const [section, setSection] = useState({
      sectionDisabled: true,
      secChoice: null,
    })
 
    const {x1, y1, z1, x2, y2, z2, x, y, z, m, n } = points
    const {distance, midpoint, distanceFromOrigin, sectionResult} = result
    const {sectionDisabled, secChoice} = section
    const handleChange = name => e => {
      setPoints({...points, [name]: e.target.value})
    }

    const handleDistance = () => {
      const calcDistance = ((x2 - x1)**2 + (y2 - y1)**2 + (z2 - z1)**2)**0.5
      const distance = Math.round((calcDistance + Number.EPSILON) * 100)/100
      setResult({...result, distance})
    }

    const handleMidpoint = () => {
      const calcMidX = (Number(x1) + Number(x2)) / 2
      const calcMidY =  (Number(y1) + Number(y2)) / 2
      const calcMidZ =  (Number(z1) + Number(z2)) / 2
      const midpoint = '(' + calcMidX + ', ' + calcMidY + ', ' + calcMidZ + ')'
      setResult({...result, midpoint})
    }

    const handleSectionFormula = () => {

      if(secChoice == 'external'){
        const calcSecIX = (Number(m) * Number(x2) -  Number(n) * Number(x1)) / (Number(m) - Number(n));

        const calcSecIY = (Number(m) * Number(y2) - Number(n) * Number(y1)) / (Number(m) - Number(n));

        const calcSecIZ = (Number(m) * Number(z2) - Number(n) * Number(z1)) / (Number(m) - Number(n));
        const sectionResult = '(' + calcSecIX + ', ' + calcSecIY + ', ' + calcSecIZ + ')';
        setResult({...result, sectionResult});
      } 
      else if(secChoice == 'internal') {
        const calcSecEX = (Number(m) * Number(x2) +  Number(n) * Number(x1)) / (Number(m) + Number(n));

        const calcSecEY = (Number(m) * Number(y2) + Number(n) * Number(y1)) / (Number(m) + Number(n));

        const calcSecEZ = (Number(m) * Number(z2) + Number(n) * Number(z1)) / (Number(m) + Number(n));
        const sectionResult = '(' + calcSecEX + ', ' + calcSecEY + ', ' + calcSecEZ + ')';
        setResult({...result, sectionResult});
        console.log(sectionResult)
      }
      console.log(secChoice)
      
      
      

      

      

      // setResult({...result, })


    }

    return (
      <div className="card border-primary rounded text-center">
        <div className="card-body">
          <div className="card-title">
            <h1>Distance & MidPint</h1>
            <h4>Enter the coordinates</h4>
            <p className="text-info">(Empty will be considered as 0)</p>
          </div>
          <div className="form-group form-check">
            <input 
              type="checkbox" 
              name="applySection" 
              className="form-check-input"
              onChange={() => { 
                setSection({...section, sectionDisabled: !sectionDisabled})
                console.log(sectionDisabled)
              }}
              />
            
            <label>Apply Section Formula</label>
          </div>
          <div className="card-text">
            <div className="container">
              {/* Input */}
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
                <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <span className='input-group-text bg-primary text-white'>z<sub>1</sub></span>
                  </div>
                  <input 
                    type="number" 
                    className="form-control"
                    value={z1}
                    onChange={handleChange("z1")}
                    />
                </div>
                {sectionDisabled ? (null) : (
                  <>
                  <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <span className='input-group-text bg-primary text-white'>m</span>
                    <input 
                    type="number" 
                    className="form-control"
                    value={m}
                    onChange={handleChange("m")}
                    />
                  </div>
                  </div>
                  <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input 
                      type="radio"
                      value="external"
                      onClick={(e) => {
                        setSection({...section, secChoice: e.target.value})
                      }}
                      name="section" className="text-primary"/>
                    </div>
                    <input 
                    type="text"
                    className="form-control bg-white"
                    value="External"
                    readOnly
                    />
                  </div>
                </div>
                </>
                  
                
                )}
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
                <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <span className='input-group-text bg-primary text-white'>z<sub>2</sub></span>
                  </div>
                  <input 
                    type="number" 
                    className="form-control"
                    value={z2}
                    onChange={handleChange("z2")}
                    />
                </div>
                {sectionDisabled ? (null) : (
                  <>
                  <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <span className='input-group-text bg-primary text-white'>n</span>
                    <input 
                    type="number" 
                    className="form-control"
                    value={n}
                    onChange={handleChange("n")}
                    />
                  </div>
                  </div>
                  <div className="input-group mt-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input 
                      type="radio"
                      value="internal"
                      onChange={(e) => {
                        setSection({...section, secChoice: e.target.value})
                      }} 
                      name="section" className="text-primary"/>
                    </div>
                    <input 
                    type="text"
                    className="form-control bg-white"
                    value="Internal"
                    readOnly
                    />
                  </div>
                </div>
                </>
                
                )}
                
                </div>
              </div>
              {/* Get Result */}
              {sectionDisabled ? (
                <div className="row">
                <div className="col-6">
                  <button 
                    className="btn btn-outline-primary btn-block"
                    onClick={handleDistance}
                    >Get Distance
                    </button>
                </div>
                <div className="col-6">
                  <button 
                    className="btn btn-outline-primary btn-block"
                    onClick={handleMidpoint}
                    >
                      Get MidPoint
                    </button>
                </div>
              </div>
              ) : (
                <div className="row">
                  <div className="col-12">
                    <button 
                    className="btn btn-outline-primary btn-block"
                    onClick={handleSectionFormula}
                    >Get Coordinates</button>
                  </div>
                </div>
              )}
              
            </div>
            {/* Display Result */}
            <div className="row mt-3">
              <div className="col-12">
                {distance ? (<h2 className="result">Distance is {distance}</h2>) : (null)}
                {midpoint ? (<h2 className="result">Midpoint is {midpoint}</h2>) : (null)}
                {sectionResult ? (<h2 className="result">The Point is {sectionResult}</h2>) : (null)}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
}

export default Points
