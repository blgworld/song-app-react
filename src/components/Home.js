import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="texts">
        <div>
          <h1 className="midnight">Midnight Chill</h1>
        </div>
        <div>
          <p className="choose">Choose your category</p>
        </div>
      </div>
      <div className="gifs">
        <Link to="/Rain" style={{ textDecoration: "none" }}>
          <div className="gif-10">
            <img className="gif-1" src={require("../gifs/1.gif")} alt="rain" />

            <p>Lofi</p>
          </div>
        </Link>

        <Link to="/Ghibli" style={{ textDecoration: "none" }}>
          <div className="gif-20">
            <img
              className="gif-2"
              src={require("../gifs/2.gif")}
              alt="totoro"
            />
            <p>Ghibli</p>
          </div>
        </Link>

        <Link to="/Classical" style={{ textDecoration: "none" }}>
          <div className="gif-30">
            <img className="gif-3" src={require("../gifs/3.gif")} alt="notes" />
            <p>Classical</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Home;
