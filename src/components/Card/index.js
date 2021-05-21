import React from "react";
import "./index.css";

import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div>
      <Link to={`/${props.id}`} style={{ textDecoration: "none" }}>
        <div className="card">
          <div className="card--img">
            <img src={props.img} />
          </div>
          <div className="card--info">
            <h3>{props.name}</h3>
            <ul>
              <li>
                Population: <span>{props.population}</span>
              </li>
              <li>
                Region: <span>{props.region}</span>
              </li>
              <li>
                Capital: <span>{props.capital}</span>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
