import React, { Component, Fragment } from "react";
import data from "./data";
import AutoComplete from "./Autocomplete";
import "./App.scss";
import usa from "./images/usa.jpg";
import back from "./images/back.jpg";
import l from "./images/l.jpg";

class App extends Component {
  render() {
    console.log(data.candidates[0].photos);
    return (
      <Fragment>
        <div className="App-Componenet">
          <AutoComplete history={this.props.history} />
        </div>

        <section className="formText">
          <h1> Click here to search for your favourites places </h1>
        </section>

        <section className="places">
          <h1>Popular Places in Nigeria</h1>

          <div className="location-grid">
            <div className="place">
              <img src={usa} />
              <h4>Abuja</h4>
              <h3>lattitude: 7.5243793</h3>
              <h3>longtitude: 3.3792057</h3>
            </div>

            <div className="place">
              <img src={back} />
              <h4>Lagos</h4>
              <h3>lattitude: 6.5243793</h3>
              <h3>longtitude: 4.3792057</h3>
            </div>

            <div className="place">
              <img src={l} />
              <h4>Ibadan</h4>
              <h3>lattitude: 6.5243793</h3>
              <h3>longtitude: 7.3792057</h3>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default App;
