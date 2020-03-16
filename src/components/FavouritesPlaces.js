import React, { Component, Fragment } from "react";

class myFavourites extends Component {

  state = {
    photo: this.props.location.state.photo,
    name: this.props.location.state.name,
    history: this.props.location.state.history,
    link: this.props.location.state.link,
  };

  componentDidMount() {
    const name = localStorage.getItem("name");
    const link = localStorage.getItem("link");
    this.setState({arrayData : name , link});
  }

  render() {
    const { name, link} = this.state;
   
    return (
      <div className="myFav">
        <h1 className="Addfavourite1">Favourite Places</h1>
        <div className="placeCard">
          <div>
            <h1>{`${name} State`}</h1>
          </div>
          <div className="line-through"></div>
          <div >
            <a className="favLink" href={link}>
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default myFavourites;
