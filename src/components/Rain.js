import React, { Component } from "react";
import { Link } from "react-router-dom";

import Buttons from "./buttons";
import MiniMenu from "./miniMenu";
class Rain extends Component {
  render() {
    return (
      <div className="container">
        <div className="texts">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div>
              <h1 className="midnight">Midnight Chill</h1>
            </div>
          </Link>
          <div>
            <p className="choose">Lo Fi</p>
          </div>
        </div>
        <div className="gifs">
          <div className="gif-10">
            <img className="gif-1" src={require("../gifs/1.gif")} alt="rain" />
            <audio className="audio-element">
              <source src="https://www.mboxdrive.com/lofi-1.mp3" />
            </audio>
            <p>Lofi</p>
            <Buttons />
          </div>
        </div>
        <MiniMenu />
      </div>
    );
  }
}
export default Rain;
