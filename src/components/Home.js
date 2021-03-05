import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
    <>
        {/* WEATHER & DATE--WILL CONVERT TO COMPONENT IN V.2 */}
        <section className="weather-date-section">
            <div className="weather-date-div">
                <span className="homepage-heading">
                    <h2 className="date">March 4, 2021</h2>
                    <h2 className="temp">58°</h2>
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
                    <Link to="/schedule">
                        <div className="footer-nav-radial">
                            <h3 className="home-footer-nav">Schedule</h3>
                        </div>
                    </Link>
                </div>
                <div className="footer-divider">|</div>
                <div className="bottom-nav-heading">
                    <Link to="social">
                        <div className="footer-nav-radial">
                            <h3 className="home-footer-nav">Social</h3>
                        </div>
                    </Link>
                </div>
            </span>
        </section>
    </>
)