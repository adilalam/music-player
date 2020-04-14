import React, { Component } from "react";
import { Link } from "react-router-dom";
import albumData from "./../data/albums";
import "./style.css";

class Library extends Component {
    constructor(props) {
        super(props);

        this.state = { albums: albumData };
    }

    render() {
        return (
            <div>
                <h2 className="point-title">Select an album</h2>
                <section className="library">
                    {this.state.albums.map((album, index) => (
                        <Link
                            to={`/album/${album.slug}`}
                            key={index}
                            className="libraryItem"
                        >
                            <img
                                src={album.albumCover}
                                alt={album.title}
                                className="album-cover"
                            />
                            <div>{album.title}</div>
                            <div>{album.artist}</div>
                            <div>{album.songs.length} songs</div>
                        </Link>
                    ))}
                </section>
            </div>
        );
    }
}

export default Library;
