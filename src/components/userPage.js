import React, { Component, Fragment } from "react";

class Userpage extends Component {
  state = {
    photo: this.props.location.state.photo,
    name: this.props.location.state.name,
    history: this.props.location.state.history,
    link: this.props.location.state.link,
    isclick: true,
    isSavedPlace: false,
    arrayData: []
  };

  handlePlace = () => {
    this.setState({ isclick: false, isSavedPlace: true });
    const newName = document.getElementById("name").innerHTML;
    this.setState({ arrayData: newName });
    const { name, link} = this.state;
    localStorage.setItem("link", link);
    localStorage.setItem("name", name);
  };

  viewFavouritePage = () => {
    const { name, link, history, photo, arrayData } = this.state;
    this.props.history.push({
      pathname: "/favouritePage/",
      state: {
        name: name,
        link: link,
        history: history,
        photo: photo,
        arrayData: arrayData
      }
    });
  };

  render() {
    const { photo, name, history, link } = this.state;

    return (
      <Fragment>
        <div className="Addfavourite">
          <h3>Place Information</h3>
          <button
            className={`${
              this.state.isSavedPlace === true ? "viewPlace" : "noPlace"
            }`}
            onClick={() => this.viewFavouritePage()}
          >
            My Favourite Places
          </button>
        </div>

        <div className="userPage">
          <div className="userInfo">
            <div className="userText">
              <h1 id="name">{name}</h1>
            </div>
            <div className="favourite">
              <div onClick={() => this.handlePlace()} className="favIcon">
                <img src="https://img.icons8.com/windows/32/000000/filled-like.png" />
              </div>

              <span>
                {this.state.isclick
                  ? "Add to favourite place"
                  : "Added to favourite place"}
              </span>

              {/* <span>{isSavedItem ? "Saved" : "Save For Later"}</span> */}
            </div>
            <div className="userText"></div>
            <div className="userText2">
              <p>History of {name}</p>
            </div>
            <div className="textSection">
              <img src={photo} alt={name} />
              <div className="history">
                <p>{history}</p>
                <div className="link">
                  <a href={link} target={"_blank"}>
                    <button>Read more</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Userpage;
