import React, { Component } from "react";

export class Buttons extends Component {
  render() {
    return (
      <div id="buttons">
        <button onClick={this.playAudio}>Play</button>
        <button onClick={this.stopAudio}>Pause</button>
      </div>
    );
  }
  playAudio() {
    const audioPlay = document.getElementsByClassName("audio-element")[0];
    audioPlay.play();
  }
  stopAudio() {
    const audioPause = document.getElementsByClassName("audio-element")[0];
    audioPause.pause();
  }
}

export default Buttons;
