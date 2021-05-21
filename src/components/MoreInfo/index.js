import React from "react";
import "./index.css";

import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

function MoreInfo(props) {
  return (
    <div className="moreinfo--container">
      <div className="app--container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="moreinfo--button">
            <KeyboardBackspaceIcon
              style={{
                opacity: "0.8",
                color: "var(--color-text)"
              }}
            />
            <h3>Back</h3>
          </button>
        </Link>
        <section className="moreinfo--country">
          <div className="moreinfo--img">
            <img src={props.img} />
          </div>
          <div className="moreinfo--info">
            <h1>{props.name}</h1>
            <div className="moreinfo--ul">
              <ul>
                <li>
                  Native Name: <span>{props.nativeName}</span>
                </li>
                <li>
                  Population: <span>{props.population}</span>
                </li>
                <li>
                  Region: <span>{props.region}</span>
                </li>
                <li>
                  Sub Region: <span>{props.subRegion}</span>
                </li>
                <li>
                  Capital: <span>{props.capital}</span>
                </li>
              </ul>
              <ul>
                <li>
                  Top Level Domain: <span>{props.levelDomain}</span>
                </li>
                <li>
                  Currencies: <span>{props.currencies}</span>
                </li>
                <li>
                  Languages: <span>{props.languages}</span>
                </li>
              </ul>
            </div>
            <div className="moreinfo--bordercountries">
              <h4>Border Countries:</h4>
              {props.borders.map((country, index) => {
                return (
                  <div className="moreinfo--countriescard" key={index}>
                    <span>{country}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MoreInfo;
