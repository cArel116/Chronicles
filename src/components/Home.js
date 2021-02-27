import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
    <>
        {/* HIDDEN POP-UP--WILL CONVERT TO COMPONENT IN V.2 */}
        <div className="journal-pop-up-modal" hidden>
            <section className="pop-up-journal">
                <div className="journal-page-left">
                    <div className="journal-page-footer-left">
                        <a href="">Options</a>
                        <p>1</p>
                        <a href="">Prev</a>
                    </div>
                </div>
                <div className="journal-page-right">
                    <div className="journal-page-footer-right">
                        <a href="">Next</a>
                        <p>2</p>
                        <a href="">Close</a>
                    </div>
                </div>
            </section>
        </div>

        {/* WEATHER & DATE--WILL CONVERT TO COMPONENT IN V.2 */}
        <section className="weather-date-section">
            <div className="weather-date-div">
                <span className="homepage-heading">
                    <h2 className="date">February 12, 2021</h2>
                    <h2 className="temp">47°</h2>
                </span>
            </div>
        </section>

        {/* BOTTOM NAV--WILL CONVERT TO COMPONENT IN V.2 */}
        <section className="bottom-nav">
            <span className="home-footer">
                <div className="bottom-nav-heading">
                    <Link to="/journal">
                        <div className="footer-nav-radial">
                            <h3 className="home-footer-nav">Journal</h3>
                        </div>
                    </Link>
                </div>
                <div className="footer-divider">|</div>
                <div className="bottom-nav-heading">
                    <Link to="">
                        <div className="footer-nav-radial">
                            <h3 className="home-footer-nav">Schedule</h3>
                        </div>
                    </Link>
                </div>
                <div className="footer-divider">|</div>
                <div className="bottom-nav-heading">
                    <Link to="">
                        <div className="footer-nav-radial">
                            <h3 className="home-footer-nav">Social</h3>
                        </div>
                    </Link>
                </div>
            </span>
        </section>
    </>
)