import React, { Component } from "react";

import "../Mini.css";

//
class MiniMenu extends Component {
  render() {
    return (
      <div className="All-1">
        <h1>
          <a href="/" style={{ textDecoration: "none" }}>
            {" "}
            Midnight Chill
          </a>
        </h1>

        <a className="anchors" href="/Rain">
          <img
            className="mini-gif-1"
            src={require("../gifs/1.gif")}
            alt="rain"
          />
        </a>
        <a className="anchors" href="/Ghibli">
          <img
            className="mini-gif-2"
            src={require("../gifs/2.gif")}
            alt="rain"
          />
        </a>
        <a className="anchors" href="/Classical">
          <img
            className="mini-gif-3"
            src={require("../gifs/3.gif")}
            alt="rain"
          />
        </a>
      </div>
    );
  }
}

export default MiniMenu;
