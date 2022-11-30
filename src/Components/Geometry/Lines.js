import React, { useState } from 'react'

const Lines = () => {
    //TODO: Parallel/Perpendicular
    //Angle and Distance bw lines

    const [lines, setLines] = useState({
      line1: null,
      line2: null
    })

    const [points, setPoints] = useState({
      x1: null,
      y1: null,
      z1: null,
      x2: null,
      y2: null,
      z2: null,
      x: null,
      y: null,
      z: null
    })

    const [result, setResult] = useState({
      distance: null,
      midpoint: null,
      ditanceFromOrigin: null,
    })

    const [section, setSection] = useState({
      sectionDisabled: true,
      m: null,
      n: null,
    })
 
    const {x1, y1, z1, x2, y2, z2, x, y, z} = points
    const {distance, midpoint, distanceFromOrigin} = result
    const {sectionDisabled, m, n} = section
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

    return (
              <div className="card border-primary rounded text-center">
                <div className="card-body">
                  <div className="card-title">
                    <h1>Lines</h1>
                    <h4>Enter Line Equation in General Form (ax + by + c = 0)</h4>
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
                            value={z2}
                            onChange={handleChange("z2")}
                            />
                          </div>
                          </div>
                          <div className="input-group my-3">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <input type="radio" name="internal" className="text-primary"/>
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
                            value={z2}
                            onChange={handleChange("z2")}
                            />
                          </div>
                          </div>
                          <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <input type="radio" name="internal" className="text-primary"/>
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
                            <button className="btn btn-outline-primary btn-block">Get Coordinates</button>
                          </div>
                        </div>
                      )}
                      
                    </div>
                    {/* Display Result */}
                    <div className="row mt-3">
                      <div className="col-12">
                        {distance ? (<h2 className="result">Distance is {distance}</h2>) : (null)}
                        {midpoint ? (<h2 className="result">Midpoint is {midpoint}</h2>) : (null)}
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
    )
}

export default Lines
