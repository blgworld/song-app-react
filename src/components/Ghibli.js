import React from "react";
import { Link } from "react-router-dom";
import Buttons from "./buttons";
import MiniMenu from "./miniMenu";
function Ghibli() {
  return (
    <div className="container">
      <div className="texts">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div>
            <h1 className="midnight">Midnight Chill</h1>
          </div>
        </Link>

        <div>
          <p className="choose">Ghibli</p>
        </div>
      </div>
      <div className="gifs">
        <div className="gif-10">
          <img className="gif-1" src={require("../gifs/2.gif")} alt="Ghibli" />
          <audio className="audio-element">
            <source src="https://www.mboxdrive.com/ghibli.mp3" />
          </audio>
          <p>Lofi</p>
          <Buttons />
        </div>
      </div>
      <MiniMenu />
    </div>
  );
}
export default Ghibli;
