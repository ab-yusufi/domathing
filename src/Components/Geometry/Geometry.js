import React from 'react';

import Points from './Points';
import GetLines from './GetLines';
import Lines from './Lines';
import PointLine from './PointLine';

import Base from './../Core/Base';

const Geometry = () => {
    return (
        <Base>
        <div className="geometry">
          <h1 className="text-center pt-3 geo_heading">
              GEOMETRY
          </h1>
          <div className="conatainer mx-5 py-4">
            <div className="row">
              <div className="col-12 col-md-6 my-3">
                <Points/>    
              </div> 
              <div className="col-12 col-md-6 my-3">
                <GetLines/>    
              </div> 
            </div>
            <div className="row">
              <div className="col-12 col-md-6 my-3">
                <Lines/>    
              </div> 
              <div className="col-12 col-md-6 my-3">
                <PointLine/>    
              </div> 
            </div>
          </div>
        </div>
        </Base>
    )
}


export default Geometry
