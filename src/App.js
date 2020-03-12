import React, { Component, Fragment } from "react";
import AutoComplete from "./Autocomplete";
import "./App.scss";
import lagosbridge from "./images/lagosbridge.jpg";
import back from "./images/back.jpg";
import oyo from "./images/cocoahouse.jpeg";

class App extends Component {
  render() {
   
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
              <img src={back} alt={"picture of a popular place in Abuja"} />
              <a href={'https://www.britannica.com/place/Abuja-national-capital-Nigeria'}>Abuja</a>
              <h3>latitude: 7.5243793</h3>
              <h3>longitude: 3.3792057</h3>
            </div>

            <div className="place">
              <img src={lagosbridge} alt={"picture of a popular place in Lagos State"} />
              <a href={'https://www.britannica.com/place/Lagos-Nigeria'}>Lagos</a>
              <h3>latitude: 6.5243793</h3>
              <h3>longitude: 4.3792057</h3>
            </div>

            <div className="place">
              <img src={oyo} alt={"A popular place in Oyo state"} />
              <a href={'https://www.britannica.com/place/Oyo-state-Nigeria'}>Oyo</a>
              <h3>latitude: 6.5243793</h3>
              <h3>longitude: 7.3792057</h3>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default App;
