import React, { Component } from "react";


class Userpage extends Component {
  render() {
    const image = this.props.location.state.image;
    const location = this.props.location.state.location;
    const name = this.props.location.state.name;
    const history = this.props.location.state.history;
    const link = this.props.location.state.link;
    
    return (
      <div className="userPage">
        <div className="userImg">{image}</div>
        <div className="userInfo">
          <div className="userText">
            <h1>{name}</h1>
          </div>
          <div className="userText">
            <div className="userText">
              <span>
                <p>Longtitude: {location.lat}</p>
              </span>
            </div>
          </div>
          <div className="userText">
            <span>
              <p>Longtitude: {location.lng}</p>
            </span>
          </div>
          
          <div className="history">
          <p>History of {name}</p>
          <p>{history}</p>
        </div>
        <div className="link">
          <a href={link} target="_blank">
            <button>Read more</button>
          </a>
        </div>
        </div>
       
      </div>
    );
  }
}

export default Userpage;
