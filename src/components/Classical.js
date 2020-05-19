import React from "react";
import { Link } from "react-router-dom";
import Buttons from "./buttons";
import MiniMenu from "./miniMenu";
function Classical() {
  return (
    <div className="container">
      <div className="texts">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div>
            <h1 className="midnight"> Midnight Chill </h1>{" "}
          </div>
        </Link>
        <div>
          <p className="choose"> Classical </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="gifs">
        <div className="gif-10">
          <img className="gif-1" src={require("../gifs/3.gif")} alt="Class" />
          <audio className="audio-element">
            <source src="https://www.mboxdrive.com/classic.mp3" />
          </audio>
          <p> Lofi </p>
          <Buttons />
        </div>
      </div>
      <MiniMenu />
    </div>
  );
}

export default Classical;
