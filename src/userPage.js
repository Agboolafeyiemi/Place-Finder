import React, { Component } from "react";

class Userpage extends Component {
  render() {
    const { photo, name, history, link } = this.props.location.state;
    return (
      <div className="userPage">

        <div className="userInfo">
          <div className="userText">
            <h1>{name}</h1>
          </div>
          <div className="userText">
          </div>
          <div className="userText2">
            <p>History of {name}</p>
          </div>
          <div className="textSection">
            <img src={photo} alt={name} />
            <div className="history">
              <p>{history}</p>
              <div className="link">
                <a href={link} target={'_blank'}>
                  <button>Read more</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Userpage;
