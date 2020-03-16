import React, { Component } from "react";
import data from "./data";

class AutoComplete extends Component {
  items = ["Abuja", "Lagos", "Enugu", "Oyo", "Ogun", "Abia", "Ekiti", "Osun"];
  state = {
    isClick: false,
    suggestions: [],
    text: "",
    results: [],
    name: [],
    location: "",
    image: ""
  };

  handleInputDisplay = () => {
    this.setState({ isClick: true });
  };
  onTextChanged = e => {
    const value = e.target.value;
    let suggestions = [];

    this.setState ({
      results: data.candidates
    });

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item , index) => (
          <li key={index} onClick={() => this.suggestionSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  }
  goToUserPage = event => {
    event.preventDefault();
    const query = [...this.state.text].join("");
    const mapRes = [...this.state.results];
    
    for (let data of mapRes) {
      if (query === data.name) {
        this.props.history.push({
          pathname: "/userPage/",
          state: {
            name: data.name,
            location: data.location,
            link: data.link,
            history: data.history,
            photo: data.photos
          }
        });
      }
    }
  };

  render() {
    const { text } = this.state;

    return (
      <div
        className={`${this.state.isClick === true ? "search open" : "search"}`}
        onClick={this.handleInputDisplay}
      >
        <form onSubmit={this.goToUserPage}>
          <input
            className="search-box"
            value={text}
            onChange={this.onTextChanged}
            type="text"
          />
        </form>
        <span className="search-button">
          <span className="search-icon"></span>
        </span>
        {this.renderSuggestions()}
      </div>
    );
  }
}
export default AutoComplete;
