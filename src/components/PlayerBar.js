import React, { Component } from "react";
import "./style.css";
import IosVolumeDown from "react-ionicons/lib/IosVolumeDown";

class PlayerBar extends Component {
    render() {
        return (
            <section className="player-bar">
                <section id="time-control">
                    <div className="current-time time">
                        {this.props.formatTime(this.props.currentTime)}
                    </div>
                    <input
                        type="range"
                        className="seek-bar"
                        value={
                            this.props.currentTime / this.props.duration || 0
                        }
                        max="1"
                        min="0"
                        step="0.01"
                        onChange={this.props.handleTimeChange}
                    />
                    <div className="total-time time">
                        {this.props.formatTime(this.props.duration)}
                    </div>
                </section>

                <section id="buttons">
                    <button
                        className="button seek"
                        id="previous"
                        onClick={this.props.handlePrevClick}
                    >
                        <span className="ion-skip-backward icon icon-seek"></span>
                    </button>
                    <button
                        id="play-pause"
                        onClick={this.props.handleSongClick}
                        className="button"
                    >
                        <span
                            className={
                                this.props.isPlaying
                                    ? "ion-pause icon"
                                    : "ion-play icon"
                            }
                        ></span>
                    </button>
                    <button
                        className="button seek"
                        id="next"
                        onClick={this.props.handleNextClick}
                    >
                        <span className="ion-skip-forward icon icon-seek"></span>
                    </button>
                </section>

                <section id="volume-control">
                    <div className="ion-volume-low icon"></div>
                    <input
                        type="range"
                        className="seek-bar"
                        id="volume-bar"
                        value={this.props.volume}
                        max="1"
                        min="0"
                        step="0.01"
                        onChange={this.props.handleVolumeChange}
                    />
                    <div className="icon ion-volume-high"></div>
                </section>
            </section>
        );
    }
}

export default PlayerBar;
