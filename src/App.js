import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Input from "./components/Input";
import Select from "./components/Select";
import Card from "./components/Card";
import MoreInfo from "./components/MoreInfo";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(searchValue);
  }, [searchValue]);

  async function getData(value) {
    let link = "";

    switch (value) {
      case "africa":
        link = `region/africa`;
        break;
      case "americas":
        link = `region/americas`;
        break;
      case "asia":
        link = `region/asia`;
        break;
      case "europe":
        link = `region/europe`;
        break;
      case "oceania":
        link = `region/oceania`;
        break;
      default:
        if (value.length > 0) {
          link = `name/${value}`;
        } else {
          link = "";
        }
        break;
    }

    const res = await fetch(`https://restcountries.eu/rest/v2/${link}`);

    if (!res.ok) {
      setData([]);
    } else {
      const data = await res.json();

      setData(data);
    }
  }

  function toggleTheme() {
    if (!isDark) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }

  function setStateSearch(value) {
    setSearchValue(value);
  }

  return (
    <div className={`app ${isDark ? "dark" : ""}`}>
      <header className="app--header">
        <div
          className="app--container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <h1>Where in the World?</h1>
          <div
            className="app--darkmode"
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            {isDark ? (
              <Brightness2Icon className="icon" onClick={toggleTheme} />
            ) : (
              <Brightness2OutlinedIcon className="icon" onClick={toggleTheme} />
            )}
            <span>Dark Mode</span>
          </div>
        </div>
      </header>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="app--container">
              <section className="app-inputs">
                <Input func={setStateSearch} />
                <Select func={setStateSearch} />
              </section>
              <section className="card--grid">
                {data === []
                  ? ""
                  : data.map((country) => {
                      return (
                        <Card
                          img={country.flag}
                          name={country.name}
                          population={country.population}
                          region={country.region}
                          capital={country.capital}
                          key={country.alpha3Code}
                          id={country.alpha3Code}
                        />
                      );
                    })}
              </section>
            </div>
          </Route>
          {data.map((country) => {
            return (
              <Route path={`/${country.alpha3Code}`} key={country.alpha3Code}>
                <MoreInfo
                  img={country.flag}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  nativeName={country.nativeName}
                  subRegion={country.subregion}
                  levelDomain={country.topLevelDomain}
                  currencies={country.currencies[0].name}
                  languages={country.languages[0].name}
                  borders={country.borders}
                />
              </Route>
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
