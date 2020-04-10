import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMobileAlt,
    faMusic,
    faHeadphones,
} from "@fortawesome/free-solid-svg-icons";

const Landing = () => (
    <section className="landing">
        <div className="hero-image">
            <h1 className="hero-text">Turn the music up!</h1>
        </div>

        <section className="selling-points">
            <div className="point">
                <FontAwesomeIcon icon={faMusic} size="5x" className="icon" />
                <h2 className="point-title">Choose your music</h2>
                <p className="point-description">
                    The world is full of music - why should you have to listen
                    to music someone else chose?
                </p>
            </div>
            <div className="point">
                <FontAwesomeIcon
                    className="icon"
                    icon={faHeadphones}
                    size="5x"
                />
                <h2 className="point-title">Unlimited, streaming, ad-free</h2>

                <p className="point-description">
                    No arbitrary limits. No distractions.
                </p>
            </div>
            <div className="point">
                <FontAwesomeIcon
                    className="icon"
                    icon={faMobileAlt}
                    size="5x"
                />
                <h2 className="point-title">Mobile enabled</h2>
                <p className="point-description">
                    Listen to your music on the go. This streaming service is
                    available on all mobile platforms.
                </p>
            </div>
        </section>
    </section>
);

export default Landing;
