import React from "react";

import { Link } from "react-router-dom";
import Base from "./Base";

const Home = () => {
  return (
    <Base>
      <div className="container p-3">
        <div className="row">
          <div className="col-4 offset-4">
            <div className="card border border-primary text-center">
              <div className="card-body">
                <h5 className="card-title">Geometry</h5>
                <h6 className="card-subtitle mb-2 text-muted">Geometry</h6>
                <p className="card-text">
                  Calculate Distance, Midpoint, Line Equation, Point of
                  Intersection etc
                </p>

                <Link to="/geometry" className="text-white">
                  <a className="card-link btn btn-primary text-light">Open</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;
